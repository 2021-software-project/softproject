from urllib.request import urlopen
from urllib import parse
from bs4 import BeautifulSoup
from math import *
from datetime import datetime
from job_code import match_alba_name
from tqdm import tqdm

import time, re, random, main
import pandas as pd
import ctypes

class Scrap:
    def __init__(self, rw, clist):
        self.rwdate = rw
        self.code_list = clist

        self.crawl_mon = main.crawl_mon()
        print(">>> Main 객체 생성 완료")

        self.df = self.scrap()
        print(">>> 스크랩 완료")

    def msgBox(self, title, text, style=0):
        return ctypes.windll.user32.MessageBoxW(0, text, title, style)

    # 데이터 추출 및 데이터프레임 변환
    def scrap(self):
        day = datetime.today().strftime("%Y-%m-%d")
        result_df = pd.DataFrame(
            columns=['city', 'county', 'company', 'subtitle', 'pay', 'pay_type', 'url', 'sub_code','enrol_date']
        )

        result_list = []

        # 보안문자 확인
        warnSec = "보안문자를 입력해 주시기 바랍니다"
        pSec = re.compile(warnSec)

        # 성인인증
        warnAdult = "teenLoginFom"
        pAd = re.compile(warnAdult)

        for sub_code in tqdm(self.code_list):
            sub_title = match_alba_name(sub_code)
            # 총 게시물 수를 통한 전체 페이지 갯수 확인
            url = self.crawl_mon.make_url(sub_code, rWDate=self.rwdate, page=1)
            parsed = parse.urlparse(url)  # 공고 url 생성용
            page = urlopen(url)
            bs = BeautifulSoup(page, features="html.parser")

            # 보안문자
            if pSec.search(bs.text):
                print(">>> [Error] 보안문자가 발생하였습니다")
                print(">>> url : ", url)
                self.msgBox("Error", "[Error] " + sub_title + "에서 보안문자가 발생하였습니다", 0)
                return result_df

            # 성인인증
            if pAd.search(str(bs)):
                print(">>> [Error] {} 성인인증 오류 발생".format(sub_title))
                continue

            # 초기화
            totalCount = bs.find("div", "pageSubTit").find("em").text

            r = re.findall("[0-9]", totalCount)
            PagesPerData = int(''.join(r))
            Pages = ceil(PagesPerData / 50)  # ceil 올림함수

            # url 리스트 생성
            urls = [self.crawl_mon.make_url(sub_code, rWDate=self.rwdate, ps=50, page=i) for i in range(1, Pages + 1)]
            print("\n>>> 약", len(urls)*50, "개의", sub_title, "공고 수집 시작")

            count = 0
            for url in urls:
                # 파싱

                # 랜덤 시간을 통한 req (매크로 방지용)
                randomTime = random.randrange(5, 10)  # 5 ~ 10초 간격으로 req
                time.sleep(randomTime)

                parsed = parse.urlparse(url)
                page = urlopen(url)
                bs = BeautifulSoup(page, features="html.parser")

                # 보안문자 발생시 종료
                if pSec.search(bs.text):
                    print(">>> [Error] 보안문자가 발생하였습니다")
                    print(">>> ", count, "번째 url : ", url)
                    self.msgBox("Error", "[Error] " + sub_title + "에서 보안문자가 발생하였습니다", 0)
                    return result_df
                if pAd.search(str(bs)):
                    print(">>> [Error] {} 성인인증 오류 발생".format(sub_title))
                    break

                tbody = bs.select("tbody")
                trs = tbody[len(tbody) - 1].find_all("tr")

                for tr in trs:
                    temp_list = []
                    # 'city', 'county'
                    try:
                        area = \
                            tr.find(name="td", attrs="area").find_all(name="div")[0].text.split("스크랩\n")[1].split(
                                '\n')[
                                0]

                        city = area.split(" ")[0]

                        county = area.split(" ")[1]
                    except:
                        city = ' '
                        county = ' '

                    # company.
                    try:
                        company = tr.find(name="td", attrs="subject").find_all(name="p", attrs={"cName"})[0].text
                    except:
                        company = " "

                    # subtitle.
                    try:
                        subtitle = tr.find(name="td", attrs="subject").find_all(name="p", attrs={"cTit"})[0].text
                    except:
                        subtitle = " "

                    # pay.
                    try:
                        temp_pay = tr.find(name="td", attrs={"pay"}).find_all("p")[1].text
                        r_pay = re.findall("[0-9]", temp_pay)
                        pay = int(''.join(r_pay))
                    except:
                        pay = "0"

                    # pay_type.
                    try:
                        pay_type = tr.find(name="td", attrs={"pay"}).find("img").get("alt")
                    except:
                        pay_type = "0"

                    # gender.
                    try:
                        gender = tr.find(name="p", attrs={"gender"}).text
                    except:
                        gender = "무관"

                    # age.
                    try:
                        age = tr.find(name="p", attrs={"age"}).text
                    except:
                        age = "무관"

                    # url
                    try:
                        url = tr.find("a").get("href")
                        url = parsed.scheme + "://" + parsed.netloc + url
                    except:
                        url = " "

                    result_list.append([city, county, company, subtitle, pay, pay_type, url, sub_code, day])
                    result_df = result_df.dropna(axis=0)
                count += 1
            print(">>>", sub_title, "(", sub_code, ") 완료")

        result_df = pd.DataFrame(result_list,columns=['city', 'county', 'company', 'subtitle', 'pay', 'pay_type', 'url', 'sub_code','enrol_date'])
        result_df = result_df.dropna(axis=0)

        return result_df
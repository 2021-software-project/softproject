from datetime import datetime
import re, time
import pandas as pd
import os
# import db
import scrap
import job_code


class crawl_mon:
    def __init__(self):
        self.warn = "보안문자를 입력해 주시기 바랍니다"
        self.pattern = re.compile(self.warn)
        # self.day = datetime.today().strftime("%Y-%m-%d")

        path = "./log"
        if not os.path.isdir(path):
            os.mkdir(path)

    def make_url(self, code, rWDate=4, ps=50, page=1):
        url = "https://www.albamon.com/list/gi/mon_part_list.asp?"

        url += "rpcd=" + str(code) + "&rWDate=" + str(rWDate) + "&ps=" + str(ps) + "&page=" + str(page)
        return url


if __name__ == "__main__":
    start = time.time()

    # rw = 4 # 당일 등록된 공고만
    rw = 3 # 3일 이내 등록된 공고만

    code = '~8990'

    # code_list = job_code.sub_code_list() # 한번에 전체 공고 수집 시
    # code_list = job_code.sub_code_list_part(code) # 직종 분류 별로 나눠 수집 시

    code_list = ['8075', '8116', '8117', '8085', '8095', '8118', '8100', '8110', '8990']
    crawl = scrap.Scrap(rw, code_list)

    if crawl == False:
        print("[Error] 코드 에러")
        exit()

    print(crawl.df)

    day = datetime.today().strftime("%Y-%m-%d_%H%M")

    crawl.df.to_csv("./log/" + day + "(" + code + ").csv", index=False, encoding="utf-8-sig")
    end = time.time() - start
    print(">>> Scrap time : ", end)
    print(f">>> 수집 데이터 : {crawl.df.shape}")
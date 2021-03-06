# import random

# code_list=[
# '1010','1020','1030','1040','1050','1060','1070','1080','1090','1100','1110','1120','2010',
# '2013','2016','2020','2030','2050','2060','2070','2080','2090','2100','2110','2120','2990','3010',
# '3030','3040','3043','3046','3050','3060','3070','3080','3090','3110','3120','3123','3126','3130','3140','3160','3170','3180','3990','4010',
# '4015','4020','4030','4040','4050','4060','4070','4090','4095','4100','4120','4130','4135','4140','4149','4160','4170','4180','4190','4200','4210','4220','4990','6010',
# '6015','6020','6030','6033','6036','6050','6055','6060','6070','6080','7010',
# '7020','7025','7030','7040','7050','8020',
# '8040','8050','8056','8065','8075','8085','8095','8100','8110','8990','9005',
# '9010','9016','9060','9061','9063','9066','9070','A010',
# 'A020','A030','A033','A036','A038','A040','A050','A060','A070','A080','A090','A990','B010',
# 'B020','B030','B040','B050','B060','B990','C000',
# 'C010','C020','C030','C035','C040','C050','C060','C990','D010',
# 'D020','D030','D040','D050','D060','D070','E000',
# 'E010','E020','E030','E040','E050','E060','E070'
# ]

job_code = {
    # "외식ㆍ음료"
    "1000": {
        '서빙' : '1121',
        '주방장ㆍ조리사' : '1122',
        '주방보조ㆍ설거지' : '1123',
        '바리스타' : '1124',
        '제과제빵사' : '1125',
        '일반음식점' : '1010',
        '레스토랑' : '1020',
        '패밀리레스토랑' : '1030',
        '패스트푸드점' : '1040',
        '치킨ㆍ피자전문점' : '1050',
        '커피전문점' : '1060',
        '아이스크림ㆍ디저트' : '1070',
        '베이커리ㆍ도넛ㆍ떡' : '1080',
        '호프ㆍ일반주점' : '1090',
        '급식ㆍ푸드시스템' : '1110',
        '도시락ㆍ반찬' : '1120'
    },
    # "매장관리ㆍ판매"
    "2000": {
        '매장관리ㆍ판매' : '2121',
        '캐셔ㆍ카운터' : '2122',
        '판촉도우미' : '2123',
        'MDㆍ쇼핑몰운영' : '2124',
        '백화점ㆍ쇼핑몰' : '2010',
        '유통점ㆍ마트' : '2020',
        '도소매ㆍ전통시장' : '2137',
        '편의점' : '2030',
        '의류ㆍ잡화ㆍ쥬얼리매장' : '2050',
        '뷰티ㆍ헬스스토어' : '2060',
        '휴대폰ㆍ전자기기매장' : '2070',
        '가구ㆍ침구ㆍ인테리어' : '2080',
        '생활용품샵' : '2138',
        '서점ㆍ문구ㆍ팬시' : '2090',
        '약국' : '2100',
        '농수산ㆍ청과ㆍ축산' : '2110',
        '화훼ㆍ꽃집' : '2120',
        '스터디룸ㆍ독서실ㆍ고시원' : '2125',
        'PC방' : '2126',
        '노래방' : '2127',
        '볼링ㆍ당구장' : '2128',
        '스크린 골프ㆍ야구' : '2129',
        'DVDㆍ멀티방ㆍ만화카페' : '2130',
        '오락실ㆍ게임장' : '2131',
        '이색테마카페' : '2132',
        '키즈카페' : '2133',
        '찜질방ㆍ사우나ㆍ스파' : '2134',
        '피트니스ㆍ스포츠' : '2135',
        '고속도로휴게소' : '2136',
        '매장관리ㆍ판매 기타' : '2990'
    },
    # "서비스"
    "4000": {
       '놀이공원ㆍ테마파크' : '4221',
       '호텔ㆍ리조트ㆍ숙박' : '4222',
       '여행ㆍ캠프ㆍ레포츠' : '4223',
       '영화관ㆍ공연장' : '4224',
       '전시ㆍ컨벤션ㆍ세미나' : '4225',
       '안내데스크ㆍ리셉션' : '4070',
       '주차유도ㆍ안내' : '4090',
       '보안ㆍ경비ㆍ경호' : '4095',
       '주유ㆍ세차' : '4100',
       '렌터카ㆍ차량관리' : '4228',
       '전단지배포' : '4120',
       '청소ㆍ미화' : '4130',
       '렌탈관리ㆍA/S' : '4135',
       '골프캐디' : '4227',
       '헤어ㆍ미용ㆍ네일샵' : '4140',
       '피부관리ㆍ마사지' : '4149',
       '반려동물케어' : '4160',
       '베이비시터ㆍ가사도우미' : '4170',
       '결혼ㆍ연회ㆍ장례도우미' : '4180',
       '이벤트ㆍ행사스텝' : '4200',
       '나레이터모델' : '4210',
       '피팅모델' : '4220',
       '공인중개' : '4226',
       '서비스 기타' : '4990'
    },
    # "사무직"
    "6000": {
        '사무보조' : '6010',
        '문서작성ㆍ자료조사' : '6015',
        '데이터수집ㆍ가공' : '6082',
        '비서' : '6020',
        '경리ㆍ회계보조' : '6030',
        '인사ㆍ총무' : '6033',
        '마케팅ㆍ광고ㆍ홍보' : '6036',
        '바이럴ㆍSNS마케팅' : '6081',
        '번역ㆍ통역' : '6050',
        '복사ㆍ출력ㆍ제본' : '6055',
        '편집ㆍ교정ㆍ교열' : '6060',
        '공공기관ㆍ공기업ㆍ협회' : '6070',
        '학교ㆍ도서관ㆍ교육기관' : '6080'
    },
    # "고객상담ㆍ리서치ㆍ영업"
    "7000": {
        '고객상담ㆍ인바운드' : '7010',
        '텔레마케팅ㆍ아웃바운드' : '7020',
        '쇼핑몰인바운드' : '7051',
        '금융ㆍ보험영업' : '7025',
        '오프라인영업ㆍ판매' : '7030',
        '설문조사ㆍ리서치' : '7040',
        '콜센터관리ㆍ모니터링' : '7052',
        '영업관리ㆍ지원' : '7050'
    },
    # "생산ㆍ건설ㆍ노무"
    "8000": {
        '제조ㆍ가공ㆍ조립' : '8020',
        '포장ㆍ품질검사' : '8040',
        '입출고ㆍ창고관리' : '8050',
        '상하차ㆍ소화물 분류' : '8056',
        '물류피킹ㆍ포장ㆍ전산' : '8111',
        '지게차운전' : '8112',
        '금형ㆍ사출ㆍ프레스ㆍ사상' : '8113',
        '반도체ㆍ전자부품생산' : '8114',
        '기계조작ㆍ오퍼레이터' : '8115',
        '정비ㆍ수리ㆍ설치ㆍA/S' : '8075',
        '전기ㆍ시설물관리' : '8116',
        '운반ㆍ설치ㆍ철거' : '8117',
        '공사ㆍ건설현장' : '8085',
        '전기ㆍ칸막이ㆍ배관공사' : '8095',
        '인테리어ㆍ보수공사' : '8118',
        '조선소' : '8100',
        '재단ㆍ재봉' : '8110',
        '생산ㆍ건설ㆍ노무 기타' : '8990'
    },
    # "ITㆍ기술"
    "9000": {
        '웹ㆍ콘텐츠기획' : '9005',
        '사이트관리ㆍ기술지원' : '9010',
        '프로그래머' : '9060',
        'HTML코딩' : '9061',
        'QAㆍ테스터ㆍ검증' : '9063',
        '시스템ㆍ네트워크ㆍ보안' : '9066',
        'PCㆍ디지털기기 설치ㆍ관리' : '9070'
    },
    # "교육 강사"
    "A000": {
        '입시ㆍ보습학원' : 'A010',
        '외국어ㆍ어학원' : 'A020',
        '독서ㆍ논술ㆍ스피치학원' : 'A091',
        '컴퓨터ㆍ정보통신' : 'A030',
        '요가ㆍ필라테스 강사' : 'A033',
        '피트니스 트레이너' : 'A036',
        '레져스포츠 강사' : 'A038',
        '예체능 강사' : 'A040',
        '유아ㆍ유치원' : 'A050',
        '등하원ㆍ승하차도우미' : 'A092',
        '방문ㆍ학습지' : 'A060',
        '보조교사' : 'A070',
        '자격증ㆍ기술학원' : 'A080',
        '국비교육기관' : 'A090',
        '학원운영지원' : 'A093',
        '교재ㆍ교육콘텐츠제작' : 'A094',
        '교육ㆍ강사 기타' : 'A990'
    },
    # "디자인"
    "B000": {
        '웹ㆍ모바일디자인' : 'B010',
        '그래픽ㆍ영상ㆍ편집디자인' : 'B020',
        '제품ㆍ산업디자인' : 'B030',
        'CADㆍCAMㆍ인테리어디자인' : 'B040',
        '캐릭터ㆍ애니메이션디자인' : 'B050',
        '패션ㆍ잡화디자인' : 'B060',
        '디자인 기타' : 'B990'
    },
    # "미디어"
    "C000": {
        '보조출연ㆍ방청' : 'C010',
        '방송스텝ㆍ촬영보조' : 'C020',
        '동영상촬영ㆍ편집' : 'C030',
        '사진촬영ㆍ편집' : 'C035',
        '조명ㆍ음향' : 'C040',
        '방송사ㆍ프로덕션' : 'C050',
        '신문ㆍ잡지ㆍ출판' : 'C060',
        '미디어 기타' : 'C990'
    },
    # "운전ㆍ배달"
    "D000": {
        '화물ㆍ운송ㆍ이사' : 'D010',
        '택배ㆍ배송기사' : 'D060',
        '납품기사' : 'D071',
        '중장비ㆍ특수차' : 'D050',
        '발렛파킹' : 'D072',
        '택시ㆍ대리ㆍ수행기사' : 'D020',
        '버스ㆍ셔틀운전' : 'D030',
        '퀵서비스' : 'D073',
        '배달대행ㆍ음식배달' : 'D070',
        '도보배달' : 'D074'
    },
    # "병원ㆍ간호ㆍ연구"
    "E000": {
        '간호조무사ㆍ간호사' : 'E010',
        '의료기사' : 'E071',
        '간병ㆍ요양보호사' : 'E020',
        '원무ㆍ코디네이터' : 'E030',
        '외래보조ㆍ병동보조' : 'E040',
        '수의테크니션ㆍ동물보건사' : 'E050',
        '실험ㆍ연구보조' : 'E060',
        '생동성ㆍ임상시험' : 'E070'
    }
}

# 직종 랜덤 추출 후, 한글 직종으로 변환하여 dict 형태로 반환
# key : 직종 한글, value : 직종 코드

def codeToKorean(job_code_list):
    #job_code_list = random.choices(code_list, k=5)
    job_list = {}
    for i in job_code_list :
       large_code=i[0] + '000'
       for key, value in job_code[large_code].items():
           if value == i:
               job_list[key] = value
    # print(job_list)
    return job_list

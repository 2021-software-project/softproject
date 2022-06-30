# ALBAGRAM (mbti 기반 아르바이트 추천 웹서비스)
  
### Web Part
> frontend : React, Redux  
  backend : Django, MySQL

### 💛 프로젝트 개요
- MBTI(성격유형검사)로 자신에게 맞는 아르바이트 직종을 추천받을 수 있는 웹 서비스
  - 일반적인 추천 시스템은 개인에게만 포커스가 맞춰져 추천 폭이 좁다는 문제점이 있음
  - 새로운 추천 척도로 현재 20,30대에게 인기 많은 MBTI(성격 유형 검사)를 제시하여 흥미 유발과 동시에 추천 폭을 확장하고자 함

### 💚 웹 구현 기능
- 접근성이 좋은 휴대폰으로도 사용가능하도록 반응형 웹으로 구현
- 로그인 전 MBTI 입력만으로 알바를 추천받을 수 있는 체험 기능
- 회원가입(이메일 인증 포함), 로그인, 회원 정보 수정, 이메일로 비밀번호 찾기
- 첫 로그인 후 알바 선호도를 평가하는 기능
- 알바 추천 받기 기능
  - 리스트로 공고 확인 기능
  - 모달창으로 자세한 공고 보기 기능
  - 좋아요/싫어요를 통한 스크랩 기능
- 알바 평가 기능
- 마이페이지
  - MBTI 변경 기능
  - Django Password Rest 과 이메일 전송을 통한 비밀번호 변경 기능
  - 좋아요/싫어요로 스크랩한 공고 조회 기능
  - 알바 평가 조회 기능

### 💙 웹 결과 화면 
- 첫 페이지
  - 간단하게 MBTI 입력만으로 아르바이트 직종을 체험으로 추천받을 수 있다     
   
  <img src="https://user-images.githubusercontent.com/80735829/144201837-da0fbdc2-4aa2-49ae-a3f8-bd5b1e8b9ec8.png"  width="210" height="370"/> <img src="https://user-images.githubusercontent.com/80735829/144201937-25c7ef19-2476-4b74-9ba8-0fd4b5f4b90c.png"  width="210" height="370"/> <img src="https://user-images.githubusercontent.com/80735829/144203156-127009e1-60a8-4691-9eea-698846a5e311.png"  width="210" height="370"/> 

- 로그인/회원가입       
  <img src="https://user-images.githubusercontent.com/80735829/144205067-dbd3ee2e-14e6-4bba-8376-b4176934bfa2.png"  width="210" height="370"/> <img src="https://user-images.githubusercontent.com/80735829/144205202-974ebfda-bcaf-4264-9df2-7f482c44a24e.png"  width="210" height="370"/>
  
- 첫 로그인 후 알바 선호도를 평가하는 기능
  - 추천시스템은 사용자의 평가데이터가 없으면 성능이 저하될 수 있기에 첫 로그인 시 사용자의 알바 선호도를 조사한다      
      
  <img src="https://user-images.githubusercontent.com/80735829/144205554-989bca6f-795d-4775-9aeb-9b8ad398a287.png"  width="210" height="370"/>

- 알바 추천 받기 기능 (MBTI 추천, 개인별 추천)        
  <img src="https://user-images.githubusercontent.com/80735829/144206094-9b346242-2052-4d4e-9c98-f2f0e0b03e83.png"  width="210" height="370"/> <img src="https://user-images.githubusercontent.com/80735829/144206731-89a858e0-a897-4967-b67b-c17c278ad1cb.png"  width="210" height="370"/>  <img src="https://user-images.githubusercontent.com/80735829/144206940-dd44f8cc-e039-43d7-878a-9750268aa5be.png"  width="210" height="370"/> <img src="https://user-images.githubusercontent.com/80735829/144207070-a3379b00-8dd7-4d76-992a-7f4d2ef90d9c.png"  width="210" height="370"/> 
  
  
- 알바 평가 기능       
  <img src="https://user-images.githubusercontent.com/80735829/144207616-8947bcb5-4b12-4705-bea5-950ed16bd7e4.png"  width="210" height="370"/> <img src="https://user-images.githubusercontent.com/80735829/144207727-719b768e-0dc7-41cc-b371-5ec950ee4b0d.png"  width="210" height="370"/>
  
  
- 마이페이지
  - 알바 평가 조회 기능, 좋아요/싫어요로 스크랩한 공고 조회 기능, MBTI 변경 기능, 비밀번호 변경 기능         
  
  <img src="https://user-images.githubusercontent.com/80735829/144208339-4d3420b9-e691-4619-b048-b6fe099ac772.png"  width="210" height="370"/> <img src="https://user-images.githubusercontent.com/80735829/144208657-ca74c04b-e6d1-438b-b756-aa4d35095d9b.png"  width="210" height="370"/> <img src="https://user-images.githubusercontent.com/80735829/144209271-300c7724-6578-4741-941e-d7cb4a6dc2f0.png"  width="210" height="370"/>                    
   <img src="https://user-images.githubusercontent.com/80735829/144208466-b831c828-50e3-4c3f-a3b2-327862186629.png"  width="210" height="370"/> <img src="https://user-images.githubusercontent.com/80735829/144208510-a5462b8a-284a-42b2-97a2-bb8b1d0abb59.png"  width="210" height="370"/> 
  



  








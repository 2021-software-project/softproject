import React, {useEffect,useState} from 'react';
import "../../css/FirstUserLike.css"
import Axios from "axios";


function FirstUserLike(){
    let username = localStorage.getItem("username")
    const jobFamilyList = [
        "외식ㆍ음료","매장관리ㆍ판매","외식ㆍ음료","외식ㆍ음료","외식ㆍ음료","교육ㆍ강사","외식ㆍ음료",
        "생산ㆍ건설ㆍ노무","생산ㆍ건설ㆍ노무","교육ㆍ강사","생산ㆍ건설ㆍ노무","사무직","매장관리ㆍ판매",
        "생산ㆍ건설ㆍ노무","매장관리ㆍ판매","서비스","외식ㆍ음료","외식ㆍ음료","외식ㆍ음료","서비스"
    ]
    const jobList = [
        "일반음식점","편의점","커피전문점","서빙","베이커리ㆍ도넛ㆍ떡","입시ㆍ보습학원","패스트푸드점",
        "상하차ㆍ소화물 분류","공사ㆍ건설현장","방문ㆍ학습지","제조ㆍ가공ㆍ조립","사무보조","유통점ㆍ마트",
        "입출고ㆍ창고관리","키즈카페","호텔ㆍ리조트ㆍ숙박","호프ㆍ일반주점","치킨ㆍ피자전문점","레스토랑","보안ㆍ경비ㆍ경호"
    ];

    const [firstJobs, setfirstJobs] = useState([]); //선택된 직종
    const [colorArr, setColor] = useState(Array(jobList.length).fill(false));

    const onClickFirstJob=(e)=>{
        const selectedJob = e.index;


        if(firstJobs.includes(selectedJob))
        {
            setfirstJobs(firstJobs.filter(firstJobs => firstJobs!==selectedJob))
            setColor(
                colorArr.map((col,index)=>
                index === e.index? false:col))
        }
        else {
            if(firstJobs.length >= 3)
            {
                alert("이미 3개를 선택하셨습니다.");
            }
            else {
                setfirstJobs([...firstJobs, selectedJob]);
                setColor(
                    colorArr.map((col,index)=>
                    index === e.index? true:col))
            }
        }
    }

    const onJobSelectBtnClick = async () =>{
        if(firstJobs.length<3)
        {
            alert("3개를 선택해주세요");
        }
        else
        {
            let token = localStorage.getItem('token');
            let email = localStorage.getItem('email');
            let job;
            let resjob=0;
            for(job=0;job<firstJobs.length;job++)
            {
                console.log(job)
                const firstRating = {
                    email: email,
                    jobfamily : jobFamilyList[firstJobs[job]],
                    job : jobList[firstJobs[job]],
                    score : 4
                }


                await Axios.post("/user/userrating/", firstRating,{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                    }})
                    .then(response=>{
                        resjob+=1;
                        if(resjob === 3){
                            window.location.replace('/main')
                        }
                    }).catch(err=> {
                        var errCode = err.response.status;
                        if (errCode == 401) {
                            localStorage.clear();
                            alert("다시 로그인 해주세요.")
                            window.location = '/login';
                        }else{
                            window.location = '/error'
                        }
                })
            }
            window.location.replace('/main')
        }
    }

    return(
        <div className="FirstUserLike">
            <div className="firstJobSelect">
                <h2 className="header">{username}님, 하고싶으신 아르바이트 업종 <span style={{textDecoration:"underline", textUnderlinePosition:"under"}}>3개</span> 선택하세요</h2>
                <h6 className="header-info">회원님이 좋아하실만한 아르바이트를 더 정확하게 추천할 수 있습니다. 아래의 업종을 클릭해주세요</h6>

            </div><br/>


            <div className="firstjob-grid-thead">
            {jobList.map((i,index) =>
                (<div id={i} key={i} onClick={()=>{onClickFirstJob({i, index})}}
                      className="firstjob-cell" >
                    <div className={`firstjobImgDiv${colorArr[index] ? ' clicked' : ''}`} >
                        <img className="firstjobImg" src={require(`../../img/albaIcon/${i}.png`).default}/></div>
                    <div>{i}</div>
                </div>))}
            </div>

            <br/>

            <div className="con">
                <button className="jobSelectBtn" onClick={onJobSelectBtnClick}>선택완료</button>
            </div>


        </div>

    )
}
export default FirstUserLike;
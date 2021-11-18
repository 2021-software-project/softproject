import React, {useEffect,useState} from 'react';
import "../../css/FirstUserLike.css"
import Axios from "axios";
// import albaIcon from "../../img/albaIcon"

function FirstUserLike(){
    let username = localStorage.getItem("username")
    const jobFamilyList = [
        "외식ㆍ음료","유통ㆍ판매","외식ㆍ음료","서비스","외식ㆍ음료","교육ㆍ강사","외식ㆍ음료",
        "생산ㆍ건설ㆍ운송","생산ㆍ건설ㆍ운송","교육ㆍ강사","생산ㆍ건설ㆍ운송","사무직","유통ㆍ판매",
        "생산ㆍ건설ㆍ운송","문화ㆍ여가ㆍ생활","문화ㆍ여가ㆍ생활","외식ㆍ음료","외식ㆍ음료","외식ㆍ음료","서비스"
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
        console.log(selectedJob);

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

    const onJobSelectBtnClick = () =>{
        if(firstJobs.length<3)
        {
            alert("3개를 선택해주세요");
        }
        else
        {
            let token = localStorage.getItem('token');
            let email = localStorage.getItem('email');
            var job;
            for(job=0;job<firstJobs.length;job++)
            {
                const firstRating = {
                    email: email,
                    jobfamily : jobFamilyList[firstJobs[job]],
                    job : jobList[firstJobs[job]],
                    score : 4
                }
                console.log(firstRating);
                Axios.post("/user/userrating/", firstRating,{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                    }})
                    .then(response=>{
                        console.log(response)
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
                <button className="jobSelectBtn" onClick={onJobSelectBtnClick}>선택완료</button>
            </div><br/>

            {/*<div className="jobSelected">{firstJobs.map(j => (<div>{j}</div>))}</div>*/}

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
        </div>

    )
}
export default FirstUserLike;
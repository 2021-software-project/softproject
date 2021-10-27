import React, {useEffect,useState} from 'react';
import UserName from "../MyPage/UserName";
import "../../css/FirstUserLike.css"
import Axios from "axios";

function FirstUserLike(){
    const jobList = [
        "외식ㆍ음료","유통ㆍ판매","문화ㆍ여가ㆍ생활","서비스","사무직","고객상담ㆍ리서치ㆍ영업",
        "생산ㆍ건설ㆍ운송","ITㆍ컴퓨터","교육ㆍ강사","디자인","미디어","운전ㆍ배달","병원ㆍ간호ㆍ연구"];

    const [firstJobs, setfirstJobs] = useState([]);

    const onClickFirstJob=(e)=>{
        const selectedJob = e.i;
        console.log(selectedJob);

        if(firstJobs.includes(selectedJob))
        {
            setfirstJobs(firstJobs.filter(firstJobs => firstJobs!==selectedJob))
        }
        else {
            if(firstJobs.length >= 3)
            {
                alert("이미 3개를 선택하셨습니다.");
            }
            else {
                setfirstJobs([...firstJobs, selectedJob]);
                console.log(firstJobs);
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
                    jobfamily : firstJobs[job],
                    job : "0",
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
                <h3 className="header"><UserName/>님, 하고싶으신 아르바이트 업종 3개 선택하세요</h3>
                <h6 className="header-info">회원님이 좋아하실만한 아르바이트를 더 정확하게 추천할 수 있습니다. 아래의 업종을 클릭해주세요</h6>
                <button className="jobSelectBtn" onClick={onJobSelectBtnClick}>선택 완료</button>
            </div><br/>

            <div className="jobSelected">{firstJobs.map(j => (<div>{j}</div>))}</div>

            <div className="firstjob-grid-thead">
            {jobList.map(i =>
                (<div key={i} onClick={()=>{onClickFirstJob({i})}} className="firstjob-cell" >{i}</div>))}
            </div>

            <br/>
        </div>

    )
}
export default FirstUserLike;
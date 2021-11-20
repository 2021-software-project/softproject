import React, {useState, useEffect} from 'react';
import Mypage from "./MyPage";

import "../../css/mypage.css";
import axios from "axios";
import GoodBadPostings from "../../js/GoodBadPostings" ;

function GoodBad(){

    let email = localStorage.getItem('email');
    let token = localStorage.getItem('token');
    // const [goodList, setGoodList] = useState([]);
    // const [badList, setBadList] = useState([]);
    const [totalList, setTotalList] = useState([]);
    useEffect(()=>{
        axios.get(`/user/userpostinglike/withposting/${email}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            }
        })
        .then((Response) => {
            setTotalList(Response.data);
            // Response.data.map((i)=> {
            //         if (i.like === 1) {
            //             if(!goodList.includes(i)){
            //                 console.log(goodList.includes(i));
            //                 setGoodList(goodList => [...goodList, i]);
            //             }
            //         } else if (i.like === -1) {
            //             if(!badList.includes(i)) {
            //                 setBadList(badList => [...badList, i]);
            //             }
            //         }
            //     }
            // )
        })
        .catch((err) => {
            var errCode = err.response.status;
            if (errCode == 401){
                alert("다시 로그인 해주시기 바랍니다.")
                localStorage.clear();
                window.location = '/login'
            }else{
                window.location = '/error'
            }
        })
    }, []);
    const goRecommendMbti=()=>{
        window.location.replace('/Mbti_rcm');
    }
    const goRecommendPersonal=()=>{
        window.location.replace('/Personal_rcm');
    }
    console.log(totalList);


    return(
        <div id = "goodBadList">
            {totalList.length!=0?
            <div>
             <h2>좋아요</h2>
                {totalList.map((i)=>(
                    i.like === 1?
                    <div className="goodcard" id={i.post_id.id}>
                        <GoodBadPostings
                            id={i.post_id.id}
                            city={i.post_id.city}
                            company={i.post_id.company}
                            county={i.post_id.county}
                            pay={i.post_id.pay}
                            pay_type={i.post_id.pay_type}
                            sub_code={i.post_id.sub_code}
                            subtitle={i.post_id.subtitle}
                            url={i.post_id.url}
                        />
                    </div>
                        : <div></div>
                ))
                }

                <br/>
            <h2>싫어요</h2>
                {totalList.map((i)=>(
                    i.like === -1?
                    <div className="badcard" id={i.post_id.id}>
                        <GoodBadPostings
                            id={i.post_id.id}
                            city={i.post_id.city}
                            company={i.post_id.company}
                            county={i.post_id.county}
                            pay={i.post_id.pay}
                            pay_type={i.post_id.pay_type}
                            sub_code={i.post_id.sub_code}
                            subtitle={i.post_id.subtitle}
                            url={i.post_id.url}
                        />
                    </div>
                        :<div></div>
                ))
                }
            </div>
            :''}
                <br/><div>
                    <h2>추천받으시겠습니까 ?</h2>
                    <button className="goRecommend" onClick={goRecommendMbti}>mbti 추천받기</button>
                    <button className="goRecommend" onClick={goRecommendPersonal}>개인별 추천받기</button>
                </div>



        </div>

    )
}

export default GoodBad;
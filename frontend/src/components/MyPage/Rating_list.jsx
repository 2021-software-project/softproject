import React, {useEffect, useState} from 'react';
import Mypage from "./MyPage";
import axios from 'axios';
import "../../css/RatingList.css";
function RatingOne({index, id, jobfamily, job, score}){
    const ratingDelete=(e)=>{
        let chkDelete = window.confirm("삭제하시겠습니까?");
        if(chkDelete == true){
          axios.delete(process.env.REACT_APP_DB_HOST+'/user/userrating/'+e.id,
            { headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + localStorage.getItem('token'),
                }})
          .then(function (response) {
            window.location.replace("/mypage");
          })
          .catch(function (error) {
            // handle error
            //console.log(error);
            var errCode = error.response.status;
            if (errCode == 401){
                alert("다시 로그인 해주시기 바랍니다.")
                localStorage.clear();
                window.location = '/login'
            }else{
                window.location = '/error'
            }
          })
        }
        else if(chkDelete == false){

        }
    }
  return(
      <tr className={`ratingListRow${index%2?' odd':''}`}>
            <td>{jobfamily}</td>
            <td>{job}</td>
            <td>{score}점 </td>
            <td className="deleteRow" onClick={()=>ratingDelete({id})} id={id}>삭제 </td>
      </tr>

  )
}
function Rating(){

    const [ratinglist, setRatinglist] = useState('')
    let token = localStorage.getItem('token')
    let email = localStorage.getItem('email')
    let username = localStorage.getItem('username')
    useEffect(() => {
        axios.get(process.env.REACT_APP_DB_HOST+`/user/userrating/?search=${email}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                }
            })
            .then((Response) => {
                setRatinglist(
                    Response.data
                )

            })
            .catch((Error) => {
                //console.log(Error)
            })

    }, [])

    const onJobSelectBtnClick = () =>{
        window.location.replace('/Alba_rating');
    }

    return(
        <div id ="ratingList" >
          <div id="con_mar">
            <h2>{username}님이 평가한 아르바이트</h2>
              {ratinglist.length!=0 ?
                  <div className="ratingListTable">
                      <table>
                          <tr>
                              <th>직종</th>
                              <th>업종</th>
                              <th>점수</th>
                              <th>비고</th>
                          </tr>
                          <tbody>
                          {ratinglist && ratinglist.map((ratingone, index) => (
                              <RatingOne index={index} id={ratingone.id} jobfamily={ratingone.jobfamily}
                                         job={ratingone.job} score={ratingone.score}/>
                          ))}
                          </tbody>
                      </table>
              </div> :''}
                  <button className="jobSelectBtn" onClick={onJobSelectBtnClick}>알바평가하러 가기</button>
          </div>
        </div>
    )
}

export default Rating
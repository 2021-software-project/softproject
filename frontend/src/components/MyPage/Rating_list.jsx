import React, {useEffect, useState} from 'react';
import Mypage from "./MyPage";
import axios from 'axios';
import "../../css/mypage.css";


function RatingOne({id, jobfamily, job, score}){

    const ratingDelete=(e)=>{
        console.log(e.id);
        let chkDelete = window.confirm("삭제하시겠습니까?");
        if(chkDelete == true){
          axios.delete('http://localhost:8000/user/userrating/'+e.id,
            { headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + localStorage.getItem('token'),
                }})
          .then(function (response) {
            window.location.replace("/Rating_list");
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
        }
        else if(chkDelete == false){
          console.log("취소");
        }
    }


  return(
      <tr >
            <td>{jobfamily}</td>
            <td>{job}</td>
            <td>{score}점 </td>
            <td>수정 </td>
            <td onClick={()=>ratingDelete({id})} style={{cursor:"pointer"}} id={id}>삭제 </td>
      </tr>

  )
}


function Rating(){

    const [email, setEmail] = useState('')
    const [ratinglist, setRatinglist] = useState('')
    useEffect(() => {
        let token = localStorage.getItem('token')
        console.log(token)
        if (localStorage.getItem('token') !== null) {
            axios({
                url: '/user/auth/user/',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                }
            }).then(res => {
                setEmail(
                    res.data.email
                )
                console.log(res.data)
            });
        }
    }, [])

    //userRating 데이터베이스에 접근
    if (email != '' && ratinglist == '') {
        let token = localStorage.getItem('token')
        // axios.get('/user/userrating/', {
        //     params: {search: email},
        // })
        axios.get(`/user/userrating/?search=${email}`,
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
                console.log(Response.data)
            })
            .catch((Error) => {
                console.log(Error)
            })
    }



    return(
        <div id ="my_container3" >
              <div id="con_mar">


            <h1>Rating List</h1>

            {email}<p/>


                <table align="center" border="1" width = "50%">

                    <th>직종</th> <th>업종</th> <th>점수</th>

                    <tbody>
                        {ratinglist && ratinglist.map(ratingone => (
                            <RatingOne id={ratingone.id} jobfamily = {ratingone.jobfamily} job={ratingone.job} score={ratingone.score}/>
                        )) }
                    </tbody>
                </table>

                  </div>

        </div>
    )

}

export default Rating
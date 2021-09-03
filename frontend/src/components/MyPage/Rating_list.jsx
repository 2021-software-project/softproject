import React, {useEffect, useState} from 'react';
import Mypage from "./MyPage";
import axios from 'axios';

function RatingOne({id, jobfamily, job, score}){
  return(
      <tr>
            <td>{jobfamily}</td>
            <td>{job}</td>
            <td>{score}점</td>
      </tr>
  )
}


function Rating(){

    const [email, setEmail] = useState('')
    const [ratinglist, setRatinglist] = useState('')
    useEffect(() => {
        let token = localStorage.getItem('token')

        if (localStorage.getItem('token') !== null) {
            axios({
                method: 'get',
                url: '/user/auth/user/',
                headers: {'Authorization': 'token ' + token, 'Content-Type': 'application/json'}
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
        axios.get('/user/userrating/', {
            params: {search: email},
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
        <div>
            <h2>Rating List</h2>
            {email}<p/>

            <div>
                <table align="center" border="1">
                    <thead>
                         <th>직종</th> <th>업종</th> <th>점수</th>
                    </thead>
                    <tbody>
                        {ratinglist && ratinglist.map(ratingone => (
                            <RatingOne id={ratingone.id} jobfamily={ratingone.jobfamily} job={ratingone.job} score={ratingone.score}/>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Rating
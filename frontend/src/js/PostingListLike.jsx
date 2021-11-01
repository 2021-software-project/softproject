import React, {useEffect, useState} from "react";
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import Axios from 'axios';
import axios from "axios";

function PostingListLike(props) {
    let likedData = {
        email: props.email,
        post_id: props.post_id,
    };

    const [Likes, setLikes] = useState(0);
    let token = localStorage.getItem('token')
    let email = localStorage.getItem('email')
    useEffect(() => { //목록에 좋아요 상황 바로 가져오기
        axios.get(`http://localhost:8000/user/userpostinglike/${email}/${props.post_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                }
            })
            .then((response) => {
                if (response.data.like === 1) {
                    setLikes(1);
                } else if (response.data.like === -1) {
                    setLikes(-1);
                } else {
                    setLikes(0);
                }
            })
            .catch((Error) => {
                setLikes(0);
            })
    });

    const postinglistlikeClick =()=>{
        if(Likes === 0){
            axios.post("user/userpostinglike/", {
                email:localStorage.getItem("email"),
                post_id:props.post_id,
                jobcode:props.jobcode,
                like:1
                },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    Authorization: `Token ${token}`
                }
            }).then(response=>{
                setLikes(1);
            })
            .catch(function (err){
              console.log(err)
        })}
        else if(Likes === 1){
            axios.delete(`http://localhost:8000/user/userpostinglike/${props.email}/${props.post_id}`,
                { headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                        Authorization: `Token ${token}`
                    }})
              .then(function (response) {
                  setLikes(0);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
        }
    }

    return (
        <div className="postinglistlike">
            <span onClick={postinglistlikeClick}>

            {Likes === 1 ? <HeartFilled className="likeIcon" style={{color: "#f87179"}}/>
            : Likes === -1 ? <HeartFilled className="likeIcon" style={{color: "black"}}/>
            : <HeartOutlined className="likeIcon" style={{color: "black"}}/>  }

            </span>
            {props.post_id}
        </div>
    )
}

export default PostingListLike;
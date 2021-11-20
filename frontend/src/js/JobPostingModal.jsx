import React, {useEffect, useState} from 'react';
import {LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled} from '@ant-design/icons';
import "../css/JobPostingModal.css"
import axios from "axios";

const JobPostingModal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, post_id, jobcode } = props;
    const [postingLike, setPostingLike] = useState(0);
    let token = localStorage.getItem('token');
    let email = localStorage.getItem('email');

    useEffect(() => {
        if(open) {
            axios.get(process.env.REACT_APP_DB_HOST+`/user/userpostinglike/${email}/${post_id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${token}`
                    }
                })
                .then((response) => {
                    if (response.data.like === 1) {
                        setPostingLike(1);
                    } else if (response.data.like === -1) {
                        setPostingLike(-1);
                    } else if(response.data === 0){
                        setPostingLike(0);
                    }
                })
                .catch((Error) => {
                    setPostingLike(0);
                })
        }
    })

    const likeClick=()=>{
        if(postingLike === 1) {
            axios.delete(process.env.REACT_APP_DB_HOST+`/user/userpostinglike/${email}/${post_id}`,
                { headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                        Authorization: `Token ${token}`
                    }})
              .then(function (response) {
                  setPostingLike(0);
              })
              .catch(function (error) {
                // handle error
                //console.log(error);
              })
        }
        else if(postingLike === 0){
            axios.post(process.env.REACT_APP_DB_HOST+"user/userpostinglike/", {
                email:localStorage.getItem("email"),
                post_id:post_id,
                jobcode:jobcode,
                like:1,
                mbti:localStorage.getItem("mbti"),
                },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    Authorization: `Token ${token}`
                }
                }).then(response=>{
                    setPostingLike(1);
                })
                .catch(function (err){
                  //console.log(err)
            })
        }
        else if(postingLike === -1){
            axios.put(process.env.REACT_APP_DB_HOST+`/user/userpostinglike/${email}/${post_id}`, {
                    email:email,
                    post_id:post_id,
                    jobcode:jobcode,
                    like:1,
                    mbti:localStorage.getItem("mbti"),
                },
                { headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                        Authorization: `Token ${token}`
                    }})
              .then(function (response) {
                  setPostingLike(1);
              })
              .catch(function (error) {
                // handle error
                //console.log(error);
              })
        }
    }
    const dislikeClick=()=>{
        if(postingLike === -1) {
            axios.delete(process.env.REACT_APP_DB_HOST+`/user/userpostinglike/${email}/${post_id}`,
                { headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                        Authorization: `Token ${token}`
                    }})
              .then(function (response) {
                  setPostingLike(0);
              })
              .catch(function (error) {
                // handle error
                //console.log(error);
              })
        }
        else if(postingLike === 0){
            axios.post(process.env.REACT_APP_DB_HOST+"user/userpostinglike/", {
                email:localStorage.getItem("email"),
                post_id:post_id,
                jobcode:jobcode,
                like:-1,
                mbti:localStorage.getItem("mbti"),
                },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    Authorization: `Token ${token}`
                }
                }).then(response=>{
                    setPostingLike(-1);
                })
                .catch(function (err){
                  //console.log(err)
            })
        }
        else if(postingLike===1){
            axios.put(process.env.REACT_APP_DB_HOST+`/user/userpostinglike/${email}/${post_id}`, {
                    email:email,
                    post_id:post_id,
                    jobcode:jobcode,
                    like:-1,
                    mbti:localStorage.getItem("mbti"),
                },
                { headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                        Authorization: `Token ${token}`
                    }})
              .then(function (response) {
                  setPostingLike(-1);
              })
              .catch(function (error) {
                // handle error
                //console.log(error);
              })
        }
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className="JobPostingModalDiv" >

        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (
                <section>
                    <header>
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <button className="likeButton" onClick={likeClick}> 좋아요
                            {postingLike === 1 ? <LikeFilled  style={{ color: 'red', fontSize: '20px'}} className="Like button red" />
                            :<LikeOutlined style={{ color: 'red', fontSize: '20px'}} className="Like button" /> }
                        </button>

                        <button className="likeButton" onClick={dislikeClick}>
                            {postingLike === -1 ? <DislikeFilled  style={{ fontSize: '20px'}} className="Dislike button red" />
                            :<DislikeOutlined style={{ fontSize: '20px'}} className="Dislike button" /> } 싫어요
                        </button>

                        <button className="close" onClick={close}> close </button>
                    </footer>
                </section>
            ) : null }
        </div>
        </div>
    )
}



export default JobPostingModal;
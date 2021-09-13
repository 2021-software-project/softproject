import React, {useState} from 'react';
import styled from 'styled-components';
import {Tooltip} from "antd";
import {LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled} from '@ant-design/icons';
import "../css/Mbti_result.css"


const JobPostingModal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close,setPostingLike, postingLike } = props;

    const likeClick=()=>{
        if(postingLike === 1) {setPostingLike(0);}
        else {setPostingLike(1);}
    }
    const dislikeClick=()=>{
        if(postingLike === -1) {setPostingLike(0);}
        else {setPostingLike(-1);}
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
import React from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+KR&family=Poppins:400,500,600,700,800,900&display=swap');
    .modal {
   
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    //height:100%;
    //background-color: rgba(0, 0, 0, 0.6);
    }
    
   .modal h5{
        font-family: 'Poppins', 'IBM Plex Sans KR', serif;
        font-size:17px;
   }
   
    .modal button {
        outline: none;
        cursor: pointer;
        border: 0;
    }
    .modal > section {
        width: 90%;
        height: 90%;
        max-width: 450px;
        margin:0 auto;
        border-radius: .3rem;
        //border: 1px solid rgba(0, 0, 0, 0.6);  /*모달 팝업창 테두리*/
        box-shadow: 0px 0px 20px #000;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show .3s;
        overflow: auto;
    }
    .modal > section > header {
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #f1f1f1;
        font-weight: 700;
        font-size:19px;
        //text-align:left;
    }
    .modal > section > header button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
    }
    .modal > section > main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
        text-align:left;
        font-size:14px;
    }
    .modal > section > footer {
        padding: 12px 16px;
        text-align: right;
    }
    .modal > section > footer button {
        padding: 6px 12px;
        color: #fff;
        background-color: #6c757d;
        border-radius: 5px;
        font-size: 13px;
        font-family: 'Poppins', 'IBM Plex Sans KR', serif;
    }
    .modal.openModal {
        display: flex;
        align-items: center;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show .3s;
    }
    
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <ModalDiv>

        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <button className="close" onClick={close}> close </button>
                    </footer>
                </section>
            ) : null }
        </div>
        </ModalDiv>
    )
}



export default Modal;
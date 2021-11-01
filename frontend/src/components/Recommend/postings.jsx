import React, {useEffect,useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from "axios";
import {useSelector} from "react-redux";
import JobPostingModal from '../../js/JobPostingModal'
import PostingListLike from "../../js/PostingListLike";
import "../../css/postings.css";



function Postings(props){

    const jobCode = props.code
    const {ch_areasi} = useSelector(state => state.area_modules);
    const {ch_areagu} = useSelector(state => state.area_modules);

    const[postings, setPostings] = useState([])

    //hj-email,token
    const [email, setEmail] = useState('')
    const token = localStorage.getItem('token')
    useEffect(() => {   //추가
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
                console.log("email : " + email)
            });
        }
    }, [])
    //hj - Modal
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ showingurl, setshowingurl] = useState("");

    const [start_time, setStartTime] = useState(0);
    let stay_time;

    const [ postid, setpostid ] = useState('');
    const [ subCode, setsubCode] = useState('');

    const openModal = (e) => {
        setModalOpen(true);
        setStartTime(new Date());
        console.log("open: "+ start_time);
    }
    const closeModal = () => {
        stay_time = (new Date()-start_time)/1000;
        setModalOpen(false);
        setshowingurl("");

         const whatPostingClick = {
            email: email,
            post_id : postid,
            jobcode : subCode,
            stay_time: stay_time,
         }
        console.log(whatPostingClick);

         axios.post("/user/userpostingclick/", whatPostingClick,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
            })
            .catch(function (err){
              console.log(err)
        })
    }

    useEffect(()=>{
        //post 전송을 위해 form data 생성
        let data = new FormData();
        data.append("code",jobCode)
        data.append("si",ch_areasi)
        data.append("gu",ch_areagu)

        axios.post('/postings/', data)
        .then(function (res) {
            setPostings(res.data)
        })
        .catch(function (err) {
            console.log(err);
        });
    },[jobCode])


    return(
        <div className="postings">
            {postings[0]?
                postings.map((posting)=>(
                    <div className="card">
                        {/* <!-- 카드 헤더 -->*/}
                            {/* <!--  카드 바디 -->*/}

                            <div className="card-body">
                            {/*// <!--  카드 바디 헤더 -->*/}
                                <PostingListLike
                                        email={localStorage.getItem('email')}
                                        post_id={posting.pk}
                                        jobcode = {posting.fields.sub_code}
                                    />

                            <a onClick={ ()=> (openModal) (setshowingurl(posting.fields.url.replace("www", "m")), setpostid(posting.pk) ,(setsubCode(posting.fields.sub_code))) }>
                            <div className="card-body-header">
                                <span className="headerTitle"><h1>{posting.fields.company}</h1>


                                </span>
                                <p className = "card-body-nickname">
                                    {posting.fields.subtitle}
                                </p>
                            </div>
                            {/*// <!--  카드 바디 본문 -->*/}
                            {/*// <!--  카드 바디 푸터 -->*/}
                            <div className="card-body-footer">
                                <p>
                                <span>{posting.fields.city} {posting.fields.county}</span>
                                <span className="pay_data"> <span className="pay-type">{posting.fields.pay_type}</span>{posting.fields.pay} </span>
                                </p>
                            </div>
                            </a>
                            </div>

                    </div>
                ))
                :<p>최근 공고가 없습니다.</p>
            }
            <JobPostingModal open={ modalOpen } close={ closeModal } post_id={postid} jobcode={subCode}>
                <iframeCon>
                    <div className="iframe-container">
                        <iframe  src={showingurl}>대체내용</iframe>
                    </div>
                </iframeCon>
            </JobPostingModal>
        </div>
    )

}

export default Postings;
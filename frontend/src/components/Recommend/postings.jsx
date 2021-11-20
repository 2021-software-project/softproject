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
    const {select_area} = useSelector(state => state.area_modules);

    const[postings, setPostings] = useState([])

    //hj-email,token
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')
    useEffect(() => {   //추가

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


         axios.post(process.env.REACT_APP_DB_HOST+"/user/userpostingclick/", whatPostingClick,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
            })
            .catch(function (err){

              console.log(err)
                var errCode = err.response.status;
                if (errCode == 401) {
                    alert("다시 로그인 해주시기 바랍니다.")
                    localStorage.clear();
                    window.location = '/login'
                }else {
                    window.location = '/error'
                }
        })
    }

    useEffect(()=>{
        //post 전송을 위해 form data 생성


        let data = new FormData();
        data.append("code",jobCode)
        select_area.map((a)=>{
            data.append("selectArea",a)
        })

        axios.post(process.env.REACT_APP_DB_HOST+'/user/postings/', data)
        .then(function (res) {
            setPostings(res.data)
        })
        .catch(function (err) {

        });
    },[jobCode])


    return(
        <div className="postings">
            {postings[0]?
                postings.map((posting)=>(
                    <div className="card">

                            <div className="card-body">

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
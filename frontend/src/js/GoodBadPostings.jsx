import React, {useState, useEffect} from 'react';
import axios from "axios";
import PostingListLike from "./PostingListLike";
import JobPostingModal from "./JobPostingModal";

function GoodBadPostings(props){
    const {id, city, company, county, pay, pay_type, sub_code, subtitle, url} = props;
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ showingurl, setshowingurl] = useState("");
    const [start_time, setStartTime] = useState(0);
    let stay_time;
    const [ postid, setpostid ] = useState('');
    const [ subCode, setsubCode] = useState('');

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
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
        console.log(whatPostingClick);

         axios.post(process.env.REACT_APP_DB_HOST+"/user/userpostingclick/", whatPostingClick,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'token ' + token,
                }
            })
            .catch(function (err){
              //console.log(err)
        })
    }

    return(
    <div className="postings">
        <div className="card">
                <div className="card-body">
                    <PostingListLike
                            email={localStorage.getItem('email')}
                            post_id={id}
                            jobcode = {sub_code}
                        />
                <a onClick={ ()=> (openModal) (setshowingurl(url.replace("www", "m")), setpostid(id) ,(setsubCode(sub_code))) }>
                <div className="card-body-header">
                    <span className="headerTitle"><h1>{company}</h1></span>
                    <p className = "card-body-nickname">
                        {subtitle}
                    </p>
                </div>
                {/*// <!--  카드 바디 본문 -->*/}
                {/*// <!--  카드 바디 푸터 -->*/}
                <div className="card-body-footer">
                    <p>
                    <span>{city} {county}</span>
                    <span className="pay_data"> <span className="pay-type">{pay_type}</span>{pay} </span>
                    </p>
                </div>
                </a>
                </div>
        </div>
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
export default GoodBadPostings;
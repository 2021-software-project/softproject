import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/NavBar/Footer';
import LoginSignupform from './components/UserPage/Login_Signup_form'
import Home from "./components/HomePage/home";
import InfoSelect from "./components/HomePage/input_mbti";
import MbtiRecommend from "./components/HomePage/MbtiRecommend";
import Main from './components/Main';
import Mbtircm from "./components/Recommend/Mbti_rcm"; //추가
import Mbtiresult from "./components/Recommend/Mbti_result"; //추가
import Personal_rcm from "./components/Recommend/Personal_rcm";
import Personal_result from "./components/Recommend/Personal_result";

import home from './components/HomePage/home';
import MyPage from './components/MyPage/MyPage';
import GoodBad from './components/MyPage/GoodBad_list';
import UserName from './components/MyPage/UserName';
import MyInfo from './components/MyPage/MyInfo_edit';
import PasswordUpdate from './components/MyPage/PasswordUpdate';
import Rating from './components/MyPage/Rating_list';
import Albarating from './components/UserPage/Alba_rating';


function App(props) {
  return (
    <Router>
      <Suspense fallback={(<div>...</div>)}>
        <NavBar />
          <div className="App">
            <Switch>
              <Route exact path="/login" component={LoginSignupform}></Route>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/input_mbti" component={InfoSelect}></Route>
              <Route exact path="/mbti" component={MbtiRecommend}></Route>
              <Route exact path="/main" component={Main}></Route>
              <Route exact path="/mypage" component={MyPage}></Route>
              <Route exact path="/mbti_rcm" component={Mbtircm}></Route>
              <Route exact path="/mbti_result" component={Mbtiresult}></Route>
              <Route exact path="/personal_rcm" component={Personal_rcm}></Route>
              <Route exact path="/personal_result" component={Personal_result}></Route>
              <Route exact path="/GoodBad_list" component={GoodBad}></Route>
              <Route exact path="/MyInfo_edit" component={MyInfo}></Route>
              <Route exact path="/UserName" component={UserName}></Route>
              <Route exact path="/PasswordUpdate" component={PasswordUpdate}></Route>
              <Route exact path="/Alba_rating" component={Albarating}></Route>
              <Route exact path="/Rating_list" component={Rating}></Route>

            </Switch>
          </div>
        <Footer/>
      </Suspense>
    </Router>
    );
}

export default App;
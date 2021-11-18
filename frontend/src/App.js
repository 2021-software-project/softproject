import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/NavBar/Footer';
import LoginSignupform from './components/UserPage/Login_Signup_form';
import Home from "./components/HomePage/home";
import HomeMbti from "./components/HomePage/HomeMbti";
import MbtiRecommend from "./components/HomePage/MbtiRecommend";
import Main from './components/Main';
import Mbtircm from "./components/Recommend/Mbti_rcm"; //추가
import Mbtiresult from "./components/Recommend/Mbti_result"; //추가
import Personal_rcm from "./components/Recommend/Personal_rcm";
import Personal_result from "./components/Recommend/Personal_result";

import MyPage from './components/MyPage/MyPage';
import GoodBad from './components/MyPage/GoodBad_list';
import MyInfo from './components/MyPage/MyInfo_edit';
import Rating from './components/MyPage/Rating_list';
import Albarating from './components/UserPage/Alba_rating';
import FirstUserLike from "./components/UserPage/FirstUserLike";
import Information from "./components/information";
import PasswordReset from './components/UserPage/PasswordReset';
import Error from './components/Error';

function App(props) {
  return (
    <Router>
      <Suspense fallback={(<div>...</div>)}>
          <div className="App">
            <div className="wrap">

            <NavBar />
              <Switch>
                <div className="main">

                <Route exact path="/login" component={LoginSignupform}></Route>
                <Route exact path="/" component={Home}></Route>
                {/*<Route exact path="/home_mbti" component={HomeMbti}></Route>*/}
                {/*<Route exact path="/mbti" component={MbtiRecommend}></Route>*/}
                <PrivateRoute exact path="/firstulike" component={FirstUserLike}></PrivateRoute>
                <Route exact path="/main" component={Main}></Route>
                <PrivateRoute exact path="/mypage" component={MyPage}></PrivateRoute>
                <Route exact path="/mbti_rcm" component={Mbtircm}></Route>
                <Route exact path="/mbti_result" component={Mbtiresult}></Route>
                <PrivateRoute exact path="/personal_rcm" component={Personal_rcm}></PrivateRoute>
                <PrivateRoute exact path="/personal_result" component={Personal_result}></PrivateRoute>
                <PrivateRoute exact path="/GoodBad_list" component={GoodBad}></PrivateRoute>
                <PrivateRoute exact path="/MyInfo_edit" component={MyInfo}></PrivateRoute>

                <PrivateRoute exact path="/Alba_rating" component={Albarating}></PrivateRoute>
                <PrivateRoute exact path="/Rating_list" component={Rating}></PrivateRoute>
                <PrivateRoute exact path="/information" component={Information}></PrivateRoute>
                <Route exact path="/user/password-reset/:uid/:token" component={PasswordReset}></Route>
                <Route exact path="/error" component={Error}></Route>
                </div>
              </Switch>

            <Footer/>

            </div>
          </div>

      </Suspense>
    </Router>
    );
}

export default App;
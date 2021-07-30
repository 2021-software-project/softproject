import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/UserPage/LoginPage';
import SignupPage from './components/UserPage/SignupPage';
import Home from "./components/HomePage/home";
import InfoSelect from "./components/HomePage/input_mbti";
import MbtiRecommend from "./components/HomePage/MbtiRecommend";
import Main from './components/Main';
import Mbtircm from "./components/Recommend/Mbti_rcm"; //추가
import Mbtiresult from "./components/Recommend/Mbti_result"; //추가
import Personal_rcm from "./components/Recommend/Personal_rcm";
import Personal_result from "./components/Recommend/Personal_result";

import home from './components/HomePage/home';
import MyPage from './components/mypage';
import GoodBad from './components/MyPage/GoodBad_list';
import UserName from './components/MyPage/UserName';
import MyInfo from './components/MyPage/MyInfo_edit';
import PasswordUpdate from './components/MyPage/PasswordUpdate';
import Rating from './components/MyPage/Rating_list';
import Albarating from './components/UserPage/Alba_rating';
import Albaratingresult from './components/UserPage/Alba_rating_result';


function App(props) {
  return (
    <Router>
      <Suspense fallback={(<div>...</div>)}>
        <NavBar />
          <div className="App">
            <Switch>
              <Route exact path="/login" component={LoginPage}></Route>	// 추가
              <Route exact path="/signup" component={SignupPage}></Route>	// 추가
              <Route exact path="/" component={Home}></Route>	// 추가
              <Route exact path="/input_mbti" component={InfoSelect}></Route>	// 추가
              <Route exact path="/mbti" component={MbtiRecommend}></Route>	// 추가
              <PrivateRoute exact path="/main" component={Main}></PrivateRoute>	// 추가
              <PrivateRoute exact path="/mypage" component={MyPage}></PrivateRoute>
              <PrivateRoute exact path="/mbti_rcm" component={Mbtircm}></PrivateRoute>
              <PrivateRoute exact path="/mbti_result" component={Mbtiresult}></PrivateRoute>
              <PrivateRoute exact path="/personal_rcm" component={Personal_rcm}></PrivateRoute>
              <PrivateRoute exact path="/personal_result" component={Personal_result}></PrivateRoute>
              <PrivateRoute exact path="/GoodBad_list" component={GoodBad}></PrivateRoute>
              <PrivateRoute exact path="/MyInfo_edit" component={MyInfo}></PrivateRoute>
              <PrivateRoute exact path="/UserName" component={UserName}></PrivateRoute>
              <PrivateRoute exact path="/PasswordUpdate" component={PasswordUpdate}></PrivateRoute>
              <PrivateRoute exact path="/Alba_rating" component={Albarating}></PrivateRoute>
              <PrivateRoute exact path="/Alba_rating_result" component={Albaratingresult}></PrivateRoute>



            </Switch>
          </div>
      </Suspense>
    </Router>
    );
}

export default App;
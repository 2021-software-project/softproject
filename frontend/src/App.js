import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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

import './App.css'; // 바꿔봄
import NavBar from './components/NavBar/NavBar';//추가
import LoginPage from './components/UserPage/LoginPage';//추가
import SignupPage from './components/UserPage/SignupPage';//추가
import home from './components/HomePage/home';
import Mypage from './components/mypage';
import GoodBad from './components/MyPage/GoodBad_list';
import UserName from './components/MyPage/UserName';
import MyInfo from './components/MyPage/MyInfo_edit';
import PasswordUpdate from './components/MyPage/PasswordUpdate';
import Rating from './components/MyPage/Rating_list';
import Albarating from './components/UserPage/Alba_rating';

function App() {
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
              <Route exact path="/main" component={Main}></Route>	// 추가
              <Route exact path="/mypage" component={Main}></Route>
              <Route exact path="/mbti_rcm" component={Mbtircm}></Route>
              <Route exact path="/mbti_result" component={Mbtiresult}></Route>
              <Route exact path="/personal_rcm" component={Personal_rcm}></Route>
              <Route exact path="/personal_result" component={Personal_result}></Route>
              <Route exact path="/login/" component={LoginPage}></Route>   // 추가
              <Route exact path="/signup/" component={SignupPage}></Route> // 추가
              <Route exact path="/mypage/" component={Mypage}></Route> // 추가
              <Route exact path="/GoodBad_list/" component={GoodBad}></Route>
              <Route exact path="/MyInfo_edit/" component={MyInfo}></Route>
              <Route exact path="/UserName/" component={UserName}></Route>
              <Route exact path="/PasswordUpdate/" component={PasswordUpdate}></Route>
              <Route exact path="/Alba_rating/" component={Albarating}></Route>
              <Route exact path="/" component={home}></Route>  // 추가


            </Switch>
          </div>
      </Suspense>
    </Router>
    );
}

export default App;
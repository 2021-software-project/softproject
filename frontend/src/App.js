import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';	// 추가
import LoginPage from './components/UserPage/LoginPage';	// 추가
import SignupPage from './components/UserPage/SignupPage';	// 추가
import Home from "./components/HomePage/home";
import InfoSelect from "./components/HomePage/input_mbti";
import MbtiRecommend from "./components/HomePage/MbtiRecommend";
import Main from './components/Main';
import Mypage from "./components/mypage";
import Mbti_rcm from "./components/Mbti_rcm";
import Personal_rcm from "./components/Personal_rcm";

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
              <Route exact path="/mypage" component={Mypage}></Route>
              <Route exact path="/Mbti_rcm" component={Mbti_rcm}></Route>
              <Route exact path="/Personal_rcm" component={Personal_rcm}></Route>
            </Switch>
          </div>
      </Suspense>
    </Router>
    );
}

export default App;
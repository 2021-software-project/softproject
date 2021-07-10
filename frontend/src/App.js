import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';	// 추가
import LoginPage from './components/UserPage/LoginPage';	// 추가
import SignupPage from './components/UserPage/SignupPage';	// 추가
import Home from "./components/HomePage/home";
import InfoSelect from "./components/HomePage/InfoSelect";
import MbtiRecommend from "./components/HomePage/MbtiRecommend";
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Suspense fallback={(<div>...</div>)}>
        <NavBar />
          <div className="App">
            <Switch>
              <Route exact path="/login/" component={LoginPage}></Route>	// 추가
              <Route exact path="/signup/" component={SignupPage}></Route>	// 추가
              <Route exact path="/" component={Home}></Route>	// 추가
              <Route exact path="/info" component={InfoSelect}></Route>	// 추가
              <Route exact path="/mbti" component={MbtiRecommend}></Route>	// 추가
              <Route exact path="/main" component={Main}></Route>	// 추가
            </Switch>
          </div>
      </Suspense>
    </Router>
    );
}

export default App;
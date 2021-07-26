import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


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
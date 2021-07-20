import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css'; // 바꿔봄
import NavBar from './components/NavBar/NavBar';//추가
import LoginPage from './components/UserPage/LoginPage';//추가
import SignupPage from './components/UserPage/SignupPage';//추가
import home from './components/HomePage/home';
function App() {
  return (
    <Router>
      <Suspense fallback={(<div>...</div>)}>
        <NavBar />
          <div className="App">
            <Switch>
              <Route exact path="/login/" component={LoginPage}></Route>   // 추가
              <Route exact path="/signup/" component={SignupPage}></Route> // 추가
              <Route exact path="/" component={home}></Route>  // 추가
            </Switch>
          </div>
      </Suspense>
    </Router>
    );
}

export default App;
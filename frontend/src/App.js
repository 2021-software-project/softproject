import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';   // 추가
import LoginPage from './components/UserPage/LoginPage.jsx';   // 추가
import SignupPage from './components/UserPage/SignupPage.jsx';   // 추가
import Home from "./components/home.jsx";
function App() {
  return (
    <Router>
      <Suspense fallback={(<div>...</div>)}>
        <NavBar />
          <div className="App">
            <Switch>
              <Route exact path="/login/" component={LoginPage}></Route>   // 추가
              <Route exact path="/signup/" component={SignupPage}></Route>   // 추가
              <Route exact path="/" component={Home}></Route>   // 추가
            </Switch>
          </div>
      </Suspense>
    </Router>
    );
}
//import React, {Suspense} from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//
//import './App.css';
//import NavBar from './components/NavBar/NavBar';   // 추가
//import LoginPage from './components/UserPage/LoginPage';   // 추가
//import SignupPage from './components/UserPage/SignupPage';   // 추가
//import Home from "./components/home";
//
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//         <Switch>
//              <Route exact path="/login/" component={LoginPage}></Route>   // 추가
//              <Route exact path="/signup/" component={SignupPage}></Route>   // 추가
//              <Route exact path="/" component={Home}></Route>   // 추가
//         </Switch>
//
//      </header>
//    </div>
//  );
//}
//
export default App;

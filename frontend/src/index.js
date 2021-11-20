import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';  //리덕스를 위해 추가함
import { Provider } from 'react-redux';
import rootReducer from './store/modules/rootReducer';

const store = createStore(rootReducer);

//Provider로 store를 넣어서 App 을 감싸게 되면 우리가 렌더링하는 그 어떤 컴포넌트던지 리덕스 스토어에 접근가능
//여기에서 index.js로 ReactDOM에 의해 렌더링됨
ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    //<Routes />,
  document.getElementById('root')
);

reportWebVitals();
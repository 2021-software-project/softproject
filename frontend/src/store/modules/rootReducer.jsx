//리듀서가 여러개일 때 redux 의 내장함수인 combineReducers 를 사용하여 리듀서를 하나로 합치는 작업을 함
//여러개로 나뉘어진 리듀서들을 서브리듀서 라고, 하나로 합쳐진 리듀서를 루트리듀서 라고 부름
import { combineReducers } from 'redux';
import area_modules from './area_modules';


const rootReducer = combineReducers({
  area_modules,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
})
export default rootReducer


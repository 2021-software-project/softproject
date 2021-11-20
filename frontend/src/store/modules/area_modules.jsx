//액션타입 정의
const ChangeArea = 'area_modules/ChangeArea';
const ChangeMbti = 'area_modules/ChangeMbti';
const ChangeSelectArea = 'area_modules/ChangeSelectArea';

//액션 생성함수 정의 -> 액션 생성함수 정의 시 export 붙이기.
// 여기서 만든 함수들은 나중에 우리가 컴포넌트에 리덕스를 연동하고 불러와서 사용함.
export function changeArea(ch_areasi, ch_areagu){
  return {
    type: ChangeArea,
    ch_areasi,
    ch_areagu
  }
}
export function changeMbti(ch_mbti){
  return {
    type: ChangeMbti,
    ch_mbti
  }
}
export function changeSelectArea(select_area){
  return {
    type: ChangeSelectArea,
    select_area
  }
}


//초기상태 정의
const initialState = {
    ch_areasi : '',
    ch_areagu : '',
    select_area : [],
    ch_mbti : localStorage.getItem('mbti'),
};

//리듀서 작성
//리듀서 함수의 경우엔, 꼭 export default 를 해야함. 나중에 스토어를 만들 때, 이 함수를 필요로 함
export default function area_modules(state = initialState, action) {
  switch (action.type) {
    case ChangeArea:


      return {
          ...state,
          ch_areagu: action.ch_areagu,
          ch_areasi: action.ch_areasi,
      };
    case ChangeMbti:


      return{
          ...state,
          ch_mbti: action.ch_mbti,
      }
    case ChangeSelectArea:


      return{
          ...state,
          select_area: action.select_area,
      }

    default:
      return state;
  }
}
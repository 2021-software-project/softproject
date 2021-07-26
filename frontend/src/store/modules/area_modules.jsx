//액션타입 정의
const ChangeArea = 'area_modules/ChangeArea';
const ChangeMbti = 'area_modules/ChangeMbti';

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


//초기상태 정의
const initialState = {
    ch_areasi : '지역을 선택해주세요',
    ch_areagu : '',
    ch_mbti : 'MBTI를 선택해주세요'
};

//리듀서 작성
//리듀서 함수의 경우엔, 꼭 export default 를 해야함. 나중에 스토어를 만들 때, 이 함수를 필요로 함
export default function area_modules(state = initialState, action) {
  switch (action.type) {
    case ChangeArea:
        console.log("ChangeArea 리듀서 호출");
        console.log(state);
      return {
          ...state,
          ch_areagu: action.ch_areagu,
          ch_areasi: action.ch_areasi,
      };
    case ChangeMbti:
          console.log("ChangeMbti 리듀서 호출");
          console.log(state);
      return{
          ...state,
          ch_mbti: action.ch_mbti,
      }

    default:
      return state;
  }
}
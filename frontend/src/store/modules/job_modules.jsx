//액션타입 정의
const ChangeJob = 'job_modules/ChangeJob';
const ChangeScore = 'job_modules/ChangeScore';

//액션 생성함수 정의 -> 액션 생성함수 정의 시 export 붙이기.
// 여기서 만든 함수들은 나중에 우리가 컴포넌트에 리덕스를 연동하고 불러와서 사용함.
export function changeJob(ch_jobfamily, ch_job){
  return {
    type: ChangeJob,
    ch_jobfamily,
    ch_job
  }
}

export function changeScore(ch_score){
  return {
    type: ChangeScore,
    ch_score
  }
}

//초기상태 정의
const initialState = {
    ch_jobfamily : '직종을 선택해주세요',
    ch_job : '',
    ch_score : '점수를 매겨주세요',

};

//리듀서 작성
//리듀서 함수의 경우엔, 꼭 export default 를 해야함. 나중에 스토어를 만들 때, 이 함수를 필요로 함
export default function area_modules(state = initialState, action) {
  switch (action.type) {
    case ChangeJob:
        console.log("ChangeJob 리듀서 호출");
        console.log(state);
      return {
          ...state,
          ch_jobfamily: action.ch_jobfamily,
          ch_job: action.ch_job,
      };
    case ChangeScore:
          console.log("ChangeScore 리듀서 호출");
          console.log(state);
      return{
          ...state,
            ch_score: action.ch_score,
      }

    default:
      return state;
  }
}
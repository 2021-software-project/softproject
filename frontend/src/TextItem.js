import React from "react";

const TextItem = ({ text, id, handleClick }) => {
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => handleClick(id)}>삭제</button>
    </div>
  );
};

export default TextItem;

//각 텍스트 아이템들을 나타내는 컴포넌트
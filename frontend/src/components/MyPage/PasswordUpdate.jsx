import React, { useState } from "react";

function PasswordUpdate() {
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { value } }) => setPassword(value);

  return (
    <form>
        비밀번호 변경 > &nbsp;
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
        &nbsp;
      <button type="submit">변경하기</button>
    </form>
  );
}

export default PasswordUpdate

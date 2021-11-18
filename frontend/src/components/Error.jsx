import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { TiWarningOutline } from 'react-icons/ti';

import "../css/error.css"
function Error() {

  return (
      <div className="error">
          <div className ="wrapper">
              <TiWarningOutline size="30" /><p>죄송합니다. 잘못된 접근입니다.</p>
              <Link to={{pathname:"/main"}} className="link-tomain">
                  <button className="btn-tomain" type="button" >메인으로</button>
              </Link>
          </div>
      </div>
  );
}

export default Error;
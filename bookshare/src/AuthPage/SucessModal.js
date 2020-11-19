import React from "react";

export default function SucessModal(props) {
const {sucessModalState, onSucessclick} = props
  if (sucessModalState) {
    return (
      <div id="myModal" className="authModal">
        <div className="modal-content">
          <span className="close" onClick={onSucessclick}>&times;</span>
          <p>사용 가능한 이메일입니다.</p>
        </div>
      </div>
    )
  } else {
    return null
  }
 } 
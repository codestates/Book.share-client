import React from "react";

export default function FailureModal(props) {
const {failureModalState} = props
  if (failureModalState) {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>이미 사용중이니 다른걸로 입력하시기 바랍니다</p>
        </div>
      </div>
    )
  } else { 
    return null
  }
 }
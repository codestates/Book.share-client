import React from "react";

export default function SucessModal(props) {
const {sucessModalState} = props
  if (sucessModalState) {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>사용 가능합니다</p>
        </div>
      </div>
    )
  } else {
    return null
  }
 } 
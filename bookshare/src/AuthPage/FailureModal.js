import React from 'react';

export default function FailureModal(props) {
	const { failureModalState } = props;
	if (failureModalState) {
		return (
			<div id="myModal" className="authModal">
				<div className="modal-content">
					<span className="close">&times;</span>
					<p>사용중인 이메일 입니다.</p>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

import React from 'react';

export default function Text({ userData, modalOff }) {
	return (
		<div className="text" onClick={modalOff}>
			text
			{/* {userData.map((el) => {
				return <div key={el.id}>{el.email}</div>;
			})} */}
		</div>
	);
}

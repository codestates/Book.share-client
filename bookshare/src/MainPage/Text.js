import React from 'react';

export default function Text({ data, modalOff }) {
	return (
		<div className="text" onClick={modalOff}>
			{data.map((el) => {
				return <div key={el.id}>{el.email}</div>;
			})}
		</div>
	);
}

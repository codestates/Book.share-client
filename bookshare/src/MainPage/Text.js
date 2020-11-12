import React from 'react';

export default function Text({ data }) {
	return (
		<div className="text">
			{data.map((el) => {
				return <div key={el.id}>{el.email}</div>;
			})}
		</div>
	);
}

import React, { useState } from 'react';

export default function Text({ userData, modalOff }) {
	const [array, setArray] = useState(['block', 'none', 'none', 'none', 'none']);

	const plus = () => {
		setArray([...array.slice(1, 5), array[0]]);
		console.log(array);
	};
	const minus = () => {
		setArray([array[4], ...array.slice(0, 4)]);
		console.log(array);
	};
	console.log(userData);

	return (
		<div className="text" onClick={modalOff}>
			{userData.map((data, idx) => {
				console.log(idx);
				return (
					<div style={{ display: array[idx] }} key={data.id}>
						<div className="slideWrapper">
							<div className="storyChart_title">{data.title}</div>
							<div className="storyChart_body">{data.body.split(' ').slice(0, 20).join(' ')}...</div>
							<div className="storyChart_username"></div>
						</div>
					</div>
				);
			})}
			<div className="slideLeft" onClick={minus}>
				{`>`}
			</div>
			<div className="slideRight" onClick={plus}>
				{`<`}
			</div>
		</div>
	);
}

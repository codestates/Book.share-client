import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Text({ userData, modalOff }) {
	const [array, setArray] = useState(['block', 'none', 'none', 'none', 'none']);

	const plus = () => {
		setArray([...array.slice(1, 5), array[0]]);
	};
	const minus = () => {
		setArray([array[4], ...array.slice(0, 4)]);
	};

	return (
		<div className="text" onClick={modalOff}>
			{userData.slice(0, 5).map((data, idx) => {
				return (
					<div style={{ display: array[idx] }} key={data.id}>
						<div className="slideWrapper">
							<Link to={`/main/${data.id}`} key={data.id}>
								<div className="storyChart_title">{data.title}</div>
								<div className="storyChart_body">{data.article}...</div>
								<div className="storyChart_username"></div>
							</Link>
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

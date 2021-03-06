import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Text({ userData, modalOff, titleChecker }) {
	const [array, setArray] = useState(['block', 'none', 'none', 'none', 'none']);

	const plus = () => {
		setArray([...array.slice(1, 5), array[0]]);
	};
	const minus = () => {
		setArray([array[4], ...array.slice(0, 4)]);
	};
	console.log(userData.slice(userData.length - 5, userData.length));
	return (
		<div className="text" onClick={modalOff}>
			{userData.slice(userData.length - 5, userData.length).map((data, idx) => {
				return (
					<div style={{ display: array[idx] }} key={data.id}>
						<div className="slideWrapper">
							<Link to={`/main/${data.id}`} key={data.id}>
								<div
									className="storyChart_title"
									onClick={(e) => {
										console.log('e: ', e);
										titleChecker(e.target.textContent);
									}}
								>
									{data.title}
								</div>
								<iframe className="storyChart_body" frameBorder="0" scrolling="no" width={500} srcDoc={data.article.split(' ').slice(0, 20).join(' ')}>
									...
								</iframe>
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

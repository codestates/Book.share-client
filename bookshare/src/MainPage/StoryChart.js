import React from 'react';
import { Link } from 'react-router-dom';
export default function StoryChart({ match, userData, modalOff }) {
	return (
		<div className="storyChartWrapper">
			<div className="storyChart">
				{userData.map((data) => {
					return (
						<Link to={`/main/${data.id}`} key={data.id}>
							<div className="chartList" onClick={modalOff} key={data.id}>
								{
									<>
										<div className="storyChart_title">{data.title}</div>
										<div className="storyChart_body">{data.body}</div>
										<div className="storyChart_username">body:{data.title}</div>
									</>
								}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

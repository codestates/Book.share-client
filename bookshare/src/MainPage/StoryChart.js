import React from 'react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
										<div className="storyChart_body">{data.body.split(' ').slice(0, 20).join(' ')}...</div>
										<div className="storyChart_username">
											<FontAwesomeIcon icon={faUser} size="1x" />
											{data.title}
										</div>
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

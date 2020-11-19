import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function StoryChart({ match, userData, modalOff, titleChecker }) {
	console.log(userData);

	return (
		userData && (
			<div className="storyChartWrapper">
				<div className="storyChart">
					{userData.map((data) => {
						return (
							<Link to={`/main/${data.id}`} key={data.id}>
								<div className="chartList" onClick={modalOff} key={data.id}>
									{
										<>
											<div
												className="storyChart_title"
												onClick={(e) => {
													console.log('e: ', e);
													titleChecker(e.target.textContent);
												}}
											>
												{data.title}
											</div>
											<iframe className="storyChart_body" frameBorder="0" width={430} srcDoc={data.article.split(' ').slice(0, 20).join(' ')}>
												...
											</iframe>
											<div className="storyChart_username">
												<FontAwesomeIcon icon={faUser} size="1x" />
												{data.user && Object.values(data.user)[0]}
											</div>
										</>
									}
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		)
	);
}

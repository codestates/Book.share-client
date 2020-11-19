import React from 'react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserPostLists.css'

export default function UserPostLists({ match, userPostList, modalOff, userTitleChecker }) {

	return (
		<div className="UserStoryChartWrapper">
			<div className="UserStoryChart">
				{userPostList.map((data) => {
					return (
						<Link to={`/main/${data.id}`} key={data.id}>
							<div className="UserChartList" onClick={modalOff} key={data.id}>
								{
									<>
										<div
											className="UserStoryChart_title"
											onClick={(e) => {
												console.log('e: ', e);
												userTitleChecker(e.target.textContent);
											}}
										>
											{data.title}
										</div>
										<iframe className="UserStoryChart_body" frameBorder="0" width={430} srcDoc={data.article.split(' ').slice(0, 20).join(' ')}>
											...
										</iframe>
										<div className="UserStoryChart_username">
											<FontAwesomeIcon icon={faUser} size="1x" />
											{data.uasrname}
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
import React from 'react';
import { Link } from 'react-router-dom';
export default function StoryChart({ match, userData }) {
	return (
		<>
			<div className="storyChart">
				{userData.map((data) => {
					return (
						<Link to={`/main/${data.id}`} key={data.id}>
							<div className="chartList" key={data.id}>
								{
									<>
										<div className="name">id:{data.name}</div>
										<div className="email">email:{data.email}</div>
										<div className="body">body:{data.body}</div>
									</>
								}
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';
export default function StoryChart({ match, data }) {
	return (
		<>
			<div className="storyChart">
				{data.map((data) => {
					return (
						<Link to={`/main/${data.name}`} key={data.id}>
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

import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './SocialLogin.css';
import axios from "axios";

function SocialLogin() {
	//   const [id, setId] = useState("");
	//   const [name, setName] = useState("");
	//   const [provider, setProvider] = useState("");

	const handleClick = (() => {
		axios.get("https://github.com/login/oauth/authorize?scope=user:email&client_id=252f9c77d6c055701950")
			.then((res) => {
				console.log(res);
		})
	})

	return (
		<section className="soci-box">
          <button className="soc-btn" onClick={handleClick} type="button" className="git-btn">
				<FontAwesomeIcon icon={faGithub} />
             Github Login
           </button>
    </section>
	);
}

export default withRouter(SocialLogin);

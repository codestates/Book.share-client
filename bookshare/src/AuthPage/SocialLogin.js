import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
//import {GoogleLogin} from "react-google-login";
// import axios from "axios";

function SocialLogin({ history }) {
	//   const [id, setId] = useState("");
	//   const [name, setName] = useState("");
	//   const [provider, setProvider] = useState("");

	//   //goole login
	//   const responseGoogle = (res) => {
	//     setId(res.googleId)
	//     setName(res.profileObj.name)
	//     setProvider("google")
	//     history.push("/")
	//   }

	//   const responseFail = (err) => {
	//     console.log(err)
	//   }

	return (
		<>
			<div>
				{/* <Link to="https://github.com/login/oauth/authorize?client_id=beacbf44735ab93f03c0&redirect_uri=http://1838bee4edee.ngrok.io/callback">
          <button type="button" className="git-btn">
          <FontAwesomeIcon icon={faCamera} />
            Github Login
          </button>
        </Link>
      </div>
      <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_Google}
        buttonText="Google Sign in"
        onSuccess={responseGoogle}
        onFailure={responseFail}
        // isSignedIn={true}    
        cookiePolicy={'single_host_origin'}
        >
      </GoogleLogin> */}
			</div>
		</>
	);
}

export default withRouter(SocialLogin);

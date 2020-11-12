import React, { useState } from "react";
import { withRouter } from "react-router-dom";
// import {GoogleLogin} from "react-google-login";
// import axios from "axios";


function SocialLogin() {
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [provider, setProvider] = useState("");

  // //goole login
  // const responseGoogle = (res) => {
  //   setId(res.googleId)
  //   setName(res.profileObj.name)
  //   setProvider("google")
  //   history.push("/")
  // }

  // const responseFail = (err) => {
  //   console.log(err)
  // }

  return (
    <>
      <GithubLogin>
        <Link to="https://github.com/login/oauth/authorize?client_id=beacbf44735ab93f03c0&redirect_uri=http://1838bee4edee.ngrok.io/callback">
          <button type="button">
          Github Login
          </button>
        </Link>
      </GithubLogin>
      {/* <GoogleLogin
      clientId={process.env.REACT_APP_Google}
      buttonText="Google"
      onSuccess={responseGoogle}
      onFailure={responseFail}
      isSignedIn={true}    
      // cookiePolicy={'single_host_origin'}
      /> */}
    </>
  )
}

export default withRouter(SocialLogin);
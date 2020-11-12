import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
        
axios.defaults.withCredentials = true;
        
function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("비밀번호 필수입니다");
  // const onIdChange = (e) => {
  //   setEmail(Object.assign({}, input, { email: e.target.value }))
  // } 
  
  // const onPwChange = (e) => {
  //   setlPassword(Object.assign({}, input, { password: e.target.value }))
  // } 
 
  const emailValidation = (e) => {
    setEmail(e.target.value)
    if(!email.includes("@")) {
      setEmailError("올바른 이메일을 입력하세요")
    } else if(email === "") {
      setEmailError("")
    }
  }

  const passwordValidation = (e) => {
    setPassword(e.target.value)
    if(password !== '') {
      setPasswordError("")
    } 
  }
  const onSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8080/user/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          history.push(`/${res.session}`)
        })
        .catch((res) => {
          if (res.status === 404) {
            setEmailError("올바른 이메일을 입력하세요")
          }
        });
    setEmail("")
    setPassword("")
  }
  return (
    <>
      <form onSubmit={onSubmit}>
      <div>
        <p>ID:</p>
        <input
          type="email"
          placeholder="이메일을 입력 해주세요"
            onChange={emailValidation}
            value={email}
          ></input>
          <div>{emailError !== "" ? emailError : ""}</div>
        </div>
      <div>
        <p>PW:</p>
        <input
          type="password"
          placeholder="비밀번호를 입력 해주세요"
            onChange={passwordValidation}
            value={password}
          ></input>
          <div>{passwordError }</div>
      </div>
      <button type="submit">
        로그인
      </button>
    </form>
  </>
  );

}
// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//     this.handleInputValue = this.handleInputValue.bind(this);
//   }
//   handleInputValue = (key) => (e) => {
//     this.setState({ [key]: e.target.value });
//   };

//   // isEmail = (email) => {
//   //   const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  
//   //   return emailRegex.test(email);
//   // };

//   onTextValidation = () => {
//     let emailError = "";

//     if (!this.isEmail(this.state.email)) {
//       emailError = "올바른 양식으로 입력 바랍니다";
//     }
//     if (emailError) {
//       this.setState({ emailError });
//       return false;
//     }
//     return true;
//   };

//   onSubmit=(e) => {
//     e.preventDefault();
//     const valid = this.onTextValidation();
//     if (!valid) {
//       console.log("fuck", this.state);
//     } else {
//       return axios
//         .post("http://localhost:8080/user/login", {
//           email: this.state.email,
//           password: this.state.password,
//         })
//         .then((res) => {
//           console.log(res)
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }

//   render() {
  // return (
  //     <>
  //       <form onSubmit={this, this.onSubmit}>
  //       <div>
  //         <p>ID:</p>
  //         <input
  //           type="email"
  //           placeholder="이메일을 입력 해주세요"
  //           onChange={this.handleInputValue("email")}
  //         ></input>
  //         </div>
  //       <div>
  //         <p>PW:</p>
  //         <input
  //           type="password"
  //           placeholder="비밀번호를 입력 해주세요"
  //           onChange={this.handleInputValue("password")}
  //         ></input>
  //       </div>
  //       <button type="submit">
  //         로그인
  //       </button>
  //     </form>
  //   </>
  //   );
//   }
// }
        
export default withRouter(Login);
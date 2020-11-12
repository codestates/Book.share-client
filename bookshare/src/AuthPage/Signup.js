import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
        
axios.defaults.withCredentials = true;
        
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("비밀번호 필수입니다");
  const [usernameError, setUsernameError] = useState("");
 
  const emailValidation = (e) => {
    setEmail(e.target.value)
    if(!email.includes("@")) {
      setEmailError("올바른 이메일을 입력해 주세요")
    } else if(email === "") {
      setEmailError("")
    }
  }

  const usernameValidation = (e) => {
    setUsername(e.target.value)
    if(!email.includes("@")) {
      setUsernameError("이름 형식에 맞게 입력하세요")
    } else if(email === "") {
      setUsernameError("")
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
        .post("http://localhost:8080/user/signup", {
          email: email,
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res)
          }
        })
        .catch((res) => {
          if (res.status === 404) {
            setEmailError("올바른 이메일을 입력하세요")
          }
        });
    setEmail("")
    setPassword("")
    setUsername("")
  }
  return (
    <>
      <form onSubmit={onSubmit}>
      <div>
        <p>username:</p>
        <input
          type="username"
          placeholder="이름을 입력해주세요"
            onChange={usernameValidation}
            value={username}
          ></input>
          <div>{usernameError}</div>
        </div>
      <div>
        <p>email:</p>
        <input
          type="email"
          placeholder="이메일을 입력 해주세요"
            onChange={emailValidation}
            value={email}
          ></input>
          <div>{emailError }</div>
        </div>
        <div>
        <p>password:</p>
        <input
          type="password"
          placeholder="비밀번호를 입력 해주세요"
            onChange={passwordValidation}
            value={password}
          ></input>
          <div>{passwordError }</div>
        </div>
      <button type="submit">
        회원가입
      </button>
    </form>
  </>
  );

}



// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       username: "",
//       password: "",
//       errorMessage: ""
//     };
//     this.handleInputValue = this.handleInputValue.bind(this);
//     this.handleSignup = this.handleSignup.bind(this);
//     console.log(this.state)
//   }

//   handleInputValue = (key) => (e) => {
//     this.setState({ [key]: e.target.value });
//     // console.log(key)
//   };

//   handleSignup = () => {
//     if (this.state.email !== "" && this.state.password  !== "" && this.state.username  !== "") {
//       console.log(this.state.email)
//       axios({
//         method: 'post',
//         url: 'http://localhost:4000/signup',
//         data: {
//           email: this.state.email,
//           password: this.state.password,
//           username: this.state.username,
//         },
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//       .then((res) => {
//         console.log(res);
//       })
//         .then(() => {
//           this.props.history.push("/login");
//         })
//         .catch(e => {
//           console.log(e.toString())
//         })
//     } else {
//       console.log("오류야 떠라")
//       this.setState({
//         errorMessage: "모든 항목은 필수입니다"
//       })
//       console.log(this.state.errorMessage)
//     }
//   }

//     render() {
//       return (
//         <div>
//           <center>
//             <h1>Sign Up</h1>
//             <form onSubmit={(e) => e.preventDefault()}>
//             <div>
//                 <span>이름</span>
//                 <input
//                   type="username"
//                   onChange={this.handleInputValue("email")}
//                 ></input>
//               </div>
//               <div>
//                 <span>이메일</span>
//                 <input
//                   type="email"
//                   onChange={this.handleInputValue("email")}
//                 ></input>
//               </div>
//               <div>
//                 <span>비밀번호</span>
//                 <input
//                   type="password"
//                   onChange={this.handleInputValue("password")}
//                 ></input>
//               </div>
//               <button
//                 className="btn btn-signup"
//                 type='submit'
//                 onClick={this.handleSignup}
//               >
//                 회원가입
//             </button>
//             {this.state.errorMessage === "" ? <></> :
//                   <div className="alert-box">{this.state.errorMessage}</div>}
//             </form>
//           </center>
//         </div>
//       ); 
//   }
// }

export default withRouter(Signup);
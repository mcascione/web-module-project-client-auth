import React from "react";

const Login = () => {
    return (
      <div className="loginWrapper">
        <h1>LOGIN</h1>
        <form className="loginForm">
          <div>
            <label htmlFor="username">USERNAME:</label>
            <input id="username" />
          </div>
          <div>
            <label htmlFor="password">PASSWORD:</label>
            <input type="password" id="password" />
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    );
  };

export default Login;
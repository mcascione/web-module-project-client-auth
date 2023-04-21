import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [cred, setCred] = useState({
        username:"",
        password:""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setCred({
            ...cred,
            [e.target.name]:value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/login", cred)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                navigate("/friends");
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
      <div className="loginWrapper">
        <h1>LOGIN</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">USERNAME:</label>
            <input id="username" name="username" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="password">PASSWORD:</label>
            <input type="password" id="password" name="password" onChange={handleChange}/>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    );
  };

export default Login;
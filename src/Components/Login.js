import React from "react";
import './App.css';

function Login () {
    return (
        <div className="loginWrapper">
            <nav>
                <h2>Friends Database</h2>
                <a>LOGIN.</a>
                <a>FRIENDLIST.</a>
                <a>ADDFRIEND.</a>
                <a>LOGOUT</a>
            </nav>
            <hr></hr>
            <h1>LOGIN</h1>
            <form className="loginForm">
                <label htmlFor="USERNAME"></label>
                <input type="input" name="USERNAME" id="username"/>
                <label htmlFor="PASSWORD"></label>
                <input type="input" name="PASSWORD" id="password"/>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}

export default Login;
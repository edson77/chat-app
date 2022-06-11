import React from 'react';
import {history} from '../../_helper/history'
import { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ dispatch, isLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "email") {
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }
    if(isLoggedIn){
        history.push('/');   
        return window.location.reload();
    }
    return (
       
        <>
            <div className="container">
                <div className="row align-items-center justify-content-center min-vh-100 gx-0">

                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="card card-shadow border-0">
                            <div className="card-body">
                                <div className="row g-6">
                                    <div className="col-12">
                                        <div className="text-center">
                                            <h3 className="fw-bold mb-2">Sign In</h3>
                                            <p>Login to your account</p>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input required type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => handleInputChange(e)} />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input required type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => handleInputChange(e)} />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="col-12">
                                            {/* <button onClick={() => handleSubmit()} className="btn btn-block btn-lg btn-primary w-100" type="submit">Sign In</button> */}
                                            <button className="btn btn-block btn-lg btn-primary w-100" type="submit">Sign In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="text-center mt-8">
                            <p>Don't have an account yet? <a href="./signup.html">Sign up</a></p>
                            <p><a href="./password-reset.html">Forgot Password?</a></p>
                        </div>
                    </div>
                </div> {/* / .row */}
            </div>
        </>
    )
}

function mapStateToProps(state) {
    
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
      isLoggedIn,
      message
    };
  }

export default connect(mapStateToProps)(Login);
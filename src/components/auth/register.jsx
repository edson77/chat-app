import React from 'react';
import { useState } from "react";
import { connect } from "react-redux";
import {history} from '../../_helper/history'
import { register } from "../../actions/auth";
const Register = ({ dispatch, isLoggedIn }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(lastName, firstName, email, password, confirmPassword))
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
                                            <h3 className="fw-bold mb-2">Sign Up</h3>
                                            <p>Follow the easy steps</p>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input required type="text" className="form-control" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => handleInputChange(e)} />
                                                <label htmlFor="firstName">First Name</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input required type="text" className="form-control" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => handleInputChange(e)} />
                                                <label htmlFor="lastName">Last Name</label>
                                            </div>
                                        </div>
                                        <br/>

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
                                            <div className="form-floating">
                                                <input required type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => handleInputChange(e)} />
                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                            </div>
                                        </div>
                                        <br/>

                                        <div className="col-12">
                                            <button className="btn btn-block btn-lg btn-primary w-100" type="submit">Create Account</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="text-center mt-8">
                            <p>Already have an account? <a href="./signin.html">Sign in</a></p>
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

export default connect(mapStateToProps)(Register);
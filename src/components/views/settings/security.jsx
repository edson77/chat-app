
import React, {useState} from 'react';
import { connect } from "react-redux";
import { changePassword } from "../../../actions/user";

const Security = ({dispatch, isLoggedIn}) => {
    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "oldPassword"){
            setOldPassword(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "passwordConfirmation"){
            setPasswordConfirmation(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changePassword(oldPassword,password,passwordConfirmation))
        console.log("ici")
        setOldPassword("");
        setPassword("");
        setPasswordConfirmation("");
    }
    return (
        <>
            <div className="mt-8">
                <div className="d-flex align-items-center my-4 px-6">
                    <small className="text-muted me-auto">Security</small>
                </div>

                <div className="card border-0">
                    <div className="card-body py-2">
                        {/* Accordion */}
                        <div className="accordion accordion-flush" id="accordion-security">
                            <div className="accordion-item">
                                <div className="accordion-header" id="accordion-security-1">
                                    <span className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-security-body-1" aria-expanded="false" aria-controls="accordion-security-body-1">
                                        <div>
                                            <h5>Password</h5>
                                            <p>Change your password</p>
                                        </div>
                                    </span>
                                </div>

                                <div id="accordion-security-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-security-1" data-parent="#accordion-security">
                                    <div className="accordion-body">
                                        <form onSubmit={handleSubmit} autocomplete="off">
                                            <div className="form-floating mb-6">
                                                <input type="password" className="form-control" id="oldPassword" placeholder="Current Password" autocomplete="" value={oldPassword} onChange={(e) => handleInputChange(e)}/>
                                                <label for="profile-current-password">Current Password</label>
                                            </div>

                                            <div className="form-floating mb-6">
                                                <input type="password" className="form-control" id="password" placeholder="New password" autocomplete="" value={password} onChange={(e) => handleInputChange(e)}/>
                                                <label for="password">New password</label>
                                            </div>

                                            <div className="form-floating mb-6">
                                                <input type="password" className="form-control" id="passwordConfirmation" placeholder="Verify Password" autocomplete="" value={passwordConfirmation} onChange={(e) => handleInputChange(e)}/>
                                                <label for="passwordConfirmation">Verify Password</label>
                                            </div>
                                            <button type="submit" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>

                            {/* Switch */}
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h5>Two-step verifications</h5>
                                            <p>Enable two-step verifications</p>
                                        </div>
                                        <div className="col-auto">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="accordion-security-check-1" />
                                                <label className="form-check-label" for="accordion-security-check-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(Security);
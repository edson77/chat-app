
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import UserService from '../../../servies/user.service';
import { updateInfos } from "../../../actions/user";
const Account = ({dispatch, isLoggedIn}) => {
    const [email, setEmail] = useState("")
    const [about, setAbout] = useState("")
    const [phone, setPhone] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    useEffect(() => {
        UserService.getAuthUser().then(
            (response) => {
                setFirstName(response.data.data[0]['name'].split(" ")[1])
                setLastName(response.data.data[0]['name'].split(" ")[0])
                setEmail(response.data.data[0]['email'])
                setPhone(response.data.data[0]['phone'])
                setAbout(response.data.data[0]['about'])
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            }
        );
    }, [])

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
        if(id === "phone"){
            setPhone(value);
        }
        if(id === "about"){
            setAbout(value);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateInfos(lastName, firstName,email, phone, about))
    }
    return (
        <>
            <div className="mt-8">
                <div className="d-flex align-items-center mb-4 px-6">
                    <small className="text-muted me-auto">Account</small>
                </div>

                <div className="card border-0">
                    <div className="card-body py-2">
                        {/* Accordion */}
                        <div className="accordion accordion-flush" id="accordion-profile">
                            <div className="accordion-item">
                                <div className="accordion-header" id="accordion-profile-1">
                                    <a href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-profile-body-1" aria-expanded="false" aria-controls="accordion-profile-body-1">
                                        <div>
                                            <h5>Profile settings</h5>
                                            <p>Change your profile settings</p>
                                        </div>
                                    </a>
                                </div>

                                <div id="accordion-profile-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-profile-1" data-parent="#accordion-profile">
                                    <form onSubmit={handleSubmit}>
                                        <div className="accordion-body">
                                            <div className="form-floating mb-6">
                                                <input id="firstName" value={firstName} type="text" className="form-control" placeholder="First Name"  onChange={(e) => handleInputChange(e)} />
                                                <label for="firstName">First Name</label>
                                            </div>

                                            <div className="form-floating mb-6">
                                                <input value={lastName} type="text" className="form-control" id="lastName" placeholder="Last Name"  onChange={(e) => handleInputChange(e)} />
                                                <label for="lastName">Last Name</label>
                                            </div>

                                            <div className="form-floating mb-6">
                                                <input value={email} type="email" className="form-control" id="email" placeholder="Email address"  onChange={(e) => handleInputChange(e)} />
                                                <label for="email">Email</label>
                                            </div>

                                            <div className="form-floating mb-6">
                                                <input value={phone} type="text" className="form-control" id="phone" placeholder="Phone"  onChange={(e) => handleInputChange(e)} />
                                                <label for="phone">Phone</label>
                                            </div>

                                            <div className="form-floating mb-6">
                                                <textarea className="form-control" placeholder="about" id="about" data-autosize="true" style={{ minHeight: 120, overflow: 'hidden', overflowWrap: 'break-word', resize: 'none' }}  onChange={(e) => handleInputChange(e)} defaultValue={about}></textarea>
                                                <label for="about">About You</label>
                                            </div>

                                            <button type="submit" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* <div className="accordion-item">
                                <div className="accordion-header" id="accordion-profile-2">
                                    <a href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-profile-body-2" aria-expanded="false" aria-controls="accordion-profile-body-2">
                                        <div>
                                            <h5>Connected accounts</h5>
                                            <p>Connect with your accounts</p>
                                        </div>
                                    </a>
                                </div>

                                <div id="accordion-profile-body-2" className="accordion-collapse collapse" aria-labelledby="accordion-profile-2" data-parent="#accordion-profile">
                                    <div className="accordion-body">
                                        <div className="form-floating mb-6">
                                            <input type="text" className="form-control" id="profile-twitter" placeholder="Twitter" />
                                            <label for="profile-twitter">Twitter</label>
                                        </div>

                                        <div className="form-floating mb-6">
                                            <input type="text" className="form-control" id="profile-facebook" placeholder="Facebook" />
                                            <label for="profile-facebook">Facebook</label>
                                        </div>

                                        <div className="form-floating mb-6">
                                            <input type="text" className="form-control" id="profile-instagram" placeholder="Instagram" />
                                            <label for="profile-instagram">Instagram</label>
                                        </div>

                                        <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                    </div>
                                </div>
                            </div> */}
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

export default connect(mapStateToProps)(Account);
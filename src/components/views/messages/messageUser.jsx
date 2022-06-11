
import React from 'react';
import { Link } from 'react-router-dom';
const MessageUser = () => {
    return (
        <>
            <Link to="/chat/private-user/1" className="card border-0 text-reset">
                <div className="card-body">
                    <div className="row gx-5">
                        <div className="col-auto">
                            <div className="avatar avatar-online">
                                <img src="assets/img/avatars/7.jpg" alt="#" className="avatar-img" />
                            </div>
                        </div>

                        <div className="col">
                            <div className="d-flex align-items-center mb-3">
                                <h5 className="me-auto mb-0">William Wright</h5>
                                <span className="text-muted extra-small ms-2">12:45 PM</span>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="line-clamp me-auto">
                                    Hello! Yeah, I'm going to meet my friend of mine at the departments stores now.
                                </div>

                                <div className="badge badge-circle bg-primary ms-5">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* .card-body */}
            </Link>
        </>
    )
}

export default MessageUser;
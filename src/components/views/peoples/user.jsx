
import React from 'react';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    return (
        <>
            <div className="card border-0">
                <div className="card-body">

                    <div className="row align-items-center gx-5">
                        <div className="col-auto">
                            <a href="#" className="avatar ">
                                <img className="avatar-img" src={user.image_url} alt={user.name} />
                            </a>
                        </div>

                        <div className="col">
                            <h5><a href="#">{user.name}</a></h5>
                            <p>last seen 3 days ago</p>
                        </div>

                        <div className="col-auto">
                            {/* Dropdown */}
                            <div className="dropdown">
                                <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </a>

                                <ul className="dropdown-menu">
                                    <li><Link to={`/chat/private-user/${user.id}`} className="dropdown-item" href="#">New message</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-danger" href="#">Block user</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default User;
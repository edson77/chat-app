
import React, { useEffect, useState } from 'react';
import UserService from '../../servies/user.service';
import User from './peoples/user';
const Peoples = () => {
    const [data, setDate] = useState([])
    useEffect(() => {
        UserService.getUsers().then(
            (response) => {
                setDate(response.data.data)
                console.log(response.data.data)
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            }
        );

    }, [])
    return (
        <>
            <div className="tab-pane fade h-100 active show" id="tab-content-friends" role="tabpanel">
                <div className="d-flex flex-column h-100">
                    <div className="hide-scrollbar">
                        <div className="container py-8">

                            {/* Title */}
                            <div className="mb-8">
                                <h2 className="fw-bold m-0">Friends</h2>
                            </div>

                            {/* Search */}
                            {/* <div className="mb-6">
                                <form action="#">
                                    <div className="input-group">
                                        <div className="input-group-text">
                                            <div className="icon icon-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                            </div>
                                        </div>

                                        <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages or users" aria-label="Search for messages or users..." />
                                    </div>
                                </form> */}

                            {/* Invite button */}
                            {/* <div className="mt-5">
                                    <a href="#" className="btn btn-lg btn-primary w-100 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-invite">
                                        Find Friends

                                        <span className="icon ms-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                        </span>
                                    </a>
                                </div>
                            </div> */}

                            {/* List */}
                            <div className="card-list">
                                <div className="my-5">
                                    <small className="text-uppercase text-muted">B</small>
                                </div>

                                {/* Card */}

                                {data.map((user) => <User user={user} key={user.id} />)}
                                {/* Card */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Peoples;
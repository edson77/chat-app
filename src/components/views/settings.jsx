
import React from 'react';
import Search from './settings/search';
import Profile from './settings/profile';
import Account from './settings/account';
import Security from './settings/security';
// import Storage from './settings/storage';
// import Notifications from './settings/notifications';
// import Devices from './settings/devices';
const Settings = () => {
    return (
        <>
           <div className="tab-pane fade h-100 active show" id="tab-content-settings" role="tabpanel">
                        <div className="d-flex flex-column h-100">
                            <div className="hide-scrollbar">
                                <div className="container py-8">

                                    {/* Title */}
                                    <div className="mb-8">
                                        <h2 className="fw-bold m-0">Settings</h2>
                                    </div>

                                    {/* Search */}
                                    <Search/>

                                    {/* Profile */}
                                    <Profile/>
                                    {/* Profile */}

                                    {/* Account */}
                                    <Account/>
                                    {/* Account */}

                                    {/* Security */}
                                    <Security/>
                                    {/* Security */}

                                    {/* Storage */}
                                    {/* <Storage/> */}
                                    {/* Storage */}

                                    {/* Notifications */}
                                    {/* <Notifications/> */}
                                    {/* Notifications */}

                                    {/* Devices */}
                                    {/* <Devices/> */}
                                    {/* Devices */}

                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Settings;
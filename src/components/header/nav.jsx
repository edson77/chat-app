import React,{ useEffect, useState } from 'react';
import UserService from '../../servies/user.service';
import PainSvg from './svgFiles/painSvg'
import PeopleSvg from './svgFiles/peopleSvg'
import MessageSvg from './svgFiles/messageSvg'
import NotificationSvg from './svgFiles/notificationSvg'
import SupportSvg from './svgFiles/supportSvg'
import SettingsSvg from './svgFiles/settingsSvg'
import { Link } from 'react-router-dom';
import './style.css'

const Nav = () => {
    const [image, setImage] = useState("")
    useEffect(() => {
        UserService.getAuthUser().then(
            (response) => {
              setImage(response.data.data[0]['image_url'])
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
            <nav className="navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar">
                {/* Brand */}
                <Link to="/" title="Messenger" className="d-none d-xl-block mb-6">
                    <span className='titre'>DZ</span>
                </Link>

                {/* Nav items */}
                <ul className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3" role="tablist">
                    {/* Invisible item to center nav vertically */}
                    <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
                        <a className="nav-link py-0 py-lg-8" href="#" title="">
                            <div className="icon icon-xl">
                                svg2
                            </div>
                        </a>
                    </li>

                    {/* New chat */}
                    <li className="nav-item">
                        <Link className="nav-link py-0 py-lg-8" to="/create" title="Create chat">
                            <div className="icon icon-xl">
                                <PainSvg />
                            </div>
                        </Link>
                    </li>

                    {/* Friends */}
                    <li className="nav-item">
                        <Link className="nav-link py-0 py-lg-8" id="tab-friends" to="/peoples" title="Friends">
                            <div className="icon icon-xl">
                                <PeopleSvg />
                            </div>
                        </Link>
                    </li>

                    {/* Chats */}
                    <li className="nav-item">
                        <Link className="nav-link active py-0 py-lg-8"  to="/chat" title="Chats">
                            <div className="icon icon-xl icon-badged">
                                <MessageSvg />
                                <div className="badge badge-circle bg-primary">
                                    <span>4</span>
                                </div>
                            </div>
                        </Link>
                    </li>

                    {/* Notification */}
                    <li className="nav-item">
                        <a className="nav-link py-0 py-lg-8" id="tab-notifications" href="#tab-content-notifications" title="Notifications" data-bs-toggle="tab" role="tab">
                            <div className="icon icon-xl">
                                <NotificationSvg />
                            </div>
                        </a>
                    </li>

                    {/* Support */}
                    {/* <li className="nav-item d-none d-xl-block flex-xl-grow-1">
                        <a className="nav-link py-0 py-lg-8" id="tab-support" href="#tab-content-support" title="Support" data-bs-toggle="tab" role="tab">
                            <div className="icon icon-xl">
                                <SupportSvg />
                            </div>
                        </a>
                    </li> */}

                    {/* Settings */}
                    <li className="nav-item d-none d-xl-block">
                        <Link className="nav-link py-0 py-lg-8" id="tab-settings" to="/settings" title="Settings" >
                            <div className="icon icon-xl">
                                <SettingsSvg />
                            </div>
                        </Link>
                    </li>

                    {/* Profile */}
                    <li className="nav-item">
                        <a href="#" className="nav-link p-0 mt-lg-2" data-bs-toggle="modal" data-bs-target="#modal-profile">
                            <div className="avatar avatar-online mx-auto d-none d-xl-block">
                                <img className="avatar-img" src={ image } alt="" />
                            </div>
                            <div className="avatar avatar-online avatar-xs d-xl-none">
                                <img className="avatar-img avatar-img2" src= { image } alt="" />
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
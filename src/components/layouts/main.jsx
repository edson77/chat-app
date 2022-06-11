import React from 'react';
import { history } from '../../_helper/history'
import { connect } from "react-redux";
import Nav from '../header/nav';
import SideBar from './sidebar';
import ChatBox from './chatBox';

const Main = ({ isLoggedIn }) => {
    if (!isLoggedIn) {
        history.push('/login');
        return window.location.reload();
    }

    return (
        <>
            <div className="layout overflow-hidden">
                {/*  Navigation */}
                <Nav />
                {/* Navigation */}
                {/*  SideBar */}
                <SideBar />
                {/* SideBar */}
                {/*  Chat */}
                <ChatBox />
                {/*  Chat */}
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

export default connect(mapStateToProps)(Main);
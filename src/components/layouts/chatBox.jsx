import React from 'react'
import { Routes, Route } from 'react-router-dom';
import DirectChat from '../views/messages/direct-chat';
import Chat from '../views/chat';
const SideBar = () => {
    return (
        <>
            <Routes>
                <Route exact path='/chat/private-user/:id' element={<DirectChat />}></Route>
            </Routes>
        </>
    )
}

export default SideBar;
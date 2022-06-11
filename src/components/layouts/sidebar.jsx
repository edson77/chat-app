import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CreateChat from '../views/createChat'
import Chat from '../views/chat'
import Peoples from '../views/peoples'
import Settings from '../views/settings'
const SideBar = () => {
    return (
        <>
            <aside className="sidebar bg-light">
                <div className="tab-content h-100" role="tablist">
                <Routes>
                    {/* Create */}
                    {/* <Route path='/create' component={CreateChat} /> */}
                    <Route exact path='/create' element={< CreateChat />}></Route>
                    {/* Friends */}
                    <Route exact path='/peoples' element={<Peoples />}></Route>
                    {/* Chats */}
                    <Route exact path='/' element={<Chat />}></Route>
                    <Route exact path='/chat' element={<Chat />}></Route>
                    <Route exact path='/chat/private-user/:id' element={<Chat />}></Route>

                    {/* Notifications - Notices */}
                    

                    {/* Support */}
                    

                    {/* Settings */}
                    <Route exact path='/settings' element={<Settings />}></Route>
                </Routes>
                </div>
                    
            </aside>
        </>
    )
}

export default SideBar;
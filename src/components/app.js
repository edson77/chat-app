import React from 'react';
import { Routes,Route  } from 'react-router-dom';
import Main from './layouts/main';
import Login from './auth/login';
import Register from './auth/register';
import Flash from './Flash/index'
import Bus from './Utils/bus'

const App = () => {
    var href = window.location.href
    // console.log(typeof href.split("/").pop() );
    // console.log( href.split("/").pop() === 'login');
    let lien = href.split("/").pop()
    window.flash = (message, type="success") => Bus.emit('flash', ({message, type})) 
    return (
        <>
            <Flash/>
            { lien === 'login' || lien === 'register' ?
                <Routes>
                    <Route exact path='/login' element={<Login />}></Route>
                    <Route exact path='/register' element={<Register />}></Route>
                </Routes>
                :
                <Main />
            }    
        </>
    )
}

export default App;
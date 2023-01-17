import React from 'react';
import {Route, Routes} from 'react-router-dom';
// import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
// import Home from "./pages/home/Home";
// import {AuthContext} from "./contex/AuthContex";


import HomePage from "./components/renderPage/HomePage";
import LoginPage from "./components/renderPage/LoginPage";







function App(){

    return (
        <>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
                {/*<Route exact path='/'>*/}
                {/*    {user ? <Route element={<Home/>}/> : <Route element={<Register/>}/> }*/}

                {/*</Route>*/}
                {/*<Route path='/login'>*/}
                {/*    {user ? <Navigate to='/'/>:<Route  element={<Login/>}/>}*/}
                {/*    <Outlet/>*/}
                {/*</Route>*/}
                {/*/!*<Route path='/' element={<Home/>}/>*!/*/}
                {/*<Route path='/register'>*/}
                {/*    {user ? <Navigate to='/'/> : <Route element={<Register/>}/>}*/}
                {/*    <Outlet/>*/}
                {/*</Route>*/}
                <Route path='/profile/:username' element={<Profile/>}/>
                <Route path="*" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;

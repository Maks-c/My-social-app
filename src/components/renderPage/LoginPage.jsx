import {AuthContext} from "../../contex/AuthContex";
import {useContext} from "react";
import Login from "../../pages/login/Login";
import {Navigate} from "react-router";
import {Outlet} from "react-router-dom";
// import Home from "../../pages/home/Home";
// import Register from "../../pages/register/Register";

export default function LoginPage(){
    const {user} = useContext(AuthContext)
    return (
        <>
            {user ? <Navigate to='/'/> : <Login/>}
            <Outlet/>
        </>
    )
}
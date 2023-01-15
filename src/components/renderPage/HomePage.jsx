import {useContext} from "react";
import {AuthContext} from "../../contex/AuthContex";
import Home from "../../pages/home/Home";
import Register from "../../pages/register/Register";
import {Outlet} from "react-router-dom";


export default function HomePage(){
    const {user} = useContext(AuthContext)

    return(
        <>
            {user ? <Home to='/'/> : < Register to='/register'/>}
            <Outlet/>
        </>
    )
}
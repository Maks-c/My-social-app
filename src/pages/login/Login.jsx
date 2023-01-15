import './login.css'
import {useContext, useRef} from "react";
import {loginCall} from "../apiCalls";
import {AuthContext} from "../../contex/AuthContex";
import CircularProgress from '@mui/material/CircularProgress';




export default function Login(){
    const email = useRef()
    const password = useRef()
    const {isFetching, dispatch} = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault()
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">HornetSocial</h3>
                    <span className="loginDesc">
                    Connect with friends and the world around you on HornetSocial
                </span>
                </div>
                <div className="loginRight" onSubmit={handleClick}>
                    <form className="loginBox">
                        <input
                            placeholder='Email'
                            required
                            type='email'
                            className="loginInput"
                            ref={email}/>
                        <input
                            placeholder='Password'
                            required
                            minLength='6'
                            type='password'
                            className="loginInput"
                            ref={password}/>
                        <button className="loginButton">
                            {isFetching
                                ?  <CircularProgress color="success" size="20px" disabled={isFetching}/>
                                : "Log in"}
                        </button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className="loginRegisterButton">
                            {isFetching
                                ?  <CircularProgress color="success" size="20px"/>
                                : "Create a New account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
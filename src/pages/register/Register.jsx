import './register.css'
import {useRef} from "react";
import axios from "axios";

import {useNavigate} from "react-router";


export default function Register(){
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const navigate=useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value ){
            password.current.setCustomValidity("Password don't match")
        }else{
            const user={
                username:username.current.value,
                email:email.current.value,
                password:password.current.value
            }
            try{
                await axios.post('auth/register',user)
                navigate('/login')
            }catch (err){
                console.log(   err)
            }

        }
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
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder='Username'
                            required ref={username}
                            className="loginInput"/>
                        <input
                            placeholder='Email'
                            required ref={email}
                            type='email'
                            className="loginInput"/>
                        <input
                            placeholder='Password'
                            required ref={password}

                            className="loginInput"/>
                        <input
                            placeholder='Password Again'
                            required
                            ref={passwordAgain}

                            className="loginInput"/>
                        <button className="loginButton" type='submit'>Sign up</button>
                        <button className="loginRegisterButton">
                            Log into your account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
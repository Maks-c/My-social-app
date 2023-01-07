import './login.css'

export default function Login(){
return(
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">HornetSocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on HornetSocial
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className="loginInput"/>
                    <input placeholder='Password' className="loginInput"/>
                    <button className="loginButton">Log in</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">
                        Create a New account
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}
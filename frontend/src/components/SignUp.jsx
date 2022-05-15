import { AuthStyled } from "./styles/AuthPageStyled";
import { useState,useEffect } from "react";
import { register } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { LOGO_URL } from "./assets/images/imageUrl";
import { SIGN_UP_LOGO_URL } from "./assets/images/imageUrl";

const SignUp = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = window.location.search ? window.location.search.split('=')[1] : '/app/home'

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo,redirect])

    const handleSubmit = (e) => {   
        e.preventDefault()
        dispatch(register(firstName,lastName, email, password))
        
    }  



    return ( 
        <>
            <AuthStyled>
            <div className="sign-up-wrapper sign-up">
                     <div className="logo-heading">
                         <img alt="logo" 
                         src={LOGO_URL}
                         />
                         <span>spotlight</span>
                     </div>
                     
                     <div className="login-alert">
                        <p>Sign Up</p>

                     </div>

                     <div className="message-wrapper">
                         <span className="message">
                         Find jobs, events, and communities that celebrate 
                         your unique background and experiences.
                         </span>
                     </div>

                     <div className="login-alert">
                        <small style={{color:"#434743"}}>
                            Already a member? <a href="/app/login">Log In</a></small>

                     </div>
                        {
                            error && 
                            <div className="error-wrapper"> 
                                <span className="error">
                                    {error}
                                </span>
                            </div>
                        }
                  
                    <form required onSubmit={handleSubmit}>

                        <div className="input-fields">
                            <div className="first-last">
                                <div className="input-single">
                                    <p>First Name</p>
                                    <input
                                        type="name" 
                                        className="input-text input-flex" 
                                        placeholder="First Name" 
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className="input-single">
                                    <p>Last Name</p>
                                    <input 
                                        type="name" 
                                        className="input-text input-flex" 
                                        placeholder="Last Name" 
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                     
                        <p>Email</p>
                         <input 
                            type="email" 
                            className="input-text input-column" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <p>Password</p>
                        <input 
                            type="password" 
                            className="input-text input-column" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>

                     <div className="btn-wrapper">
                         {
                             !loading ?  
                             <button type="submit"
                                className="submit-btn input-column-btn">
                                Sign Up
                             </button>
                                :
                            <button type="submit" className="submit-btn input-column-btn">
                                <TailSpin height="30" width="30" ariaLabel="loading-indicator" />
                            </button>
                         }
                        
                     </div>

                     </form>

                    <div className="footer footer-signup">
                        <hr style={{width:"530px"}}></hr>
                        <p className="forgot-alert">By clicking on Sign Up, 
                            you're agreeing to Spotlight <a className="recover" href="">
                            Terms of Use
                        </a>
                            
                        </p>

                    </div>
                </div>

                <div className="image-wrapper">
                   <img
                    className="img-illustration"
                    src={SIGN_UP_LOGO_URL} />
                </div>


            </AuthStyled>
        
        </>
     );
}
 
export default SignUp;
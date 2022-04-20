import { AuthStyled } from "./styles/AuthPageStyled";

const SignUp = () => {

    const ImageUrl = "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/52/000000/external-rocket-gaming-smashingstocks-circular-smashing-stocks.png";

    return ( 
        <>
            <AuthStyled>
            <div className="sign-up-wrapper sign-up">
                     <div className="logo-heading">
                         <img alt="logo" src={ImageUrl} />
                         <span>good_shit</span>
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
                        <small style={{color:"#434743"}}>Already a member? <a href="/app/login">Log In</a></small>

                     </div>

                    {/*             
                      <div className="google-btn-wrapper">
                          <button className="google-btn google-signup">
                                <Icon icon="akar-icons:google-fill"  height="15" />
                            <span className="btn-title ">Continue with Google</span>
                          </button>
                      </div> */}
                    {/* 
                    <div className="spacer spacer-large">
                        <div className="line "></div>
                            <small>or</small>
                        <div className="line "></div>
                    </div> */}
                         

                     <div className="input-fields">
                         <div className="first-last">
                             <div className="input-single">
                                 <p>First Name</p>
                                <input type="text" className="input-text input-flex" placeholder="First Name" />
                             </div>
                             <div className="input-single">
                                 <p>Last Name</p>
                                <input type="text" className="input-text input-flex" placeholder="Last Name" />
                             </div>
                         </div>
                     
                         <p>Email</p>
                         <input type="email" className="input-text input-column" placeholder="Email" />
                         <p>Password</p>
                         <input type="password" className="input-text input-column" placeholder="Password" />
                     </div>

                     <div className="btn-wrapper">
                         <button className="submit-btn input-column-btn">
                             Sign Up
                         </button>
                     </div>

                    <div className="footer footer-signup">
                        <hr style={{width:"530px"}}></hr>
                        <p className="forgot-alert">By clicking on Sign Up, you're agreeing to Good Shit <a className="recover" href="">Terms of Use</a>
                        </p>

                    </div>
                </div>

                <div className="image-wrapper">
                   <img
                    className="img-illustration"
                    src="https://cdn.dribbble.com/users/2187949/screenshots/15207330/media/d3413becb583b51571d9c8ee5184ad49.jpg" />
                </div>


            </AuthStyled>
        
        </>
     );
}
 
export default SignUp;
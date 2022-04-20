import { AuthStyled } from "./styles/AuthPageStyled";

const SignUp = () => {

    const ImageUrl = "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/52/000000/external-rocket-gaming-smashingstocks-circular-smashing-stocks.png";

    return (  
        <AuthStyled>
                <div className="sign-up-wrapper">
                     <div className="logo-heading">
                         <img alt="logo" src={ImageUrl} />
                         <span>good_shit</span>
                     </div>

                     <div className="login-alert">
                        <p>Log in</p>
                        <small>Need a Good Shit account? <a href="/app/signup">Sign Up</a></small>

                     </div>

                      {/* <div className="google-btn-wrapper">
                          <button className="google-btn">
                                <Icon icon="akar-icons:google-fill"  height="15" />
                            <span className="btn-title">Continue with Google</span>
                          </button>
                      </div>

                    <div className="spacer">
                        <div className="line"></div>
                            <small>or</small>
                        <div className="line"></div>
                    </div> */}
                         

                     <div className="input-fields">
                         <p>Email</p>
                         <input type="email" className="input-text" placeholder="Email" />
                         <p>Password</p>
                         <input type="password" className="input-text" placeholder="Password" />
                     </div>

                     <div className="btn-wrapper">
                         <button className="submit-btn">
                             Log in
                         </button>
                     </div>

                    <div className="footer">
                        <hr></hr>
                        <p className="forgot-alert">Forgot Password? <a className="recover" href="">Recover Password</a>
                        </p>

                    </div>
                </div>

                <div className="image-wrapper">
                   <img
                    className="img-illustration"
                    src="https://cdn.dribbble.com/users/1626229/screenshots/5292676/talent_scouting_4x.jpg?compress=1&resize=1200x900&vertical=top" />
                </div>

        </AuthStyled>
    );
}
 
export default SignUp;
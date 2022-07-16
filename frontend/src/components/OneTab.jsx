import { OneTabStyled } from "./styles/OneTab.Styled";
import { Icon } from '@iconify/react';
import "./topsection.css";
import { SideInputStyled } from "./styles/SideInputStyled";
import { useSelector } from "react-redux";


const OneTab = () => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    return (  
        <>
        <a href="/">
          <OneTabStyled>
              <div className="icon">
                  <ion-icon name="home-outline"></ion-icon>
              </div>
            <span>Home</span>
            </OneTabStyled>
        </a>
        <a href="/app/jobs">
          <OneTabStyled>
            <div className="icon">
                  <ion-icon name="briefcase-outline"></ion-icon>
          </div>
            <span>Jobs</span>
          </OneTabStyled>
        </a>
     

        <a href="/app/candidates">
          <OneTabStyled>
            <div className="icon">
              <ion-icon name="people-outline"></ion-icon>
          </div>
            <span>Candidates</span>
          </OneTabStyled>
        </a>

        <a href="#">
            <OneTabStyled>
              <div className="icon">
                <Icon icon="cil:building" />
            </div>
              <span>Companies</span>
            </OneTabStyled>
        </a>


        <a >
          <OneTabStyled>
            <div className="icon">
            <img className="avatar" src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-4--v1.png"/>

          </div>
            <span>Marie Currie</span>
          </OneTabStyled>
        </a>
        <a href="#">
          <OneTabStyled>
              <div className="communities-tab">
                  <p>COMMUNITIES (4)</p>
                  <button className="join-btn"> + JOIN</button>
              </div>
          </OneTabStyled>
        </a>
        <a href="#">
        <OneTabStyled>
          <div className="icon">
              <h6>💡</h6>
        </div>
          <span>General Advice</span>
        </OneTabStyled>
        </a>

        <OneTabStyled>
          <div className="icon">
              <h6>🎤</h6>
        </div>
          <span>Opportunities Hub</span>
        </OneTabStyled>

        <a href="#">
          <OneTabStyled>
            <div className="icon">
                <h6>💻</h6>
          </div>
            <span>Software Engineering</span>
          </OneTabStyled>
        </a>

        <OneTabStyled>
          <div className="icon">
              <h6>🎓</h6>
        </div>
          <span>Entrepreneurship</span>
        </OneTabStyled>

        <OneTabStyled>
            <div className="communities-tab">
                <p>DIRECT MESSAGES</p>
            </div>
        </OneTabStyled>
        <SideInputStyled>

            <div className="input-box">
                    <Icon icon="akar-icons:search" height="18" inline={true} />
            <div>
              </div>
              <input type="text" className="search-comm" placeholder="Search communities" />
            </div>

        </SideInputStyled>

        <br></br>

        <OneTabStyled>
          <div className="icon">
            <ion-icon name="alert-circle-outline"></ion-icon>
        </div>
          <span>Report a problem</span>
        </OneTabStyled>


        <OneTabStyled>
          <div className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
          </div>
          <span>Logout</span>
        </OneTabStyled>

             <div className="spacer"></div>
        
            <div className="version-div">
                <small className="version">v1.0.0</small>        
            </div>

        </>
    );
}
 
export default OneTab;
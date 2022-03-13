import { OneTabStyled } from "./styles/OneTab.Styled";
import { Icon } from '@iconify/react';
import "./topsection.css";
import { SideInputStyled } from "./styles/SideInputStyled";


const OneTab = () => {
    return (  
        <>
        <a href="/app/home">
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
        <a href="/app/events">
          <OneTabStyled>
            <div className="icon">
              <ion-icon name="calendar-number-outline"></ion-icon>
          </div>
            <span>Events</span>
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

        <a href="/app/companies">
            <OneTabStyled>
              <div className="icon">
                <Icon icon="cil:building" />
            </div>
              <span>Companies</span>
            </OneTabStyled>
        </a>


        <a href="/app/profile">
          <OneTabStyled>
            <div className="icon">
            <img alt="avatar" className="avatar" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/34/000000/external-avatar-game-development-xnimrodx-lineal-color-xnimrodx-2.png"/>
          </div>
            <span>Abdul Wahab Abass</span>
          </OneTabStyled>
        </a>
        <a href="/app/communities">
          <OneTabStyled>
              <div className="communities-tab">
                  <p>COMMUNITIES (4)</p>
                  <button className="join-btn"> + JOIN</button>
              </div>
          </OneTabStyled>
        </a>

        <OneTabStyled>
          <div className="icon">
              <h6>💡</h6>
        </div>
          <span>General Advice</span>
        </OneTabStyled>


        <OneTabStyled>
          <div className="icon">
              <h6>🎤</h6>
        </div>
          <span>Opportunities Hub</span>
        </OneTabStyled>

        <OneTabStyled>
          <div className="icon">
              <h6>💻</h6>
        </div>
          <span>Software Engineering</span>
        </OneTabStyled>

        <OneTabStyled>
          <div className="icon">
              <h6>🎓</h6>
        </div>
          <span>Entrepreneurship</span>
        </OneTabStyled>
.
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
                <small className="version">v.1.0.0</small>        
            </div>

        </>
    );
}
 
export default OneTab;
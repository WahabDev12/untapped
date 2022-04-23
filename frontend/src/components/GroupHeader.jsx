import { DEFAULT_COVER_URL } from "./assets/images/imageUrl";
import { GroupHeaderStyled } from "./styles/GroupHeaderStyled";

const GroupHeader = () => {
    return (  
        <>
           <GroupHeaderStyled>
                <div className="group-info">
                        <div className="group-icon">
                              <h1 className="emoji">💻</h1>
                        </div>
                        <div className="group-name">Software Engineering</div>
                        <a className="members__privacy" href="">
                            492,937 members | <ion-icon name="earth-outline"></ion-icon> 
                        Public</a>
                        <div className="desc-invite">

                        <div className="group-description">
                            Share what you're learning,
                            your views on the technology industry or share any opportunities
                        </div>

                        <div>
                            <a href="#">
                                <button className="invite"> + Invite</button>
                            </a>
                        </div>

                        </div>
                </div>
                <div className="banner-invite">
                    <div>
                        <img alt="group cover" 
                        src={DEFAULT_COVER_URL}
                        className="banner"
                        />
                    </div>
                   
                </div>
           </GroupHeaderStyled>
        </>
    );
}
 
export default GroupHeader;
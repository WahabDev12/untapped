import { GroupHeaderStyled } from "./styles/GroupHeaderStyled";

const GroupHeader = () => {
    return (  
        <>
           <GroupHeaderStyled>
                <div className="group-info">
                        <div className="group-icon">
                            <img src="https://img.icons8.com/color/30/000000/laptop--v1.png"/>
                        </div>
                        <div className="group-name">Software Engineering</div>
                        <a className="members__privacy" href="">492,937 members | <ion-icon name="earth-outline"></ion-icon> Public</a>
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
                        src="https://s3-us-west-1.amazonaws.com/images.jumpstart.me/frontend/communities/banners/Web/general.png"
                        className="banner"
                        />
                    </div>
                   
                </div>
           </GroupHeaderStyled>
        </>
    );
}
 
export default GroupHeader;
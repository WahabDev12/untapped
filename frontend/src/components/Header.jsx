import { HeaderStyled } from "./styles/Header.Styled";
import "./container.css";
import { LOGO_URL } from './assets/images/imageUrl';

const Header = () => {
    return ( 
        <>
        <HeaderStyled>
        <img alt="logo" src={LOGO_URL} />    
        
            <h2>good_shit</h2>
             <span className="settings">
                <ion-icon name="settings-outline"></ion-icon>
             </span>
             <span className="notifications">
                <ion-icon name="notifications-outline"></ion-icon>
             </span>
                
             
        </HeaderStyled>
             <div className="line"></div>
        </>
     );
}
 
export default Header;
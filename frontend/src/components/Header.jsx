import { HeaderStyled } from "./styles/Header.Styled";
import "./container.css";

const Header = () => {
    return ( 
        <>
        <HeaderStyled>
        <img alt="logo" src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/45/000000/external-rocket-gaming-smashingstocks-circular-smashing-stocks.png"/>    
        
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
import { HeaderStyled } from "./styles/Header.Styled";
import "./container.css";

const Header = ({home,jobs,events,candidates,companies}) => {
    return ( 
        <>
        <HeaderStyled>
        <img alt="logo" src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/45/000000/external-rocket-gaming-smashingstocks-circular-smashing-stocks.png"/>    
        
            <h2>shit_app</h2>
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
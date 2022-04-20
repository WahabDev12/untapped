import Sidebar from "./Sidebar";
import { MainGridStyled } from "./styles/MainGrid.Styled";

const Profile = () => {
    return ( 
        <>
        <Sidebar />
        <MainGridStyled>
            <div className="Profile">
                
            <h3>This is the Profile tab</h3>    
            </div>

        </MainGridStyled>
        </>
     );
}
 
export default Profile;
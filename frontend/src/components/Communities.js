import Sidebar from "./Sidebar";
import { MainGridStyled } from "./styles/MainGrid.Styled";

const Communities = () => {
    return ( 
        <>
        <Sidebar />
        <MainGridStyled>
            <div className="communities">
                
            <h3>This is the communities tab</h3>    
            </div>

        </MainGridStyled>
        </>
     );
}
 
export default Communities;
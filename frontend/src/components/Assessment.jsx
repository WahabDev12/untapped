import Sidebar from "./Sidebar";
import { MainGridStyled } from "./styles/MainGrid.Styled";

const Assessment = () => {
    return ( 
        <>
        <Sidebar />
        <MainGridStyled>
            <div className="events">
                
            <h3>This is the assessment tab</h3>    
            </div>

        </MainGridStyled>
        </>
     );
}
 
export default Assessment;
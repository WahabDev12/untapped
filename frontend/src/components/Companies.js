import Sidebar from "./Sidebar";
import { MainGridStyled } from "./styles/MainGrid.Styled";

const Companies = () => {
    return ( 
        <>
        <Sidebar />
        <MainGridStyled>
            <div className="Companies">
                
            <h3>This is the companies tab</h3>    
            </div>

        </MainGridStyled>
        </>
     );
}
 
export default Companies;
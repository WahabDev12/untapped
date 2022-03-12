import Sidebar from "./Sidebar";
import { MainGridStyled } from "./styles/MainGrid.Styled";

const Events = () => {
    return ( 
        <>
        <Sidebar />
        <MainGridStyled>
            <div className="events">
                
            <h3>This is the events tab</h3>    
            </div>

        </MainGridStyled>
        </>
     );
}
 
export default Events;
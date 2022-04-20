import GridContainer from "./GridContainer";
import { MainGridStyled } from "./styles/MainGrid.Styled";
import TopSection from "./TopSection";
import "./container.css";
import Sidebar from './Sidebar';
import GroupHeader from "./GroupHeader";

const Group = () => {
    return ( 
        <>  
        <Sidebar />
        <MainGridStyled>
             <GroupHeader />
             <TopSection />
        </MainGridStyled>

        </>
     );
}
 
export default Group;
import { SidebarStyled } from './styles/Sidebar.Styled';
import Header from './Header';
import Tabs from './Tabs';

const Sidebar = () => {
    return (  
        <SidebarStyled>
             <Header />
              <Tabs />
        </SidebarStyled>
    );
}
 
export default Sidebar;
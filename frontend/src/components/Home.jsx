import GridContainer from "./GridContainer";
import { MainGridStyled } from "./styles/MainGrid.Styled";
import TopSection from "./TopSection";
import "./container.css";
import Sidebar from './Sidebar';
import ThreeCards from "./ThreeCards";
import { useSelector } from "react-redux";

const Home = () => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    return (  
        <>
         <Sidebar />
         <MainGridStyled>

             <h1 id="welcome-title">Welcome, Marie Currie!</h1>
             <div className="online-members">
                 <small>5,603 members</small>
                 <small><span className="online-status"></span>2,603 online</small>
             </div>

             <ThreeCards />

             <TopSection />
             
            <GridContainer />
         </MainGridStyled>
        </>
    );
}
 
export default Home;
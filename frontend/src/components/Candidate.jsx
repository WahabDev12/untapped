import Sidebar from "./Sidebar";
import { HideScroll } from "./styles/HideScroll";
import { SectionStyled } from "./styles/Section.Styled";
import { ContainerStyled } from "./styles/Container.Styled";

const Candidate = () => {
    return ( 
        <>
        
        <Sidebar />
        <HideScroll>
        <SectionStyled>
        
        <div className="jobs-sort">
            <div className="btn-sort-one">

            <button>Company</button>
            <button>School</button>

            </div>


        </div>
        </SectionStyled>
      
        <ContainerStyled>

        <p className="alert">CANDIDATES YOU MAY KNOW</p>
        {/* Input candidates profiles here */}      

        <div className="item-container">
            <div className="job">
                <div className="wrapper">
                    <img src="https://img.icons8.com/external-anggara-blue-anggara-putra/95/000000/external-avatar-interface-anggara-blue-anggara-putra.png"/>     
                </div>
                <p className="username">Abdul-Wahab Abass</p>  
                <p className="school" >University of Ghana</p>      
                <p className="major" >BA/BS - Management Information Systems</p>    
                <div className="follow-wrapper">

                    <button className="follow-btn">Follow</button>    
                    
                </div>   
                   
            </div>
        </div>

        </ContainerStyled>

        </HideScroll>
    </>
     );
}
 
export default Candidate;
import Sidebar from "./Sidebar";
import { HideScroll } from "./styles/HideScroll";
import { SectionStyled } from "./styles/Section.Styled";
import { ContainerStyled } from "./styles/Container.Styled";
import IndieCandidate from "./IndieCandidate";

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
        <IndieCandidate />
            
        


        </ContainerStyled>

        </HideScroll>
    </>
     );
}
 
export default Candidate;
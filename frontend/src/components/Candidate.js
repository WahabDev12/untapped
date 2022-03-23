import Sidebar from "./Sidebar";
import { HideScroll } from "./styles/HideScroll";
import { SectionStyled } from "./styles/Section.Styled";
import { ContainerStyled } from "./styles/Container.Styled";

const Candidate = () => {
    return ( 
        <>
        <Sidebar />
        
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

        {/* Input candidates profiles here */}

        <ContainerStyled>

        <p className="alert">CANDIDATES YOU MAY KNOW</p>




        </ContainerStyled>


        </HideScroll>
    </>
     );
}
 
export default Candidate;
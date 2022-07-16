import Sidebar from "./Sidebar";
import { HideScroll } from "./styles/HideScroll";
import { SectionStyled } from "./styles/Section.Styled";
import { ContainerStyled } from "./styles/Container.Styled";
import IndieCompany from "./IndieCompany";

const Companies = () => {
    return ( 
        <>
        
        <Sidebar />
        <HideScroll>
        <SectionStyled>
        
        <div className="jobs-sort">
            <div className="btn-sort-one">

            <button>Company</button>
            <button>Stage</button>
            <button>Sector</button>
            <button>Location</button>
            <button>Size</button>


            </div>


        </div>
        </SectionStyled>
      
        <ContainerStyled>

        <p className="alert">BROWSE SOME COMPANIES</p>
        {/* Input candidates profiles here */}
        <IndieCompany />
            
        


        </ContainerStyled>

        </HideScroll>
    </>
     );
}
 
export default Companies;
import Sidebar from "./Sidebar";
import { SectionStyled } from "./styles/Section.Styled";
import { HideScroll } from "./styles/HideScroll";
import InputField from "./InputField";
import { Icon } from '@iconify/react';  
import Container from "./Container";

const Jobs = () => {
    return ( 
        <>
        <Sidebar jobs={'active'} />
        <HideScroll>
        <SectionStyled>
        
        <div className="jobs-sort">
            <div className="btn-sort-one">

            <button>Experience</button>
            <button>Location</button>
            <button>Stage</button>
            <button>Industry</button>
            <button>Job-Type</button>
            <button>Company</button>

            </div>

            <button className="randomize">Randomize <Icon icon="el:random" height="15" inline={true} /></button>

        </div>
        </SectionStyled>
        <div className="search-jobs-tab">    
            <InputField />
        </div>
        <Container />
        </HideScroll>
        </>
     );
}
 
export default Jobs;
import { ThreeCardsStyled } from "./styles/ThreeCard.Styled";
import { COMPANIES_URL, JOBS_URL, NETWORK_URL } from "./assets/images/imageUrl";

const ThreeCards = () => {
    return ( 
        <ThreeCardsStyled>
             <div>
                 <img alt="jobs" src={JOBS_URL} />
                 <p>Jobs</p>
             </div>
             <div>
                  <img  alt="events" src={NETWORK_URL}/>
                  <p>Build Network</p>
             </div>
             <div>
                  <img alt="companies" className="jobs-sticker" src={COMPANIES_URL}/>
                  <p>Browse Companies</p>
             </div>
        </ThreeCardsStyled>
     );
}
 
export default ThreeCards;
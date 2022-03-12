import { ThreeCardsStyled } from "./styles/ThreeCard.Styled";


const ThreeCards = () => {
    return ( 
        <ThreeCardsStyled>
             <div>
                 <img alt="jobs" src="https://images.jumpstart.me/frontend/communities/Cover+Photo/Web/jobs-card.png" />
                 <p>Jobs</p>
             </div>
             <div>
                  <img  alt="events" src="https://images.jumpstart.me/frontend/communities/Cover+Photo/Web/companies-card.png" />
                  <p>Discover Events</p>
             </div>
             <div>
                  <img alt="companies" className="jobs-sticker" src="https://images.jumpstart.me/frontend/communities/Cover+Photo/Web/companies-card.png" />
                  <p>Browse Companies</p>
             </div>
        </ThreeCardsStyled>
     );
}
 
export default ThreeCards;
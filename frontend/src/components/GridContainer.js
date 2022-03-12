import "./container.css";
import { Icon } from '@iconify/react';
import Modal from "./Modal";

const GridContainer = () => {
    return ( 
        <>
        <section id="grid-container">
        <div className="grid-item one">
            <div className="make-post">
                <div>
                    <img alt="avatar" className="avatar" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/40/000000/external-avatar-game-development-xnimrodx-lineal-color-xnimrodx-2.png"/>
                </div>
                <div className="name-and-input">
                    <p>Abdul-Wahab Abass</p>    
                    <a href="#modal-one" className="btn btn-big">Ask questions or share with the community....</a>
                </div>
            </div>
            
        </div>
        <div className="grid-item two">Trending</div>
        <div className="grid-item three">
            <div className="post-box">
                    <div>
                        <img className="avatar" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/40/000000/external-avatar-encryption-xnimrodx-lineal-color-xnimrodx.png"/>
                    </div>
                    <div className="name-and-content">
                        <p>Ummuh-Kulsum Abass <small>in</small> 💡 General Advice</p>    
                        <a>University of Ghana . 2 days ago . 451 views</a>
                    </div>
                </div>
                <div className="title-and-caption">
                    <p className="title">Looking for Business Analyst Internship Summer 2022</p>   
                    <p className="caption">
                          I am a junior at University of Ghana majoring in Business Administration. I am looking for a Summer 2022 Intern in fields related to Business, Finance, Accounting and Marketing. Please let me know if you guys have any opportunities I could explore.    
                    </p> 
                <div className="reactions-tab">
                    <button><Icon icon="akar-icons:heart" width="14"  inline={true} /> 3 Likes </button> 
                    <button className="comment-btn"><Icon icon="fa6-regular:comment" width="14" inline={true} /> 1 Comment</button>
                    <button><Icon icon="akar-icons:bell" width="15" inline={true} /> Follow</button>   
                </div>
                </div>
        </div>
        <div className="grid-item four">New Communities</div>
      </section> 

     <Modal />

     </> 
    
      
    );
}
 
export default GridContainer;
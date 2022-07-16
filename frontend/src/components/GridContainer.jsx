import "./container.css";
import { Icon } from '@iconify/react';
import Modal from "./Modal";
import { MACHINE_LEARNING_COMM } from "./assets/images/imageUrl";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Post from "./Post";

const GridContainer = () => {



    return ( 
        <>
        <ToastContainer />
        <section id="grid-container">
        <div className="grid-item one">
            <div className="make-post">
                <div>
                <img alt="" className="avatar"
                 src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-4--v1.png"/>


                </div>
                <div className="name-and-input">
                    <p className="user-name">Marie Currie</p>    
                    <a 
                    href="#modal-one"
                    className="btn btn-big">
                        Ask questions or share with the community....
                    </a>
                </div>
            </div>
            
        </div>
        <div className="grid-item two">
                <p>New Communities</p>
                <a className="communities" href=""> 
        <div className="comm-container">
            <div className="comm-box">
                    <div>
                    <img src={ MACHINE_LEARNING_COMM } />
                    </div>
                    <div className="name-div">
                        <p className="comm-name">Machine Learning Gurus</p>    
                    </div>
            </div>
           
        </div>
            <a className="create-comm" href="/app/create-group">Create your own community</a>
        </a>
            
        </div>
        <div className="grid-item three">
                   
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

            <div style={{height:"50px"}}></div>
                
        </div>

        
        <div className="grid-item four">
        <p>Trending</p>
        <div className="line-two"></div>
        <a className="trends" href=""> 
        <div className="trend-container">
            <div className="trending-box">
                    <div>
                    <img className="trend-avatar" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/34/000000/external-avatar-fitness-and-gym-xnimrodx-lineal-color-xnimrodx-2.png"/>

                    </div>
                    <div className="trend-name-and-content">
                        <p>Luis Valdore <small>in</small> 💻 Software Engineering</p>    
                        <a>University of Brazil . 3 days ago . 1,351 views</a>
                    </div>
            </div>

            <div className="trend-title-and-caption">
                    <p className="trend-title"> Got An Offer from Google 🎉</p>   
                <div className="trend-reactions-tab">
                    <button><Icon icon="akar-icons:heart" width="17"  inline={true} /> 5</button> 
                    <button ><Icon icon="fa6-regular:comment" width="17" inline={true} /> 2</button>
                    <button><Icon icon="akar-icons:bell" width="17" inline={true} /> Follow</button>   
                </div>
                </div>
        </div>
        </a>


        <a className="trends" href=""> 
        <div className="trend-container">
            <div className="trending-box">
                    <div>
                    <img className="trend-avatar" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/34/000000/external-avatar-fitness-and-gym-xnimrodx-lineal-color-xnimrodx-2.png"/>

                    </div>
                    <div className="trend-name-and-content">
                        <p>Luis Valdore <small>in</small> 💻 Software Engineering</p>    
                        <a>University of Brazil . 3 days ago . 1,351 views</a>
                    </div>
            </div>

            <div className="trend-title-and-caption">
                    <p className="trend-title"> Got An Offer from Google 🎉</p>   
                <div className="trend-reactions-tab">
                    <button><Icon icon="akar-icons:heart" width="17"  inline={true} /> 5</button> 
                    <button ><Icon icon="fa6-regular:comment" width="17" inline={true} /> 2</button>
                    <button><Icon icon="akar-icons:bell" width="17" inline={true} /> Follow</button>   
                </div>
                </div>
        </div>
        </a>


        <a className="trends" href=""> 
        <div className="trend-container">
            <div className="trending-box">
                    <div>
                    <img className="trend-avatar" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/34/000000/external-avatar-fitness-and-gym-xnimrodx-lineal-color-xnimrodx-2.png"/>

                    </div>
                    <div className="trend-name-and-content">
                        <p>Luis Valdore <small>in</small> 💻 Software Engineering</p>    
                        <a>University of Brazil . 3 days ago . 1,351 views</a>
                    </div>
            </div>

            <div className="trend-title-and-caption">
                    <p className="trend-title"> Got An Offer from Google 🎉</p>   
                <div className="trend-reactions-tab">
                    <button><Icon icon="akar-icons:heart" width="17"  inline={true} /> 5</button> 
                    <button ><Icon icon="fa6-regular:comment" width="17" inline={true} /> 2</button>
                    <button><Icon icon="akar-icons:bell" width="17" inline={true} /> Follow</button>   
                </div>
            </div>
        </div>
        </a>

        <a className="trends" href=""> 
        <div className="trend-container">
            <div className="trending-box">
                    <div>
                    <img className="trend-avatar" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/34/000000/external-avatar-fitness-and-gym-xnimrodx-lineal-color-xnimrodx-2.png"/>

                    </div>
                    <div className="trend-name-and-content">
                        <p>Luis Valdore <small>in</small> 💻 Software Engineering</p>    
                        <a>University of Brazil . 3 days ago . 1,351 views</a>
                    </div>
            </div>

            <div className="trend-title-and-caption">
                    <p className="trend-title"> Got An Offer from Google 🎉</p>   
                <div className="trend-reactions-tab">
                    <button><Icon icon="akar-icons:heart" width="17"  inline={true} /> 5</button> 
                    <button ><Icon icon="fa6-regular:comment" width="17" inline={true} /> 2</button>
                    <button><Icon icon="akar-icons:bell" width="17" inline={true} /> Follow</button>   
                </div>
                </div>
        </div>
        </a>


        </div>
      </section> 

     <Modal />

     </> 
    
      
    );
}
 
export default GridContainer;
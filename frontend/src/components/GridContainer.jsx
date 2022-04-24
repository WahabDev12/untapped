import "./container.css";
import { Icon } from '@iconify/react';
import Modal from "./Modal";
import { MACHINE_LEARNING_COMM } from "./assets/images/imageUrl";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from 'react';
import { queryAllPosts } from '../actions/postAction';

const GridContainer = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const postList = useSelector((state) => state.postList)
    const { loading, error, posts } = postList

    useEffect(()=> {
        dispatch(queryAllPosts())
    },[])

    return ( 
        <>
        <section id="grid-container">
        <div className="grid-item one">
            <div className="make-post">
                <div>
                    <img 
                        alt="avatar" className="avatar"
                        src={userInfo.profilePicture}
                     />
                </div>
                <div className="name-and-input">
                    <p className="user-name">{ userInfo.firstName} {userInfo.lastName}</p>    
                    <a href="#modal-one" className="btn btn-big">
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

            <div className="post-wrapper">
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

                   
            <div className="post-wrapper">
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


                   
            <div className="post-wrapper">
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
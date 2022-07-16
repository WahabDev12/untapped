import { Icon } from '@iconify/react';
import { PostStyled } from "./styles/Post.Styled";
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-loading-skeleton/dist/skeleton.css'


const Post  = () => {

    return ( 
        <>
        <PostStyled>    
       
        <div>
        {
                <div className="post-wrapper">
                <div className="post-box">
                    <div>   
                    <img className="avatar" src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-4--v1.png"/>

                    </div>
                    <div className="name-and-content">
                        <p>
                            <a href="">
                            Marie Currie</a> <small>in</small> 
                            <a href="">
                            💡 AI and ML</a>
                        </p>    
                        <a>University of Ghana . 2 days ago . 451 views</a>
                    </div>
                </div>
           
                   <div  className="title-and-caption">
                            <p className="title">Welcome to Untapped Homepage</p>   
                            <p className="caption">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p> 
                    <div className="reactions-tab">
                         
                         {/* <Like id={post._id} likes={post.likes.length} /> */}
                         <button  className="react-btn" >
                            <Icon icon="akar-icons:heart" width="14" inline={true} />
                            <span>
                            20
                            </span>
                        </button> 
                        <button  className="react-btn-small" >
                            <Icon icon="akar-icons:heart" width="14" inline={true} />
                            <span>
                            20
                            </span>
                        </button> 

                        <button className="react-btn comment-btn">
                            <Icon icon="fa6-regular:comment" width="14" inline={true} /> 
                            <span>
                                10 comments
                            </span>
                        </button>
                        <button className="react-btn comment-btn-small">
                            <Icon icon="fa6-regular:comment" width="14" inline={true} /> 
                            <span>
                                10
                            </span>
                        </button>
                        <button className="react-btn">
                            <Icon icon="akar-icons:bell" width="15" inline={true} /> 
                            <span>
                                Follow
                            </span>
                        </button>   
                    </div>
                    </div>

                </div>

            
    

         }

       
         </div>
         </PostStyled>
         </>
     );
}
 
export default Post ;

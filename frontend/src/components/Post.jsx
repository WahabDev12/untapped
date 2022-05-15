import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { queryAllPosts } from "../actions/postAction";
import { Icon } from '@iconify/react';
import { PostStyled } from "./styles/Post.Styled";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LoadSkeleton from './LoadSkeleton';

const Post  = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const postList = useSelector((state) => state.postList)
    const { loading, error, posts } = postList

    console.log(posts)

    useEffect(()=> {
        dispatch(queryAllPosts())
    },[])

    return ( 
        <>
        <PostStyled>    

        {
            loading && 
            <LoadSkeleton />
        }
       
        <div>
        {
            !loading && posts.length > 0
                ? posts.map((post)=> {
                return <a href={`/app/post/details/${post._id}`}>
                <div key={post._id}  className="post-wrapper">
                <div className="post-box">
                    <div>   
                        <img className="avatar"
                            src={post.author_profile}
                        />
                    </div>
                    <div className="name-and-content">
                        <p>
                            <a href={`/app/profile/${post.author_id}`}>
                            {post.author_name || <Skeleton />}</a> <small>in</small> 
                            <a href={`/app/group/details/${post.group_Id}`}>
                            💡 {post.group || <Skeleton />}</a>
                        </p>    
                        <a>University of Ghana . 2 days ago . 451 views</a>
                    </div>
                </div>
           
                   <div key={post._id} className="title-and-caption">
                            <p className="title">{post.title}</p>   
                            <p className="caption">{post.description} </p> 
                    <div className="reactions-tab">
                        <button className="react-btn">
                            <Icon icon="akar-icons:heart" width="14" inline={true} />
                            <span>
                                {post.likes.length} Likes
                            </span>
                        </button> 
                        <button className="react-btn comment-btn">
                            <Icon icon="fa6-regular:comment" width="14" inline={true} /> 
                            <span>
                                {post.comments.length} Comments
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
                </a>

            
            }) :

            <div className="loading-div">
                <p>Ooops..No post yet 😥</p>
            </div>

         }

       
         </div>
         </PostStyled>
         </>
     );
}
 
export default Post ;

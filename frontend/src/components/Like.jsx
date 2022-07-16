import { useState } from "react";
import { Icon } from '@iconify/react';
// import { likePost, disLikePost } from "../actions/postAction";
import { useSelector } from "react-redux";
import axios from "axios";


const DEV_PORT = "http://127.0.0.1:5000"


const Like  = ({id, likes}) => {

    const [likeCount, setLikeCount] = useState(likes);
    const [postIsLiked, setPostIsLiked] = useState(false);
    
    const controlLikes = (likeStatus, updateLikeCount) => {
        if (likeCount !== updateLikeCount) {
          setLikeCount(updateLikeCount);
        }
        if (likeStatus !== postIsLiked) {
          setPostIsLiked(likeStatus);
        }
    };



 const likePost =  async (id, setState) => {
  
    let token = JSON.parse(localStorage.getItem("token"));


  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }

  console.log(config)


  try {
    const response = await axios.put(
      `${DEV_PORT}/api/post/like/${id}`,
       config
      )
      if(response.status === 200){

        setState(true, response.data.likes);
        console.log(response)

      }
    
  } catch (err) {
    console.log(err.response.data);
  }
};


 const disLikePost =  async (id, setState) => {
    let token = JSON.parse(localStorage.getItem("token"));
    
    const config = {
      headers: {
        Authorization: 'Bearer' + token,
      },
    }
  
    try {
      const response = await axios.put(
        `${DEV_PORT}/api/post/dislike/${id}`,
         config
        
        );
      if (response.status === 200) {
        setState(false, response.data.likes);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };



    const handleLikePost = () => {
        if (postIsLiked) {
          setLikeCount((prev) => prev - 1);
          setPostIsLiked(false);
          return disLikePost(id, controlLikes
    );
        }
        setLikeCount((prev) => prev + 1);
        setPostIsLiked(true);
        return likePost(id, controlLikes
    );
      };


    return ( 
        <button  className="react-btn" onClick={handleLikePost}>
        <Icon icon="akar-icons:heart" width="14" inline={true} />
        <span>
           20
        </span>
    </button> 
     );
}
 
export default Like ;
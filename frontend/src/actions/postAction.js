import axios from "axios";


import {
    USER_POST_REQUEST,
    USER_POST_SUCCESS,
    USER_POST_FAIL,
    POST_LIST_REQUEST,
    POST_LIST_SUCESSS,
    POST_LIST_FAIL
} from "../constants/postConstants";

import {
  USER_LIKE_SUCCESS,
  USER_LIKE_FAIL
} from "../constants/postConstants"

import { logout } from './userActions'


const DEV_PORT = "http://127.0.0.1:5000"

export const queryAllPosts = () => async (
  dispatch,getState
) => {
  try {
    dispatch({ type: POST_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `${DEV_PORT}/api/post/all`,
        config,
       
    )

    dispatch({
      type: POST_LIST_SUCESSS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}



export const createPost = (title, description, group,file) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_POST_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      console.log(config)

      let postInfo = {title, description, group}

      if(file){
        postInfo = {title, description, group, file}

      }
  
      const { data } = await axios.post(
        `${DEV_PORT}/api/post/create`, 
        postInfo,
        config
      )
  
      dispatch({
        type: USER_POST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
         console.log("Not authorized")
        //  dispatch(logout())

      }
      dispatch({
        type: USER_POST_FAIL,
        payload: message,
      })
    }
}






// export const disLikePost =  (id, setState) => async(dispatch, getState) => {
  
//   const {
//     userLogin: { userInfo },
//   } = getState()
  
//   const config = {
//     headers: {
//       Authorization: `Bearer ${userInfo.token}`,
//     },
//   }

//   try {
//     const response = await axios.put(
//       `${DEV_PORT}/api/post/dislike/${id}`,
//       );
//     if (response.status === 200) {
//       setState(false, response.data.likes);
//     }
//   } catch (err) {
//     console.log(err.response.data);
//   }
// };
  
  



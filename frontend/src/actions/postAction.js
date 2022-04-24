import axios from "axios";

import {
    USER_POST_REQUEST,
    USER_POST_SUCCESS,
    USER_POST_FAIL,
    POST_LIST_REQUEST,
    POST_LIST_SUCESSS,
    POST_LIST_FAIL
} from "../constants/postConstants";

import { logout } from './userActions'


const devPort = "http://127.0.0.1:5000"

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
      `${devPort}/api/post/all`,
        config
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

export const createPost = (title, description, group, image) => async (dispatch, getState) => {
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
  
      const { data } = await axios.post(`${devPort}/api/post/create`, 
          {title, description, group, image},
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

         // insert user logout function here !!
      }
      dispatch({
        type: USER_POST_FAIL,
        payload: message,
      })
    }
  }

  



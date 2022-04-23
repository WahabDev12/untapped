import axios from "axios";

import {
    USER_POST_REQUEST,
    USER_POST_SUCCESS,
    USER_POST_FAIL,
    POST_LIST_REQUEST,
    POST_LIST_SUCESSS,
    POST_LIST_FAIL
} from "../constants/postConstants";

const devPort = "http://127.0.0.1:5000"

export const listPosts = () => async (
    dispatch
  ) => {
    try {
      dispatch({ type: POST_LIST_REQUEST })
  
      const { data } = await axios.get(
        `${devPort}/api/post/all`
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
import {
    GROUP_INFO_REQUEST,
    GROUP_INFO_SUCCESS,
    GROUP_INFO_FAIL

} from "../constants/groupConstants";
import axios from "axios";


const devPort = "http://127.0.0.1:5000"

export const queryAllGroups = () => async (
    dispatch, getState
  ) => {
    try {
      dispatch({ type: GROUP_INFO_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.get(
        `${devPort}/api/group/all`,
        config
      )
  
      dispatch({
        type: GROUP_INFO_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: GROUP_INFO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
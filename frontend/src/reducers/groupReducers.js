import {
    GROUP_INFO_REQUEST,
    GROUP_INFO_SUCCESS,
    GROUP_INFO_FAIL
} from "../constants/groupConstants";


export const groupListReducer = (state = { groups: [] }, action) => {
    switch (action.type) {
      case GROUP_INFO_REQUEST:
        return { loading: true, groups: [] }
      case GROUP_INFO_SUCCESS:
        return {
          loading: false,
          groups: action.payload.groups
        }
      case GROUP_INFO_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}
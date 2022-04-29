import { ProfileActionTypes } from '../action-types'
import { ProfileAction } from '../actions'


const initialStateProfile = {
    profiles: [],
    profile: {},
    isLoading: true,
    isError: null
}

const fetchProfileReducer = (state = initialStateProfile, action: ProfileAction) => {
    switch (action.type) {
        case ProfileActionTypes.FETCH_PROFILE_PENDING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case ProfileActionTypes.FETCH_PROFILE_REJECTED:
            return {
                ...state,
                isError: action.payload.response.data.message
            }
        case ProfileActionTypes.FETCH_PROFILES_FULFILLED:
            return {
                ...state,
                profiles: action.payload
            }

        case ProfileActionTypes.FETCH_PROFILE_DETAIL_FULLFILLED:
            return {
                ...state,
                profile: action.payload
            }

        case ProfileActionTypes.CLEAR_PROFILE_REJECTED:
            return {
                ...state,
                isError: null
            }
        default:
            return state
    }
}

export default fetchProfileReducer
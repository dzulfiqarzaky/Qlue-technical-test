import {ProfileAction} from '../actions'
import {ProfileActionTypes} from '../action-types'
import { Dispatch } from 'redux';

export const fetchProfilePending = (payload: boolean) => {
    return {
        type: ProfileActionTypes.FETCH_PROFILE_PENDING,
        payload
    }
}

export const fetchProfileRejected = (payload: any) => {
    return {
        type: ProfileActionTypes.FETCH_PROFILE_REJECTED,
        payload
    }
}

export const fetchProfileFulfilled = (payload: any) => {
    return {
        type: ProfileActionTypes.FETCH_PROFILES_FULFILLED,
        payload
    }
}

export const fetchProfileDetailFulfilled = (payload: any) => {
    return {
        type: ProfileActionTypes.FETCH_PROFILE_DETAIL_FULLFILLED,
        payload
    }
}

export const clearProfileRejected = (payload: any) =>  (dispatch: Dispatch<ProfileAction>) =>  {
    dispatch ({
        type: ProfileActionTypes.CLEAR_PROFILE_REJECTED,
        payload
    })
}
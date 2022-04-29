import { ProfileActionTypes } from '../action-types'

interface ProfilesAction {
    type: ProfileActionTypes.FETCH_PROFILES_FULFILLED,
    payload: any
}

interface ProfileDetailAction {
    type: ProfileActionTypes.FETCH_PROFILE_DETAIL_FULLFILLED,
    payload: any
}

interface ProfileErrorAction {
    type: ProfileActionTypes.FETCH_PROFILE_REJECTED,
    payload: any
}

interface ProfileLoadingAction {
    type: ProfileActionTypes.FETCH_PROFILE_PENDING,
    payload: boolean
}

interface ProfileClearAction {
    type: ProfileActionTypes.CLEAR_PROFILE_REJECTED,
    payload: any
}

export type ProfileAction = ProfilesAction | ProfileDetailAction | ProfileErrorAction | ProfileLoadingAction | ProfileClearAction

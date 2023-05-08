import {
	EditProfileFailure,
	EditProfileFailurePayload,
	EditProfilePayload, EditProfileRequest, EditProfileSuccess, EditProfileSuccessPayload,

} from './types'
import { UserTypes } from './actionTypes'

export const editProfileRequest = (payload: EditProfilePayload): EditProfileRequest => ({
	type: UserTypes.EDIT_PROFILE_REQUEST,
	payload,
})

export const editProfileSuccess = (payload: EditProfileSuccessPayload): EditProfileSuccess => ({
	type: UserTypes.EDIT_PROFILE_SUCCESS,
	payload,
})

export const editProfileFailure = (payload: EditProfileFailurePayload): EditProfileFailure => ({
	type: UserTypes.EDIT_PROFILE_FAILURE,
	payload,
})

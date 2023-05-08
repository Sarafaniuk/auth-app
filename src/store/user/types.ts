import {UserTypes} from './actionTypes'
import {IUser} from '../../shared/types/user.types'

export interface UserState {
	loading: boolean
	error: string | null
}

export interface IEditProfileResponse {
	status: string
	msg: string
	error?: number
	user_data: IUser
}

export interface EditProfilePayload {
	birth_date: string,
	lname: string,
	name: string,
	sname: string,
	phone: string,
	gender_id: number
}

export interface EditProfileSuccessPayload {
	token: string
}

export interface EditProfileFailurePayload {
	error: string
}

export type EditProfileRequest = {
	type: typeof UserTypes.EDIT_PROFILE_REQUEST
	payload: EditProfilePayload
}

export type EditProfileSuccess = {
	type: typeof UserTypes.EDIT_PROFILE_SUCCESS
	payload: EditProfileSuccessPayload
}

export type EditProfileFailure = {
	type: typeof UserTypes.EDIT_PROFILE_FAILURE
	payload: EditProfileFailurePayload
}


export type UserActions =
	| EditProfileRequest
	| EditProfileSuccess
	| EditProfileFailure

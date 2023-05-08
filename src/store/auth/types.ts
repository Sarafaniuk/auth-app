import { AuthTypes } from './actionTypes'
import { IUser } from '../../shared/types/user.types'

export interface AuthState {
	loading: boolean
	error: string | null
	isAuth: boolean
	user: IUser | {}
}

export interface ILoginResponse {
	status: string
	msg: string
	error?: number
	user_data: IUser
}

export interface IAuthResponse {
	status: string
	msg: string
	error?: string
	user_data: {
		token: string
	}
}
export interface LoginPayload {
	email: string
	password: string
	history: any
}

export interface LoginSuccessPayload {
	user: IUser
}

export interface LoginFailurePayload {
	error: string
}

export type LoginRequest = {
	type: typeof AuthTypes.LOGIN_REQUEST
	payload: LoginPayload
}

export type LoginSuccess = {
	type: typeof AuthTypes.LOGIN_SUCCESS
	payload: LoginSuccessPayload
}

export type LoginFailure = {
	type: typeof AuthTypes.LOGIN_FAILURE
	payload: LoginFailurePayload
}

export interface RegisterPayload {
	email: string
	password: string
}

export interface RegisterSuccessPayload {
	token: string
}

export interface RegisterFailurePayload {
	error: string
}

export type RegisterRequest = {
	type: typeof AuthTypes.REGISTER_REQUEST
	payload: RegisterPayload
}

export type RegisterSuccess = {
	type: typeof AuthTypes.REGISTER_SUCCESS
	payload: RegisterSuccessPayload
}

export type RegisterFailure = {
	type: typeof AuthTypes.REGISTER_FAILURE
	payload: RegisterFailurePayload
}

export interface getMePayload {
	history: any
}

export interface getMeSuccessPayload {
	user: IUser
}

export interface getMeFailurePayload {
	error: string
}

export type getMeRequest = {
	type: typeof AuthTypes.GET_ME_REQUEST
	payload: getMePayload
}

export type getMeSuccess = {
	type: typeof AuthTypes.GET_ME_SUCCESS
	payload: getMeSuccessPayload
}

export type getMeFailure = {
	type: typeof AuthTypes.GET_ME_FAILURE
	payload: getMeFailurePayload
}

export interface createProfilePayload {
	birth_date?: string
	lname?: string
	name?: string
	sname?: string
	phone?: number
	gender_id?: number
}

export interface createProfileSuccessPayload {
	user: IUser
}

export interface createProfileFailurePayload {
	error: string
}

export type createProfileRequest = {
	type: typeof AuthTypes.CREATE_PROFILE_REQUEST
	payload: createProfilePayload
}

export type createProfileSuccess = {
	type: typeof AuthTypes.CREATE_PROFILE_SUCCESS
	payload: createProfileSuccessPayload
}

export type createProfileFailure = {
	type: typeof AuthTypes.CREATE_PROFILE_FAILURE
	payload: createProfileFailurePayload
}

export interface confirmPhoneSendSmsPayload {
	phone: string
}

export interface confirmPhoneSendSmsSuccessPayload {
	status: string
	msg: string
}

export interface confirmPhoneSendSmsFailurePayload {
	error: string
}

export type confirmPhoneSendSmsRequest = {
	type: typeof AuthTypes.CONFIRM_PHONE_SEND_SMS_REQUEST
	payload: confirmPhoneSendSmsPayload
}

export type confirmPhoneSendSmsSuccess = {
	type: typeof AuthTypes.CONFIRM_PHONE_SEND_SMS_SUCCESS
	payload: confirmPhoneSendSmsSuccessPayload
}

export type confirmPhoneSendSmsFailure = {
	type: typeof AuthTypes.CONFIRM_PHONE_SEND_SMS_FAILURE
	payload: confirmPhoneSendSmsFailurePayload
}

export interface confirmPhonePayload {
	confirm_phone_code: string
}

export interface confirmPhoneSuccessPayload {
	status: string
	msg: string
}

export interface confirmPhoneFailurePayload {
	error: string
}

export type confirmPhoneRequest = {
	type: typeof AuthTypes.CONFIRM_PHONE_REQUEST
	payload: confirmPhonePayload
}

export type confirmPhoneSuccess = {
	type: typeof AuthTypes.CONFIRM_PHONE_SUCCESS
	payload: confirmPhoneSuccessPayload
}

export type confirmPhoneFailure = {
	type: typeof AuthTypes.CONFIRM_PHONE_FAILURE
	payload: confirmPhoneFailurePayload
}
export type AuthActions =
	| LoginRequest
	| LoginSuccess
	| LoginFailure
	| RegisterFailure
	| RegisterSuccess
	| RegisterRequest
	| getMeFailure
	| getMeSuccess
	| getMeRequest
	| createProfileRequest
	| createProfileFailure
	| createProfileSuccess
	| confirmPhoneSendSmsRequest
	| confirmPhoneSendSmsFailure
	| confirmPhoneSendSmsSuccess
	| confirmPhoneRequest
	| confirmPhoneSuccess
	| confirmPhoneFailure

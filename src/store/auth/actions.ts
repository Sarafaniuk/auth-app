import {
	confirmPhoneFailure,
	confirmPhoneFailurePayload,
	confirmPhonePayload,
	confirmPhoneRequest,
	confirmPhoneSendSmsFailure,
	confirmPhoneSendSmsFailurePayload,
	confirmPhoneSendSmsPayload,
	confirmPhoneSendSmsRequest,
	confirmPhoneSendSmsSuccess,
	confirmPhoneSendSmsSuccessPayload,
	confirmPhoneSuccess,
	confirmPhoneSuccessPayload,
	createProfileFailure,
	createProfileFailurePayload,
	createProfilePayload,
	createProfileRequest,
	createProfileSuccess,
	createProfileSuccessPayload,
	getMeFailure,
	getMeFailurePayload,
	getMePayload,
	getMeRequest,
	getMeSuccess,
	getMeSuccessPayload,
	LoginFailure,
	LoginFailurePayload,
	LoginPayload,
	LoginRequest,
	LoginSuccess,
	LoginSuccessPayload,
	RegisterFailure,
	RegisterFailurePayload,
	RegisterPayload,
	RegisterRequest,
	RegisterSuccess,
	RegisterSuccessPayload,
} from './types'
import { AuthTypes } from './actionTypes'

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
	type: AuthTypes.LOGIN_REQUEST,
	payload,
})

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
	type: AuthTypes.LOGIN_SUCCESS,
	payload,
})

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
	type: AuthTypes.LOGIN_FAILURE,
	payload,
})

export const registerRequest = (payload: RegisterPayload): RegisterRequest => ({
	type: AuthTypes.REGISTER_REQUEST,
	payload,
})

export const registerSuccess = (payload: RegisterSuccessPayload): RegisterSuccess => ({
	type: AuthTypes.REGISTER_SUCCESS,
	payload,
})

export const registerFailure = (payload: RegisterFailurePayload): RegisterFailure => ({
	type: AuthTypes.REGISTER_FAILURE,
	payload,
})

export const getProfile = (payload: getMePayload): getMeRequest => ({
	type: AuthTypes.GET_ME_REQUEST,
	payload,
})

export const getProfileSuccess = (payload: getMeSuccessPayload): getMeSuccess => ({
	type: AuthTypes.GET_ME_SUCCESS,
	payload,
})

export const getProfileFailure = (payload: getMeFailurePayload): getMeFailure => ({
	type: AuthTypes.GET_ME_FAILURE,
	payload,
})

export const profileCreate = (payload: createProfilePayload): createProfileRequest => ({
	type: AuthTypes.CREATE_PROFILE_REQUEST,
	payload,
})

export const profileCreateSuccess = (
	payload: createProfileSuccessPayload
): createProfileSuccess => ({
	type: AuthTypes.CREATE_PROFILE_SUCCESS,
	payload,
})

export const profileCreateFailure = (
	payload: createProfileFailurePayload
): createProfileFailure => ({
	type: AuthTypes.CREATE_PROFILE_FAILURE,
	payload,
})

export const confirmPhoneSms = (
	payload: confirmPhoneSendSmsPayload
): confirmPhoneSendSmsRequest => ({
	type: AuthTypes.CONFIRM_PHONE_SEND_SMS_REQUEST,
	payload,
})

export const confirmPhoneSmsSuccess = (
	payload: confirmPhoneSendSmsSuccessPayload
): confirmPhoneSendSmsSuccess => ({
	type: AuthTypes.CONFIRM_PHONE_SEND_SMS_SUCCESS,
	payload,
})

export const confirmPhoneSmsFailure = (
	payload: confirmPhoneSendSmsFailurePayload
): confirmPhoneSendSmsFailure => ({
	type: AuthTypes.CONFIRM_PHONE_SEND_SMS_FAILURE,
	payload,
})

export const phoneConfirm = (payload: confirmPhonePayload): confirmPhoneRequest => ({
	type: AuthTypes.CONFIRM_PHONE_REQUEST,
	payload,
})

export const phoneConfirmSuccess = (payload: confirmPhoneSuccessPayload): confirmPhoneSuccess => ({
	type: AuthTypes.CONFIRM_PHONE_SUCCESS,
	payload,
})

export const phoneConfirmFailure = (payload: confirmPhoneFailurePayload): confirmPhoneFailure => ({
	type: AuthTypes.CONFIRM_PHONE_FAILURE,
	payload,
})

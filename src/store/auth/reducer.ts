import { AuthTypes } from './actionTypes'

import { AuthActions, AuthState } from './types'

const initialState: AuthState = {
	loading: false,
	isAuth: false,
	error: null,
	user: {},
}

const reducers = (state = initialState, action: AuthActions) => {
	switch (action.type) {
		case AuthTypes.LOGIN_REQUEST:
		case AuthTypes.REGISTER_REQUEST:
		case AuthTypes.GET_ME_REQUEST:
		case AuthTypes.CONFIRM_PHONE_SEND_SMS_REQUEST:
			return {
				...state,
				error: null,
				loading: true,
			}
		case AuthTypes.LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
			}
		case AuthTypes.REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
			}
		case AuthTypes.GET_ME_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload.user,
				isAuth: true,
				error: null,
			}
		case AuthTypes.CONFIRM_PHONE_SEND_SMS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
			}
		case AuthTypes.LOGIN_FAILURE:
		case AuthTypes.REGISTER_FAILURE:
		case AuthTypes.CONFIRM_PHONE_SEND_SMS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			}
		case AuthTypes.GET_ME_FAILURE:
			return {
				...state,
				loading: false,
				user: {},
				error: action.payload.error,
			}

		default:
			return {
				...state,
			}
	}
}

export default reducers

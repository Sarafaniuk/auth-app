import {UserTypes} from './actionTypes'

import {UserActions, UserState} from './types'

const initialState: UserState = {
	loading: false,
	error: null,
}

const reducers = (state = initialState, action: UserActions) => {
	switch (action.type) {
		case UserTypes.EDIT_PROFILE_REQUEST:
			return {
				...state,
				error: null,
				loading: true,
			}
		case UserTypes.EDIT_PROFILE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			}
		case UserTypes.EDIT_PROFILE_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
			}
		default:
			return {
				...state,
			}
	}
}

export default reducers

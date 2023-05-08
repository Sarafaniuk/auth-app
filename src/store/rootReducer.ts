import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import userReducer  from './user/reducer'
import  modalReducer from './modal/reducer'
const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	modal: modalReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

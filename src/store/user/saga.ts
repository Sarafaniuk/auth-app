import {all, call, put, takeLatest} from 'redux-saga/effects'
import {EditProfileRequest, IEditProfileResponse} from './types'
import {editProfileFailure, editProfileSuccess} from './actions'
import {UserTypes} from './actionTypes'
import {capitalizeFirstLetter} from '../../utils/string/capitalizeFirstLetter'
import {UserService} from '../../services/user/UserService'

function* editProfileSaga(action: EditProfileRequest) {
	try {
		const { user_data, error, msg }: IEditProfileResponse = yield call(
			UserService.editUser,
			action.payload
		)
		if (error) {
			throw { message: capitalizeFirstLetter(msg) }
		}
		yield put(editProfileSuccess({ token: user_data.token }))
	} catch (e: any) {
		console.log(e)
		yield put(editProfileFailure({ error: e.message }))
	}
}

function* userSaga() {
	yield all([
		takeLatest(UserTypes.EDIT_PROFILE_REQUEST, editProfileSaga),
	])
}

export default userSaga

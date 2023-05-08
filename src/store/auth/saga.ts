import {all, call, put, takeLatest} from 'redux-saga/effects'
import {AuthService} from '../../services/auth/AuthService'
import {
	confirmPhoneRequest,
	confirmPhoneSendSmsRequest,
	confirmPhoneSendSmsSuccessPayload,
	confirmPhoneSuccessPayload,
	createProfileRequest,
	getMeRequest,
	IAuthResponse,
	ILoginResponse,
	LoginRequest,
	RegisterRequest,
} from './types'
import {
	confirmPhoneSmsFailure,
	confirmPhoneSmsSuccess,
	getProfileFailure,
	getProfileSuccess,
	loginFailure,
	phoneConfirmFailure,
	phoneConfirmSuccess,
	profileCreateFailure,
	profileCreateSuccess,
	registerFailure,
	registerSuccess,
} from './actions'
import {AuthTypes} from './actionTypes'
import {capitalizeFirstLetter} from '../../utils/string/capitalizeFirstLetter'
import {showModal} from '../modal/actions'
import {ModalsTypes} from '../../components/Modals/modalTypes'
import {AppRoutes} from '../../utils/routes/routes'
import {isNull} from 'lodash'

function* loginSaga(action: LoginRequest) {
	try {
		const { user_data, error, msg }: ILoginResponse = yield call(
			AuthService.login,
			action.payload
		)
		if (error) {
			throw { message: capitalizeFirstLetter(msg) }
		}
		// yield put(loginSuccess({ user: user_data }))
		window.location.reload()
	} catch (e: any) {
		console.log(e)
		yield put(loginFailure({ error: e.message }))
	}
}

function* registerSaga(action: RegisterRequest) {
	try {
		const { user_data, error, msg }: IAuthResponse = yield call(
			AuthService.register,
			action.payload
		)
		if (error) {
			throw { message: capitalizeFirstLetter(msg) }
		}
		yield put(registerSuccess({ token: user_data.token }))

		yield put(
			showModal({
				modal: ModalsTypes.SUCCESS_MODAL,
				title: 'Аккаунт был успешно зарегистрирован. На Ваш E-Mail отправлено письмо с ссылкой для подтверждения',
			})
		)
	} catch (e: any) {
		yield put(registerFailure({ error: e.message }))
	}
}

function* getMeSaga(action: getMeRequest) {
	try {
		const { history } = action.payload
		const { user_data }: ILoginResponse = yield call(AuthService.getMe)
		yield put(getProfileSuccess({ user: user_data }))
		if (isNull(user_data.phone)) {
			history.push(AppRoutes.PROFILE_EDIT)
		}
	} catch (e: any) {
		yield put(getProfileFailure({ error: e.message }))
	}
}

function* confirmPhoneSendSmsSaga(action: confirmPhoneSendSmsRequest) {
	try {
		const response: confirmPhoneSendSmsSuccessPayload = yield call(
			AuthService.confirmPhoneSendSms,
			action.payload
		)
		yield put(confirmPhoneSmsSuccess(response))
	} catch (e: any) {
		yield put(confirmPhoneSmsFailure({ error: e.message }))
	}
}
function* createProfileSaga(action: createProfileRequest) {
	try {
		const { user_data }: ILoginResponse = yield call(AuthService.createProfile, action.payload)
		yield put(profileCreateSuccess({ user: user_data }))
		yield put(showModal({
			modal:ModalsTypes.SUCCESS_MODAL,
			title: 'Новая компания успешно создана и добавлена в базу данных. Пройдите верификацию, чтобы завершить регистрацию компании',
			isButtonVisible: true,
			action: 'goHome'
		}))
	} catch (e: any) {
		yield put(profileCreateFailure({ error: e.message }))
	}
}
function* confirmPhoneSaga(action: confirmPhoneRequest) {
	try {
		const response: confirmPhoneSuccessPayload = yield call(
			AuthService.confirmPhone,
			action.payload
		)
		yield put(phoneConfirmSuccess(response))
	} catch (e: any) {
		yield put(phoneConfirmFailure({ error: e.message }))
	}
}

function* authSaga() {
	yield all([
		takeLatest(AuthTypes.LOGIN_REQUEST, loginSaga),
		takeLatest(AuthTypes.REGISTER_REQUEST, registerSaga),
		takeLatest(AuthTypes.GET_ME_REQUEST, getMeSaga),
		takeLatest(AuthTypes.CREATE_PROFILE_REQUEST, createProfileSaga),
		takeLatest(AuthTypes.CONFIRM_PHONE_SEND_SMS_REQUEST, confirmPhoneSendSmsSaga),
		takeLatest(AuthTypes.CONFIRM_PHONE_REQUEST, confirmPhoneSaga),
	])
}

export default authSaga

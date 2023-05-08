import {
	confirmPhonePayload,
	confirmPhoneSendSmsPayload,
	createProfilePayload,
	IAuthResponse,
	ILoginResponse,
} from '../../store/auth/types'
import axios from 'axios'
import { API_URL, getAuthUrl } from '../../api/api.config'
import { saveTokenStorage } from './auth.helper'
import instance from '../../api/axios.config'

export const AuthService = {
	async login(fields: { email: string; password: string }) {
		const { data } = await axios.post<ILoginResponse>(`${API_URL}${getAuthUrl('/loginUser')}`, {
			...fields,
		})
		if (data.user_data) {
			saveTokenStorage(data.user_data.token)
		}
		return data
	},

	async register(fields: { email: string; password: string }) {
		const { data } = await axios.post(`${API_URL}${getAuthUrl('/registration')}`, {
			...fields,
			ref: `${process.env.REACT_APP_CLIENT_URL}/auth`,
		})
		return data
	},

	async getMe() {
		const { data } = await instance.get(`${API_URL}${getAuthUrl('/get_userInfo')}`)
		return data
	},

	async createProfile(fields: createProfilePayload) {
		const { data } = await instance.post(`${API_URL}${getAuthUrl('/profileCreate')}`, {
			...fields,
		})
		return data
	},

	async confirmPhoneSendSms(fields: confirmPhoneSendSmsPayload) {
		const { data } = await instance.post(`${API_URL}${getAuthUrl('/confirmPhoneSendSms')}`, {
			...fields,
		})
		return data
	},
	async confirmPhone(fields: confirmPhonePayload) {
		const { data } = await instance.post(`${API_URL}${getAuthUrl('/confirmPhone')}`, {
			confirm_phone_code: fields.confirm_phone_code,
		})
		return data
	},
}

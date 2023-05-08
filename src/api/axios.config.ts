import axios from 'axios'
import { API_URL } from './api.config'
import { getStoreLocal } from '../utils/local-storage/localStorage'

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use((config) => {
	const accessToken = getStoreLocal('token')
	if (config.headers && accessToken) config.headers.userToken = accessToken

	return config
})

export default instance
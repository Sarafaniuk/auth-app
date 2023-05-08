import {API_URL, getAuthUrl} from '../../api/api.config'
import {EditProfilePayload, IEditProfileResponse} from '../../store/user/types'
import instance from '../../api/axios.config'



export const UserService = {
	async editUser(fields: EditProfilePayload) {
		const { data } = await instance.post<IEditProfileResponse>(`${API_URL}${getAuthUrl('/createProfile')}`, {
			...fields,
		})
		return data
	},

}

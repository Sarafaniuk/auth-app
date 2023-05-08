export interface IUser {
	id: string
	token?: string
	is_confirm_email: number
	is_confirm_phone: number
	is_profile_created: number
	email: string
	phone: string
	lname: string
	sname: string
	name: string
	birth_date: string
}

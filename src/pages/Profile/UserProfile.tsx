import React, { useState } from 'react'
import EnterAccount from '../../components/SideInfo/EnterAccount'
import UserForm from '../../components/forms/User/UserForm'
import { Row } from 'antd'
import LanguageDropdown from '../../components/LanguageDropdown'
import './UserProfile.less'
import ProfileConfirmPhone from '../../components/forms/Auth/Phone/ProfileConfirmPhone'

const UserProfile = () => {
	const [confirmData, setConfirmData] = useState({
		confirm: false,
		phone: '',
	})
	return (
		<Row className='user_page'>
			<>
				<EnterAccount />
			</>
			<div className='user_page__content'>
				<div className='user_page__translation'>
					<LanguageDropdown />
				</div>
				<div className='user_page__tab_outer'>

						<UserForm setConfirmData={setConfirmData} confirmData={confirmData}/>

						<ProfileConfirmPhone
							confirmData={confirmData}
							setConfirmData={setConfirmData}
						/>

				</div>
			</div>
		</Row>
	)
}

export default UserProfile

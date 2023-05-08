import {FC} from 'react'
import './Navigation.less'
import {Header} from 'antd/es/layout/layout'
import {Button, Menu} from 'antd'
import {useActions} from '../../../hooks/useActions'
import {ModalsTypes} from '../../Modals/modalTypes'

const Navigation: FC = () => {

	const { showModal } = useActions()

	const handlerLogOut = () => {
	  showModal({
		  modal:ModalsTypes.CONFIRM_ACTION_MODAL,
		  title: 'Подтверждение выхода из аккаунта',
		  action: 'logout'
	  })
	}
	return (
		<Header>
			<div className="logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				items={new Array(5).fill(null).map((_, index) => {
					const key = index + 1;
					return {
						key,
						label: `Menu ${key}`,
					};
				})}
			/>
			{/*["default", "primary", "ghost", "dashed", "link", "text"];*/}
			<Button
				type={'default'}
				style={{position: 'absolute', top: 15, right: 20}}
				onClick={handlerLogOut}
			>
				LOG OUT
			</Button>
		</Header>
	)
}

export default Navigation

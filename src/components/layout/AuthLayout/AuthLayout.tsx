import Navigation from '../Navigation/Navigation'
import { FC, ReactNode } from 'react'
import './AuthLayout.less'
import { useLocation } from 'react-router-dom'
import { AppRoutes } from '../../../utils/routes/routes'
interface Props {
	children: ReactNode
}
const AuthLayout: FC<Props> = ({ children }) => {
	const location = useLocation()
	return (
		<div id='layout-wrapper'>
			{location.pathname !== AppRoutes.PROFILE_EDIT && <Navigation />}

			<main className='main-content'>{children}</main>
		</div>
	)
}

export default AuthLayout

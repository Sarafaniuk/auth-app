import { Redirect, Route } from 'react-router-dom'

import AuthLayout from '../../components/layout/AuthLayout/AuthLayout'

import { getStoreLocal } from '../../utils/local-storage/localStorage'
import { AppRoutes } from '../../utils/routes/routes'
import { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getIsAuthSelector } from '../../store/auth/selectors'
import Modals from '../Modals/Modals'

interface Props {
	component: any
	path: string
	exact?: boolean
}
const ProtectedRoute: FC<Props> = ({ component: Component, path, exact = false }) => {
	const token = getStoreLocal('token')
	const isAuth = useTypedSelector((state) => getIsAuthSelector(state))
	return (
		<Route
			exact={exact}
			path={path}
			render={(props: any) => {
				if (isAuth || token !== null) {
					return (
						<AuthLayout>
							<Modals />
							<Component {...props} />
						</AuthLayout>
					)
				} else {
					return <Redirect to={{ pathname: AppRoutes.AUTH }} />
				}
			}}
		/>
	)
}

export default ProtectedRoute

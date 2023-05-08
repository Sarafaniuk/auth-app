import { Redirect, Route } from 'react-router-dom'

import GuestLayout from '../../components/layout/GuestLayout/GuestLayout'
import { getStoreLocal } from '../../utils/local-storage/localStorage'
import { AppRoutes } from '../../utils/routes/routes'
import { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getIsAuthSelector } from '../../store/auth/selectors'
import Modals from '../Modals/Modals'

interface Props {
	component: any
	path: string
	exact: boolean
}

const PublicRoute: FC<Props> = ({ component: Component, path, exact }) => {
	const token = getStoreLocal('token')
	const isAuth = useTypedSelector((state) => getIsAuthSelector(state))
	return (
		<Route
			exact={exact}
			path={path}
			render={(props: any) => {
				if (isAuth) {
					return (
						<Redirect
							to={{ pathname: AppRoutes.HOME, state: { from: props.location } }}
						/>
					)
				} else {
					return (
						<GuestLayout>
							<Modals />
							<Component {...props} />
						</GuestLayout>
					)
				}
			}}
		/>
	)
}
export default PublicRoute

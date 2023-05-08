import { AppRoutes } from '../../utils/routes/routes'
import { lazy } from 'react'

export interface IRoute {
	path: string
	component: any
}

//Private routes
const Home = lazy(() => import('../../pages/Home/Home'))
const UserProfile = lazy(() => import('../../pages/Profile/UserProfile'))

//Public routes
const Auth = lazy(() => import('../../pages/Auth/Auth/Auth'))
const Reset = lazy(() => import('../../pages/Auth/ResetPassword/ResetPassword'))

export const PublicRoutes: IRoute[] = [
	{
		path: AppRoutes.RESET_PASSWORD,
		component: Reset,
	},
	{
		path: AppRoutes.AUTH,
		component: Auth,
	},
]

export const PrivateRoutes: IRoute[] = [
	{
		path: AppRoutes.HOME,
		component: Home,
	},
	{
		path: AppRoutes.PROFILE_EDIT,
		component: UserProfile,
	},
]

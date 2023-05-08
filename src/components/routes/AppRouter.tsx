import { Route, Switch } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './routes'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import NotFound from "../../pages/NotFound/NotFound";
const AppRouter = () => {
	return (
		<Switch>
			{PublicRoutes.map(({ path, component }) => (
				<PublicRoute exact key={path} path={path} component={component} />
			))}
			{PrivateRoutes.map(({ path, component }) => (
				<ProtectedRoute exact key={path} path={path} component={component} />
			))}
			<Route component={NotFound} />
		</Switch>
	)
}

export default AppRouter

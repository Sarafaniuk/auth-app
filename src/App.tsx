import { FC, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import AppRouter from './components/routes/AppRouter'
import ErrorFallback from './components/errors/ErrorBoundary/ErrorFallback'
import { Spin } from 'antd'
import { getStoreLocal } from './utils/local-storage/localStorage'
import { useActions } from './hooks/useActions'
import { useHistory, useLocation } from 'react-router-dom'

const App: FC = () => {
	const { getProfile } = useActions()
	const history = useHistory()
	if (getStoreLocal('token')) {
		getProfile({ history })
	}
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Suspense fallback={<Spin />}>
				<AppRouter />
			</Suspense>
		</ErrorBoundary>
	)
}

export default App

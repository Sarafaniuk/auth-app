import { Button } from 'antd'

import './ErrorFallback.less'
import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
	return (
		<div className='error-fallback-container'>
			<div className='error-fallback-row'>
				<h4>Something went wrong:</h4>
				<pre style={{ color: 'red' }}>{error.message}</pre>
				<div>
					<Button onClick={resetErrorBoundary}>Try again</Button>
				</div>
			</div>
		</div>
	)
}

export default ErrorFallback

import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './assets/styles/globals.less'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</I18nextProvider>
	</Provider>
)

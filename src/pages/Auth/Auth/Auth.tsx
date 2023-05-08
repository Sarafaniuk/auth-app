import {FC} from 'react'
import {Row, TabsProps} from 'antd'
import Tab from "../../../components/ui/Tab/Tab"
import RegisterForm from "../../../components/forms/Auth/Register/RegisterForm"
import './Auth.less'
import LoginForm from "../../../components/forms/Auth/Login/LoginForm"
import EnterAccount from "../../../components/SideInfo/EnterAccount"
import {WithTranslation, withTranslation} from 'react-i18next'
import LanguageDropdown from '../../../components/LanguageDropdown'
import LoginOptions from '../../../components/forms/Auth/SocialLogin/LoginOptions'

interface IProps extends WithTranslation {}


const Auth: FC<IProps> = ({t}) => {

	const items: TabsProps['items'] = [
		{
			key: '1',
			label: `${t('Вход')}`,
			children: <LoginForm/>,
		},
		{
			key: '2',
			label: `${t('Регистрация')}`,
			children: <RegisterForm/>,
		},
	];


	return (
		<Row className="auth_page">
			<>
				<EnterAccount/>
				{/*<img className="auth_page__side_bg" src={side_bg} alt="Side background"/>*/}
			</>
			<div className="auth_page__content">
				<div className="auth_page__translation">
					<LanguageDropdown/>
				</div>
				<div className="auth_page__tab_outer">
					<Tab items={items}/>
					<LoginOptions/>
				</div>
			</div>
		</Row>
	)
}

export default withTranslation()(Auth)

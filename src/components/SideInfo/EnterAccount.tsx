import { List, Typography } from 'antd'
import './SideInfo.less'
import { map } from 'lodash'
import CheckIcon from '../icons/CheckIcon'
import { leftList, rightList } from './SideInfo.data'
import { WithTranslation, withTranslation } from 'react-i18next'
import { FC } from 'react'
interface IProps extends WithTranslation {}

const EnterAccount: FC<IProps> = ({ t }): JSX.Element => {
	const renderList = (list: string[]) => (
		<List>
			{map(list, (text: string, i: number) => (
				<List.Item key={i}>
					<CheckIcon />
					{t(`${text}`)}
				</List.Item>
			))}
		</List>
	)

	return (
		<div className='side_auth'
			 style={{background:'url(https://i.ibb.co/qxHSD7f/Work.png) no-repeat bottom,linear-gradient(180deg,#8892ff,#6d6be5 18.75%)'}}>
			<Typography.Title color='#fff' className='side_auth__title'>
				{t('Войти в аккаунт')}
			</Typography.Title>
			<Typography.Text className='side_auth__text'>
				{t(
					'Введите ваш E-mail и пароль, чтобы начать использовать все преимущества платформы'
				)}
			</Typography.Text>
			<div className='side_auth__list'>
				{renderList(leftList)}
				{renderList(rightList)}
			</div>
		</div>
	)
}

export default withTranslation()(EnterAccount)

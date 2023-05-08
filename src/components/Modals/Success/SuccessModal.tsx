import {FC} from 'react'
import './SuccessModal.less'
import {Button, Typography} from 'antd'
import CheckCircleIcon from '../../icons/CheckCircleIcon'
import {useActions} from '../../../hooks/useActions'
import {closeModal} from '../../../store/modal/actions'
import {useHistory} from 'react-router-dom'

interface Props{
	show: boolean,
	title: string,
	action?: string,
	isButtonVisible?: boolean,
}
const SuccessModal: FC<Props> = ({
								 show= false,
								 title= '',
								 action= '',
								 isButtonVisible= false,
								 }) => {


	const {closeModal}  = useActions()

	const history = useHistory()

	const handlerConfirm = () => {
		switch (action) {
			case 'goHome':
				return goHome()
				break;
		}
	}

	const goHome = () => {
		history.push('/')
		closeModal()
	}
	return (
		<div className={show ? 'main' : 'noVisible'}>
			<Button className='close' onClick={closeModal}>X</Button>
			<div className='check'>
				<CheckCircleIcon />
				<Typography.Text color='#8d98b0' className='description'>
					{title}
				</Typography.Text>
				{
					isButtonVisible &&

					<Button
						onClick={handlerConfirm}
					>
						Перейти в Профиль Компаний
					</Button>
				}

			</div>
		</div>
	)
}

export default SuccessModal

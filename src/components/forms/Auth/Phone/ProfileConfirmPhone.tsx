import { FC, useCallback, useEffect, useState } from 'react'
import { Button, Form, Input, Typography } from 'antd'
import TimerIcon from '../../../icons/TimerIcon'
import './ProfileConfirmPhone.less'
import { useActions } from '../../../../hooks/useActions'
import { ModalsTypes } from '../../../Modals/modalTypes'
import { WithTranslation, withTranslation } from 'react-i18next'
import ArrowLeft from '../../../icons/ArrowLeft'
import { Controller, useForm } from 'react-hook-form'
import ValidationError from '../../../errors/ValidationError/ValidationError'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const { Text } = Typography
interface IProps extends WithTranslation {
	setConfirmData: (isConfirm: { confirm: boolean; phone: string }) => void
	confirmData: {
		confirm: boolean
		phone: string
	}
}

const schema = Yup.object({
	code: Yup.string().required('Это поле обязательно'),
}).required()
type FormData = Yup.InferType<typeof schema>

const ProfileConfirmPhone: FC<IProps> = ({ t, setConfirmData, confirmData }) => {
	const {
		formState: { errors },
		handleSubmit,
		control,
	} = useForm<FormData>({
		criteriaMode: 'all',
		resolver: yupResolver(schema),
		mode: 'onSubmit',
	})
	const [timeRemaining, setTimeRemaining] = useState<number>(0)

	const { showModal, confirmPhoneSms, phoneConfirm } = useActions()

	const startTimer = useCallback((durationInMinutes: number): (() => void) => {
		const durationInSeconds: number = durationInMinutes * 60

		setTimeRemaining(durationInSeconds)
		const intervalId: NodeJS.Timeout = setInterval(() => {
			setTimeRemaining((prevTime: number) => prevTime - 1)
		}, 1000)
		return () => clearInterval(intervalId)
	}, [])

	const formatTime = (timeInSeconds: number): string => {
		const minutes: number = Math.floor(timeInSeconds / 60)
		const seconds: number = timeInSeconds % 60

		return `${minutes} min ${seconds < 10 ? '0' : ''}${seconds} sec`
	}

	const sendSmsAgain = () => {
		startTimer(2)
		confirmPhoneSms({ phone: confirmData.phone.toString() })
	}

	const onSubmit = (data: FormData) => {
		phoneConfirm({ confirm_phone_code: data.code })
		setConfirmData({...confirmData, confirm:false})
	}

	useEffect(() => {
		startTimer(2)
	}, [])

	return (
		<>
			<Form
				className={confirmData.confirm ? 'confirm_phone' : 'none'}
				name='basic'
				layout='vertical'
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				initialValues={{ remember: true }}
				onFinish={handleSubmit(onSubmit)}
				autoComplete='off'
			>
				<Typography.Title color='#fff' level={4}>
					{t('Подтверждение телефона')}
				</Typography.Title>
				<Typography.Text className='confirm_phone__description'>
					{t('Мы отправили SMS с 6-значным кодом подтверждения на номер')}{' '}
					{confirmData.phone}
				</Typography.Text>
				<Form.Item label={t('SMS-код')} name='code'>
					<Controller
						name='code'
						control={control}
						render={({ field }) => (
							<Input {...field} className='my-2' placeholder={t('Укажите код')} />
						)}
					/>
					{errors.code && <ValidationError text={errors.code.message} />}
					<div className='confirm_phone__try_again'>
						<TimerIcon />
						{timeRemaining > 0 ? (
							`${formatTime(timeRemaining)}`
						) : (
							<Text className='confirm_phone__retry' onClick={sendSmsAgain}>
								{t('Оправить код повторно')}
							</Text>
						)}
					</div>
				</Form.Item>
				<Form.Item wrapperCol={{ span: 24 }}>
					<Button className='confirm_phone__submit' type='primary' htmlType='submit'>
						{t('Подтвердить')}
					</Button>
				</Form.Item>
			</Form>
			<div
				className={confirmData.confirm ? 'confirm_phone__go_back' : 'none'}
				onClick={() => setConfirmData({...confirmData, confirm:false}) }
			>
				{' '}
				<ArrowLeft />
				{t('Назад')}
			</div>
		</>
	)
}

export default withTranslation()(ProfileConfirmPhone)

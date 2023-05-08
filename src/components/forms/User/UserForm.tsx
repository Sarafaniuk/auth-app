import { Button, DatePicker, Form, Input, Select } from 'antd'
import '../User/UserForm.less'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import {FC, useCallback} from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import ValidationError from '../../errors/ValidationError/ValidationError'
import { IUser } from '../../../shared/types/user.types'
import GoOutIcon from '../../icons/GoOutIcon'
import { ModalsTypes } from '../../Modals/modalTypes'
import _ from 'lodash'

const schema = Yup.object({
	birth_date: Yup.string().required('Это поле обязательно'),
	lname: Yup.string().required('Это поле обязательно'),
	name: Yup.string().required('Это поле обязательно'),
	sname: Yup.string().required('Это поле обязательно'),
	phone: Yup.number().required('Это поле обязательно'),
	gender_id: Yup.number().required('Это поле обязательно'),
}).required()
type FormData = Yup.InferType<typeof schema>
interface IProps extends WithTranslation {
	setConfirmData: (confirmData: { confirm: boolean; phone: string }) => void,
	confirmData: {
		confirm: boolean
		phone: string
	}
}

type IOptions = {
	value: number
	label: string
}

const genderOptions: IOptions[] = [
	{ value: 1, label: 'Мужчина' },
	{ value: 2, label: 'Женщина' },
	{ value: 3, label: 'Другой' },
]
const UserForm: FC<IProps> = ({ t, setConfirmData, confirmData }) => {
	const { profileCreate, showModal, confirmPhoneSms } = useActions()
	const { error, loading } = useTypedSelector(({ user }) => user)
	const user = useTypedSelector(({ auth }) => auth.user) as IUser
	//@ts-ignore
	const hasErrorClass = (name: string) => ({ className: errors[name] && 'has-error' })
	const { Option } = Select

	const {
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
		setError,
		clearErrors,
		control,
	} = useForm<FormData>({
		criteriaMode: 'all',
		resolver: yupResolver(schema),
		mode: 'onSubmit',
	})

	const confirmPhoneHandler = () => {
		if (getValues('phone')) {
			confirmPhoneSms({ phone: getValues('phone').toString() })
			setConfirmData({
				confirm: true,
				phone: getValues('phone').toString(),
			})
		} else {
			setError('phone', {
				message: 'Введите номер телефона',
			})
		}
	}
	const onSubmit = useCallback((data: FormData) => {
		profileCreate({ ...data });
	}, [profileCreate]);

	const logout = () => {
		showModal({
			modal:ModalsTypes.CONFIRM_ACTION_MODAL,
			action: 'logout',
			title: 'Подтверждение выхода из аккаунта',
			description: 'Вы действительно хотите выйти из своей учетной записи?',
		})
	}

	return (
		<>
			<Form
				className={!confirmData.confirm ? 'user_form' : 'none'}
				name='basic'
				layout='vertical'
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				onFinish={handleSubmit(onSubmit)}
				autoComplete='off'
			>
				<div>
					<Form.Item label={t('Фамилия')} {...hasErrorClass('lname')}>
						<Controller
							name='lname'
							control={control}
							render={({ field }) => (
								<Input {...field} className='my-2' placeholder={t('Фамилия')} />
							)}
						/>
						{errors.lname && <ValidationError text={errors.lname.message} />}
					</Form.Item>

					<Form.Item label={t('Имя')} {...hasErrorClass('name')}>
						<Controller
							name='name'
							control={control}
							render={({ field }) => (
								<Input {...field} className='my-2' placeholder={t('Имя')} />
							)}
						/>
						{errors.name && <ValidationError text={errors.name.message} />}
					</Form.Item>

					<Form.Item label={t('Отчество')} {...hasErrorClass('sname')}>
						<Controller
							name='sname'
							control={control}
							render={({ field }) => (
								<Input {...field} className='my-2' placeholder={t('Отчество')} />
							)}
						/>
						{errors.sname && <ValidationError text={errors.sname.message} />}
					</Form.Item>

					<Form.Item label={t('Дата рождения')} {...hasErrorClass('birth_date')}>
						<Controller
							render={(props) => (
								<DatePicker
									placeholder='Дата рождения'
									{...props}
									onChange={(e, date) => {
										if (_.isNull(e)) {
											setValue('birth_date', '')
										} else {
											clearErrors('birth_date')
											setValue('birth_date', date)
										}
									}}
								/>
							)}
							control={control}
							name='birth_date'
							defaultValue=''
						/>
						{errors.birth_date && <ValidationError text={errors.birth_date.message} />}
					</Form.Item>

					<Form.Item label={t('Пол')} {...hasErrorClass('gender_id')}>
						<Controller
							name='gender_id'
							control={control}
							render={({ field }) => (
								<Select {...field} placeholder='Выберите пол'>
									{genderOptions.map((gender) => (
										<Option value={gender.value}>{gender.label}</Option>
									))}
								</Select>

								// <Input {...field} className='my-2' placeholder={t('Пол')} />
							)}
						/>
						{errors.gender_id && <ValidationError text={errors.gender_id.message} />}
					</Form.Item>

					<Form.Item label={t('Телефон')} {...hasErrorClass('phone')}>
						<Controller
							name='phone'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									suffix={
										<span
											onClick={confirmPhoneHandler}
											className='user_form__confirm_phone'
										>
											Подтвердить телефон
										</span>
									}
									type='number'
									className='my-2'
									placeholder={t('Телефон')}
								/>
							)}
						/>
						{errors.phone && <ValidationError text={errors.phone.message} />}
					</Form.Item>

					<Form.Item label={t('E-Mail')}>
						<Input disabled className='my-2' placeholder={user.email} />
					</Form.Item>
				</div>

				{error && <p className='error'>{error}</p>}
				<div className='user_form__footer'>
					<div className='user_form__go_out' onClick={logout}>
						{' '}
						<GoOutIcon /> {t('Выход')}{' '}
					</div>
					<Button htmlType='submit'>Далее</Button>
				</div>
			</Form>
		</>
	)
}

export default withTranslation()(UserForm)

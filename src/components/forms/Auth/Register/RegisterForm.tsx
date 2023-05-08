import { Button, Form, Input } from 'antd'
import '../Login/Form.less'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import {FC, useCallback} from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import ValidationError from '../../../errors/ValidationError/ValidationError'

const schema = Yup.object({
	email: Yup.string().required('Это поле обязательно').email('Введите валидный e-mail'),
	password: Yup.string()
		.required('Это поле обязательное')
		.matches(/(?=.*[a-z])(?=.*[A-Z])/, {
			message:
				'Буквенная часть пароля должна содержать как строчные, так и прописные (заглавные) буквы',
			name: 'match1',
		})
		.matches(/(?=.*[0-9])/, {
			message:
				'Пароль должен состоять из букв латинского алфавита (A-z), арабских цифр (0-9)',
			name: 'match2',
		})
		.matches(/^.{8,14}$/, {
			message: 'Длина пароля должна быть не менее 8 и не более 14 символов',
			name: 'match3',
		}),
	confirmPassword: Yup.string()
		.required('Это поле обязательное')
		.oneOf([Yup.ref('password')], 'Пароли не совпадают'),
}).required()
type FormData = Yup.InferType<typeof schema>
interface IProps extends WithTranslation {}

const RegisterForm: FC<IProps> = ({ t }) => {
	const { registerRequest } = useActions()
	const { error, loading } = useTypedSelector(({ auth }) => auth)
	//@ts-ignore
	const hasErrorClass = (name: string) => ({ className: errors[name] && 'has-error' })

	const {
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<FormData>({
		criteriaMode: 'all',
		resolver: yupResolver(schema),
		mode: 'onSubmit',
	})


	const onSubmit = useCallback(({ password, email }: FormData) => {
		registerRequest({
			email,
			password
		});
		reset();
	}, [registerRequest, reset]);

	return (
		<Form
			className='auth_form'
			name='basic'
			layout='vertical'
			labelCol={{ span: 24 }}
			wrapperCol={{ span: 24 }}

			onFinish={handleSubmit(onSubmit)}
			autoComplete='off'
		>
			<Form.Item label='E-mail' {...hasErrorClass('email')}>
				<Controller
					name='email'
					control={control}
					render={({ field }) => (
						<Input {...field} className='my-2' placeholder={t('Адрес эл. почты')} />
					)}
				/>
				{errors.email && <ValidationError text={errors.email.message} />}
			</Form.Item>

			<Form.Item label={t('Придумайте пароль')} {...hasErrorClass('password')}>
				<Controller
					name='password'
					control={control}
					render={({ field }) => (
						<Input.Password
							{...field}
							className='my-2'
							placeholder={t('Укажите ваш пароль')}
						/>
					)}
				/>
				{errors.password &&
					Object.keys(errors.password.types).map((keyName) => {
						return <ValidationError text={errors.password.types[keyName]} />
					})}
			</Form.Item>
			<Form.Item label={t('Повторите пароль')} {...hasErrorClass('confirmPassword')}>
				<Controller
					name='confirmPassword'
					control={control}
					render={({ field }) => (
						<Input.Password
							{...field}
							className='my-2'
							placeholder={t('Повторите ваш пароль')}
						/>
					)}
				/>
				{errors.confirmPassword && (
					<ValidationError text={errors.confirmPassword.message} />
				)}
			</Form.Item>

			{error && <p className='error'>{error}</p>}
			<Form.Item wrapperCol={{ span: 24 }}>
				<Button
					loading={loading}
					className='auth_form__submit'
					type='primary'
					htmlType='submit'
				>
					{!loading && t('Зарегистрироваться')}
				</Button>
			</Form.Item>
		</Form>
	)
}

export default withTranslation()(RegisterForm)

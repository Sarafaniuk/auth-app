import { Button, Form, Input } from 'antd'
import './Form.less'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import  { FC, useCallback } from 'react'
import { withTranslation, WithTranslation}  from 'react-i18next'
import {useHistory} from 'react-router-dom'

const schema = Yup.object({
	email: Yup.string().required('Введите e-mail'),
	password: Yup.string().required('Введите пароль'),
}).required()

type FormData = Yup.InferType<typeof schema>
interface IProps extends WithTranslation {}

const LoginForm: FC<IProps> = ({t,}) => {

	const { loginRequest } = useActions()
	const { error, loading } = useTypedSelector(({auth}) => auth)

	const history = useHistory()
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	})

	const onSubmit = useCallback((data: FormData) => {
		loginRequest({
			email: data.email,
			password: data.password,
			history,
		})
	}, [loginRequest])

	return (
		<Form
			className='auth_form'
			name='basic'
			layout='vertical'
			labelCol={{ span: 24 }}
			wrapperCol={{ span: 24 }}
			initialValues={{ remember: true }}
			onFinish={handleSubmit(onSubmit)}
			autoComplete='off'
		>
			<Form.Item label='E-mail' name='email'>
				<Controller
					name='email'
					control={control}
					render={({ field }) => (
						<Input {...field} className='my-2' placeholder={t('Адрес эл. почты')} />
					)}
				/>
			</Form.Item>
			<Form.Item label={t('Пароль')} name='password'>
				<Controller
					name='password'
					control={control}
					render={({ field }) => (
						<Input.Password {...field} className='my-2' placeholder={t('Пароль')} />
					)}
				/>
			</Form.Item>
			{error && <p className='error'>{error}</p>}
			<Form.Item wrapperCol={{ span: 24 }}>
				<Button
					loading={loading}
					className='auth_form__submit'
					type='primary'
					htmlType='submit'
				>
					{!loading && t('Войти')}
				</Button>
			</Form.Item>
		</Form>
	)
}

export default withTranslation()(LoginForm)

import Link from 'next/link'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useQueryClient } from 'react-query'
import { GraphQLClient } from 'graphql-request'
const loginFilePath = require('../../modules/auth/graphql/login')
import { InputLogin } from '../../modules/auth/interfaces/login.args'
import { AuthLayout } from '../../layouts/auth'
import { LoadingCustomComponent } from '../../modules/loading'

export default function LoginPage() {
	const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV)
	const queryClient = useQueryClient()
	const Router = useRouter()
	const [isLoading, setIsLoading] = useState(false)
	const [payload, setPayload] = useState<InputLogin>({
		phone: '',
		password: ''
	})
	const handleLogin = async () => {
		try {
			setIsLoading(true)
			await queryClient.invalidateQueries('registerMutation')
			const data = await graphQLClient.request<any>(loginFilePath, {
				input: { ...payload }
			})
			if (data?.login?.token) {
				localStorage.setItem(
					'token',
					JSON.stringify({
						isLogin: true,
						token: data.login.token,
						id: data.login.response.id
					})
				)
				Swal.fire('Oop !', data?.login?.msg, 'success')
				Router.push('/')
			} else {
				Swal.fire('Oop !', data?.login?.msg, 'error')
			}
		} catch (error) {
			console.error('Error:', error)
		} finally {
			setIsLoading(false)
		}
	}
	const onKeyDown = (e) => {
		if (e.code !== 'Enter') return
		handleLogin()
	}
	return (
		<>
			{isLoading && <LoadingCustomComponent />}
			<main id='main' style={{ height: '100vh' }}>
				<section className='section section-access'>
					<div className='section-header'>
						<h1 className='section-title big'>Đăng nhập</h1>
					</div>
					<div className='section-content'>
						<div className='form-access login-form js-login-form clearfix'>
							<div className='form-group form-group-phone'>
								<label htmlFor='inputPhoneEmailLogin'>Số điện thoại</label>
								<input
									value={payload.phone}
									onKeyDown={onKeyDown}
									onChange={(e) =>
										setPayload((prev) => {
											return {
												...prev,
												phone: e.target.value
											}
										})
									}
									type='text'
									className='form-control'
									id='inputPhoneEmailLogin'
									placeholder=''
									name='loginname'
								/>
							</div>
							<div className='form-group form-group-password'>
								<label htmlFor='password'>Mật khẩu</label>
								<input
									value={payload.password}
									onKeyDown={onKeyDown}
									onChange={(e) =>
										setPayload((prev) => {
											return {
												...prev,
												password: e.target.value
											}
										})
									}
									type='password'
									className='form-control'
									id='password'
									placeholder=''
									name='password'
								/>
							</div>
							<div className='form-group'>
								<button
									type='submit'
									name='wp-submit-login'
									className='btn btn-submit'
									onClick={handleLogin}>
									Đăng nhập
								</button>
							</div>
							<div className='form-group clearfix'>
								<Link href='#'>Bạn quên mật khẩu?</Link>
								<Link style={{ float: 'right' }} href='/register'>
									Tạo tài khoản mới
								</Link>
							</div>
							<input type='hidden' name='redirect' value='https://phongtro123.com/' />
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
LoginPage.Layout = AuthLayout

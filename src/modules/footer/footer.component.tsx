import Link from 'next/link'
import { footerResources } from './resources'

export default function FooterComponent() {
	return (
		<footer id='page-footer'>
			<div className='page-footer-content'>
				<div className='inner'>
					<div className='bottom-links clearfix'>
						{footerResources.listsCategory.map((item: any, index: number) => (
							<div className='bottom-links-col js-footer-sublink' key={index}>
								<div className='bottom-links-col-header'>
									<Link className='links-col-title' href='' title='Cho thuê phòng trọ, nhà trọ'>
										{item.header}
									</Link>
									<span className='btn-show-sublink js-btn-show-sublink'></span>
								</div>
								<ul>
									{item.list.map((ele: any, index: number) => (
										<li key={index}>
											<Link href='#' title='Cho thuê phòng trọ, nhà trọ tại Tp.HCM'>
												{ele.value}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className='footer-row clearfix'>
						<div className='footer-col first'>
							<Link className='footer-logo' href='/'>
								Thuê phòng trọ
							</Link>
							<p style={{ lineHeight: 1.3 }}>
								Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng
								trọ.
							</p>
						</div>
						<div className='footer-col'>
							<span className='footer-col-title'>Về PHONGTRO123.COM</span>
							<ul className='footer-menu'>
								<li>
									<Link href='/'>Trang chủ</Link>
								</li>
								<li>
									<Link rel='nofollow' href=''>
										Giới thiệu
									</Link>
								</li>
								<li>
									<Link rel='nofollow' href=''>
										Blog
									</Link>
								</li>
								<li>
									<Link rel='nofollow' href=''>
										Quy chế hoạt động
									</Link>
								</li>
								<li>
									<Link rel='nofollow' href=''>
										Quy định sử dụng
									</Link>
								</li>
								<li>
									<Link rel='nofollow' href=''>
										Chính sách bảo mật
									</Link>
								</li>
								<li>
									<Link rel='' href='/'>
										Liên hệ
									</Link>
								</li>
							</ul>
						</div>
						<div className='footer-col'>
							<span className='footer-col-title'>Hỗ trợ khách hàng</span>
							<ul className='footer-menu'>
								<li>
									<Link rel='nofollow' href=''>
										Câu hỏi thường gặp
									</Link>
								</li>
								<li>
									<Link rel='nofollow' href=''>
										Hướng dẫn đăng tin
									</Link>
								</li>
								<li>
									<Link rel='nofollow' href=''>
										Bảng giá dịch vụ
									</Link>
								</li>
								<li>
									<Link rel='nofollow' href=''>
										Quy định đăng tin
									</Link>
								</li>
								<li>
									<Link rel='nofollow' href=''>
										Giải quyết khiếu nại
									</Link>
								</li>
							</ul>
						</div>
						<div className='footer-col'>
							<span className='footer-col-title'>Liên hệ với chúng tôi</span>
							<div className='social-links'>
								<Link className='social-fb' rel='nofollow' target='_blank' href='#'>
									<i></i>
								</Link>
								<Link className='social-youtube' rel='nofollow' target='_blank' href='#'>
									<i></i>
								</Link>
								<Link className='social-zalo' rel='nofollow' target='_blank' href='#'>
									<i></i>
								</Link>
								<Link className='social-twitter' rel='nofollow' target='_blank' href='#'>
									<i></i>
								</Link>
							</div>
							<br />
							<span className='footer-col-title'>Phương thức thanh toán</span>
							<div className='clearfix'>
								<span className='payment_icon icon_visa'></span>
								<span className='payment_icon icon_mastercard'></span>
								<span className='payment_icon icon_jcb'></span>
								<span className='payment_icon icon_internet_banking'></span>
								<span className='payment_icon icon_momo'></span>
								<span className='payment_icon icon_tienmat'></span>
							</div>
						</div>
					</div>
					{/* other */}
					<div className='other-brands margin-top-15 d-flex align-items-center clearfix'>
						<span className='margin-right-20'>Cùng hệ thống:</span>
						<Link href='#' target='_blank' rel='nofollow'>
							<img width='140' height='25' src='https://phongtro123.com/images/logo-bds123.svg' />
						</Link>
						<Link href='#' target='_blank' rel='nofollow'>
							<img width='150' height='25' src='https://phongtro123.com/images/logo-chothuenha.svg' />
						</Link>
						<Link href='#' target='_blank' rel='nofollow'>
							<img width='150' height='25' src='https://phongtro123.com/images/logo-thuecanho.svg' />
						</Link>
						<Link href='#' target='_blank' rel='nofollow'>
							<img width='140' height='25' src='https://phongtro123.com/images/logo-phongtro.svg' />
						</Link>
					</div>
					{/* company */}
					<div className='footer-company'>
						<p className='company_name'>
							<strong>{footerResources.subTitle}</strong>
						</p>
						<p>
							<strong>{footerResources.des1}</strong>
						</p>
						<p>{footerResources.des2}</p>
						<p>{footerResources.des3}</p>
						<p>{footerResources.des4}</p>
						<p>{footerResources.des5}</p>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
							<Link
								className='icon-dkbct'
								style={{ display: 'inline-block', margin: '0 5px' }}
								rel='nofollow'
								target='_blank'
								href='#'></Link>
							<Link
								rel='nofollow'
								style={{ display: 'inline-block', margin: '0 5px' }}
								target='_blank'
								href='#'
								title='DMCA.com Protection Status'
								className='dmca-badge'>
								<img
									style={{ width: '100px', height: '50px' }}
									src='https://images.dmca.com/Badges/dmca-badge-w250-2x1-04.png?ID=c20c5527-4840-484e-adc5-37179174f55b'
									alt='DMCA.com Protection Status'
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

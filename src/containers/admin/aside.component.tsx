import Link from 'next/link'
import menuManage from '../../utils/menuManage'

export default function AdminAsideComponent({ dataUser }) {
	return (
		<nav className='col-lg-2 d-none d-lg-block bg-light sidebar'>
			<div className='user_info'>
				<Link href='#' className='clearfix'>
					<div className='user_avatar'>
						<img src={dataUser?.avatar} alt='' />
					</div>
					<div className='user_meta'>
						<div className='inner'>
							<div className='user_name'>{dataUser?.name}</div>
							<div className='user_verify mt-2' style={{ color: '#555', fontSize: '0.9rem' }}>
								{dataUser?.phone}
							</div>
						</div>
					</div>
				</Link>
				<ul>
					<li style={{ marginTop: '10px' }}>
						<span>Mã thành viên:</span> <span style={{ fontWeight: '700' }}> 128152</span>
					</li>
					<li style={{ marginTop: '10px' }}>
						<span>TK Chính:</span> <span style={{ fontWeight: '700' }}> 0 đ</span>
					</li>
				</ul>
				<div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
					<Link
						className='btn btn-warning btn-sm'
						href='#'
						style={{
							color: '#212529',
							backgroundColor: '#ffc107',
							borderColor: '#ffc107'
						}}>
						Nạp tiền
					</Link>
					<Link
						className='btn btn-danger btn-sm'
						href='#'
						style={{
							color: '#fff',
							backgroundColor: '#dc3545',
							borderColor: '#dc3545'
						}}>
						Đăng tin
					</Link>
				</div>
			</div>
			<ul className='nav nav-sidebar'>
				{menuManage?.map((item: any, index: number) => (
					<li className='nav-item' key={index}>
						<Link className='nav-link ' href={item.path}>
							{item.icon}
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

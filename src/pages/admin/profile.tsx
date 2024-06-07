import Link from 'next/link'

import { ProfileComponent } from '../../containers/admin'
import { AdminLayout } from '../../layouts/admin'
import { SupportComponent } from '../../modules/support'
export default function ProfilePage() {
	return (
		<main role='main' className='ml-sm-auto col-lg-10' style={{ background: 'white' }}>
			<nav aria-label='breadcrumb'>
				<ol className='breadcrumb'>
					<li className='breadcrumb-item'>
						<Link href='/'>Phongtro123.com</Link>
					</li>
					<li className='breadcrumb-item'>
						<Link href='/admin'>Quản lý</Link>
					</li>
					<li className='breadcrumb-item active' aria-current='page'>
						Cập nhật thông tin cá nhân
					</li>
				</ol>
			</nav>
			<ProfileComponent />
			<SupportComponent />
		</main>
	)
}
ProfilePage.Layout = AdminLayout

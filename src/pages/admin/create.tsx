import Link from 'next/link'

import { CreatePostComponent } from '../../containers/admin'
import { SupportComponent } from '../../components'
import { AdminLayout } from '../../layouts/admin'

export default function CreatePage() {
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
						Đăng tin mới
					</li>
				</ol>
			</nav>
			<div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom'>
				<h1 className='h1'>Đăng tin mới</h1>
			</div>
			<CreatePostComponent />
			<SupportComponent />
		</main>
	)
}

CreatePage.Layout = AdminLayout

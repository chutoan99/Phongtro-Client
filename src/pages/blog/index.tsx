import { FooterComponent } from '../../components'
import { NavBarMenuComponent } from '../../containers/public'
import HeaderComponent from '../../containers/public/header.component'
import { DefaultLayout } from '../../layouts/default'

export default function BlogPage() {
	return (
		<div className='w-[100vw]  bg-[#f5f5f5]'>
			<HeaderComponent />
			<NavBarMenuComponent />
			<FooterComponent />
		</div>
	)
}
BlogPage.Layout = DefaultLayout

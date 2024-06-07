import { FooterComponent } from '../../components'
import { NavBarMenuComponent } from '../../containers/public'
import HeaderComponent from '../../containers/public/header.component'

export default function DefaultLayout({ children }) {
	return (
		<div className='w-[100vw]  bg-[#f5f5f5]'>
			<HeaderComponent />
			<NavBarMenuComponent />
			{children}
			<FooterComponent />
		</div>
	)
}

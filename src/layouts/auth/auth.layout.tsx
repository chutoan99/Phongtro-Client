import { NavBarMenuComponent } from '../../containers/public'
import HeaderComponent from '../../containers/public/header.component'

export default function AuthLayout({ children }) {
	return (
		<div id='webpage'>
			<HeaderComponent />
			<NavBarMenuComponent />
			{children}
		</div>
	)
}

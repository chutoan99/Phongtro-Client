import CategoryComponent from '../../modules/category/category.component'
import HeaderComponent from '../../modules/header/header.component'

export default function AuthLayout({ children }) {
	return (
		<div id='webpage'>
			<HeaderComponent />
			<CategoryComponent />
			{children}
		</div>
	)
}

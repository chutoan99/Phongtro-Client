import CategoryComponent from '../../modules/category/category.component'
import { FooterComponent } from '../../modules/footer'
import HeaderComponent from '../../modules/header/header.component'

export default function DefaultLayout({ children }) {
	return (
		<div className='w-[100vw]  bg-[#f5f5f5]'>
			<HeaderComponent />
			<CategoryComponent />
			{children}
			<FooterComponent />
		</div>
	)
}

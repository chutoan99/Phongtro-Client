import Link from 'next/link'
import { memo } from 'react'
import { useRouter } from 'next/router'
import { useQueryCategories } from '../../modules/category/hooks/category.hook'
import { ICategoryModel } from '../../modules/category/interfaces'

const NavBarMenuComponent = () => {
	const router = useRouter()
	const { pathname } = router
	const routeSegment = pathname.split('/')[1]
	const { data: dataCategories, isLoading } = useQueryCategories()

	return (
		<nav id='navbar-menu' className=''>
			<ul id='menu-main-menu' className='container-menu clearfix level-1'>
				<li
					className={`${
						!routeSegment ? 'navbar_item clearfix active current-menu-item' : 'navbar_item clearfix'
					}`}>
					<Link href='/'>Trang chủ</Link>
				</li>
				{!isLoading && (
					<>
						{dataCategories?.map((item: ICategoryModel, index: number) => {
							return (
								<li
									key={index}
									className={`${
										item?.path === routeSegment
											? 'navbar_item clearfix active current-menu-item'
											: 'navbar_item clearfix'
									}`}>
									<Link href={`./${item?.path}`}>{item.value}</Link>
								</li>
							)
						})}
					</>
				)}
			</ul>
		</nav>
	)
}

export default memo(NavBarMenuComponent)

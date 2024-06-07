import React from 'react'
import Link from 'next/link'

import CategoryComponent from '../../modules/category/category.component'
import AsideNewPostComponent from '../../modules/aside/newPost/new-post.component'
import HeaderComponent from '../../modules/header/header.component'
import { AuthorComponent } from '../../modules/author'
import { AsideAcreageComponent, AsideNewHotComponent, AsideSubLinkComponent } from '../../modules/aside'
import { WhyUsComponent } from '../../modules/whyUs'
import { SupportComponent } from '../../modules/support'
import { FooterComponent } from '../../modules/footer'

export default function DetailLayout({ children }) {
	return (
		<div className='webpage'>
			<HeaderComponent />
			<CategoryComponent />
			<main id='man'>
				<div className='container clearfix'>
					<div id='breadcrumb'>
						<ol className='clearfix'>
							<li className='first link'>
								<Link href='#' title='Cho thuê phòng trọ'>
									<span>Cho thuê phòng trọ</span>
								</Link>
							</li>
							<li className='link link'>
								<Link href='#' title='Cho thuê phòng trọ Hồ Chí Minh'>
									<span>Hồ Chí Minh</span>
								</Link>
							</li>
							<li className='link link'>
								<Link href='#' title='Cho thuê phòng trọ Quận Tân Phú'>
									<span>Quận Tân Phú</span>
								</Link>
							</li>
							<li className='link last'>
								<Link href='#' title='Cho thuê phòng trọ Phường Sơn Kỳ'>
									<span>Phường Sơn Kỳ</span>
								</Link>
							</li>
						</ol>
					</div>
					{children}
					<aside id='aside'>
						<AuthorComponent />
						<AsideNewPostComponent />
						<AsideNewHotComponent />
						<AsideAcreageComponent />
						<AsideSubLinkComponent />
					</aside>
				</div>
				<WhyUsComponent />
				<SupportComponent />
			</main>
			<FooterComponent />
		</div>
	)
}

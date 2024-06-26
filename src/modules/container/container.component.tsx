import Link from 'next/link'
import { useEffect, useState, memo } from 'react'

import SearchComponent from '../modelSearch/search.component'
import {
	AsideAreaComponent,
	AsideDirectoryRentalComponent,
	AsideNewNewsComponent,
	AsidePriceComponent,
	AsideSubLinkComponent
} from '../aside'
import { WhyUsComponent } from '../whyUs'
import { SupportComponent } from '../support'
import { InputPost, PostModel } from '../post/interfaces'
import { useQueryPosts, useQuerySearchPosts } from '../post/hooks'
import PostComponent from '../post/posts.component'
import PaginationComponent from '../pagination/pagination.component'
import AsideNewPostComponent from '../aside/newPost/new-post.component'
import { locationCityResources } from './resources'

interface NavBar {
	categoryCode: string
}

const ContainerComponent = ({ categoryCode }: NavBar) => {
	const [totalPage, setTotalPage] = useState(0)
	const [data, setData] = useState<PostModel[] | []>([])
	const [payload, setPayload] = useState<InputPost>({
		pageSize: 15,
		pageNumber: 1,
		orderBy: '',
		direction: '',
		title: '',
		start: '',
		address: '',
		categoryCode: categoryCode,
		provinceCode: '',
		areaNumber: [],
		priceNumber: []
	})

	const { data: dataPost, isLoading } = useQueryPosts(payload)
	const { data: dataSearch, refetch: onRefetch } = useQuerySearchPosts(payload)
	useEffect(() => {
		if (!dataPost) return
		setData(dataPost.response)
		setTotalPage(dataPost?.totalPage)
	}, [dataPost])
	const onSearch = () => {
		setTotalPage(dataSearch.totalPage)
		setData(dataSearch.response)
		onRefetch()
	}

	return (
		<main id='main'>
			<SearchComponent setPayload={setPayload} onSearch={onSearch} />
			<section className='section section-top-location'>
				<div className='location-city clearfix'>
					{locationCityResources.map((ele: any, index: number) => (
						<Link key={index} className={ele.class} href='' title={ele.title}>
							<div className='location-bg'></div>
							<span className='location-cat'>
								<span className='location-name'>{ele.des}</span>
							</span>
						</Link>
					))}
				</div>
			</section>
			<div className='container clearfix'>
				<div id='left-col'>
					<section className='section section-post-listing'>
						<div className='section-header'>
							<span className='section-title'>Danh sách tin đăng</span>
						</div>
						<div className='post-sort'>
							<span>Sắp xếp: </span>
							<Link className='active ' href='#'>
								Mặc định
							</Link>
							<Link className='disabled-button' href='#'>
								Mới nhất
							</Link>
							<Link className='disabled-button' href='#'>
								Có video
							</Link>
						</div>
						<ul className='post-listing clearfix'>
							{isLoading ? <span className='loader'></span> : <PostComponent data={data} />}
						</ul>
					</section>
					<div className='flex items-center justify-center'>
						<PaginationComponent setPageNumber={setPayload} totalPage={totalPage} />
					</div>
				</div>
				<div id='aside'>
					<AsideDirectoryRentalComponent />
					<AsidePriceComponent />
					<AsideAreaComponent />
					<AsideNewPostComponent />
					<AsideNewNewsComponent />
					<AsideSubLinkComponent />
				</div>
			</div>
			<WhyUsComponent />
			<SupportComponent />
		</main>
	)
}
export default memo(ContainerComponent)

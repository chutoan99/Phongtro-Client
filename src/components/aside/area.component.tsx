import Link from 'next/link'
import { IArea } from '../../modules/area/interfaces'
import { useQueryAreas } from '../../modules/area/hooks'

export default function AsideAreaComponent() {
	const { data, isLoading } = useQueryAreas()
	return (
		<section className='section section-sublink'>
			<div className='section-header'>
				<span className='section-title'>Xem theo diện tích</span>
			</div>
			{!isLoading ? (
				<ul className='list-links price clearfix'>
					{data?.map((ele: IArea, index: number) => (
						<li key={index}>
							<Link href='#' prefetch={false}>
								{ele?.value}
							</Link>
						</li>
					))}
				</ul>
			) : (
				<span className='loader'></span>
			)}
		</section>
	)
}

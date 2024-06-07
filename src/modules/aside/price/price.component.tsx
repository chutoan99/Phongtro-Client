import Link from 'next/link'
import { IPriceModel } from './interfaces'
import { useQueryPrices } from './hooks'

export default function AsidePriceComponent() {
	const { data, isLoading } = useQueryPrices()
	return (
		<section className='section section-sublink'>
			<div className='section-header'>
				<span className='section-title'>Xem theo giá</span>
			</div>
			{!isLoading ? (
				<ul className='list-links price clearfix'>
					{data?.map((ele: IPriceModel, index: number) => (
						<li key={index}>
							<Link prefetch={false} href='#'>
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

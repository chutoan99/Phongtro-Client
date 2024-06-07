import Link from 'next/link'
import { directoryRentalResources } from './resources'

export default function AsideDirectoryRentalComponent() {
	return (
		<section className='section section-sublink'>
			<div className='section-header'>
				<span className='section-title'>{directoryRentalResources.header}</span>
			</div>
			<ul className='list-links clearfix'>
				{directoryRentalResources?.lists.map((ele: any, index: number) => (
					<li key={index}>
						<h2>
							<Link href='#' title='Cho thuê phòng trọ' prefetch={false}>
								{ele.content}
							</Link>
						</h2>
						<span className='count'>({ele.amount})</span>
					</li>
				))}
			</ul>
		</section>
	)
}

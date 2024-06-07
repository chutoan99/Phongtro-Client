import Link from 'next/link'
import { newNewsResources } from './resources'

export default function AsideNewNewsComponent() {
	return (
		<section className='section section-sublink'>
			<div className='section-header'>
				<span className='section-title'>{newNewsResources.header}</span>
			</div>
			<ul className='list-links clearfix'>
				{newNewsResources?.lists.map((ele: any, index: number) => (
					<li key={index}>
						<Link href='#' title={ele} prefetch={false}>
							{ele}
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}

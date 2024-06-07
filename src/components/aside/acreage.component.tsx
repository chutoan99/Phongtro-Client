import Link from 'next/link'
import { AreaHcm } from '../../utils/area'

export default function AsideAcreageComponent() {
	return (
		<section className='section'>
			<div className='section-header'>
				<h2 className='section-title'>{AreaHcm.header}</h2>
			</div>
			<ul className='list-links clearfix'>
				{AreaHcm?.lists?.map((ele: any, index: number) => (
					<li key={index}>
						<Link className='' title={ele.value} href='#' prefetch={false}>
							{ele.value}
						</Link>
						<span className='count'>({ele.total})</span>
					</li>
				))}
			</ul>
		</section>
	)
}

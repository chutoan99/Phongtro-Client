import Link from 'next/link'
import { AreaResources } from './resources'

export default function AsideAcreageComponent() {
	return (
		<section className='section'>
			<div className='section-header'>
				<h2 className='section-title'>{AreaResources.header}</h2>
			</div>
			<ul className='list-links clearfix'>
				{AreaResources?.lists?.map((ele: any, index: number) => (
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

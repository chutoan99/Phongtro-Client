import Link from 'next/link'
import { subLinkResources } from './resources'

export default function AsideSubLinkComponent() {
	return (
		<section className='section section-sublink'>
			<div className='section-header'>
				<span className='section-title'>{subLinkResources?.header}</span>
			</div>
			<ul className='list-links clearfix'>
				{subLinkResources?.lists?.map((ele: any, index: number) => (
					<li key={index}>
						<Link href='#' title='Mẫu hợp đồng cho thuê phòng trọ'>
							{ele}
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}

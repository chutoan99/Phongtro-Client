import Link from 'next/link'
import { newPost } from '../../utils/constant'

export default function AsideNewNewsComponent() {
	return (
		<section className='section section-sublink'>
			<div className='section-header'>
				<span className='section-title'>{newPost.header}</span>
			</div>
			<ul className='list-links clearfix'>
				{newPost?.lists.map((ele: any, index: number) => (
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

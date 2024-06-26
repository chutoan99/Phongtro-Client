import Link from 'next/link'
import { renderStart } from '../../utils/Commom/renderStart'
import { whyUsResources } from './resources'

export default function WhyUsComponent() {
	return (
		<section className='section section-whyus'>
			<div className='section-content'>
				<h4 className='section-title'> {whyUsResources.header}</h4>
				<p>
					{whyUsResources.title}
					<Link href='/' title='Cho thuê phòng trọ'>
						<strong>cho thuê phòng trọ</strong>
					</Link>
					,<strong>nhà trọ</strong>,{' '}
					<Link href='/' title='Cho thuê nhà nguyên căn'>
						<strong>thuê nhà nguyên căn</strong>
					</Link>
					,
					<Link href='/' title='Cho thuê căn hộ'>
						<strong>cho thuê căn hộ</strong>
					</Link>
					,
					<Link href='/' title='Tìm người ở ghép'>
						<strong>tìm người ở ghép</strong>
					</Link>
					,
					<Link href='/' title='Cho thuê mặt bằng'>
						<strong>cho thuê mặt bằng</strong>
					</Link>
					...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách hàng hơn, do đó giao dịch
					nhanh hơn, tiết kiệm chi phí hơn
				</p>
				<div className='whyus-countup clearfix'>
					{whyUsResources.lists.map((item: any, index: number) => (
						<div className='whyus-countup-item' key={index}>
							<span className='whyus-countup-item-number'>{item.content}</span>
							<span className='whyus-countup-item-text'>{item.subContent}</span>
						</div>
					))}
				</div>
				<br />
				<h5 className='section-title'>{whyUsResources.subTitle}</h5>

				<div className='flex justify-center text-[1.5rem] mb-[20px] gap-[20px]'>
					{renderStart(5).map((start, index) => {
						return <span key={index}>{start}</span>
					})}
				</div>

				<div
					className='clearfix'
					style={{
						display: 'flex',
						justifyContent: 'center',
						margin: '10px 0'
					}}>
					<span className='star star-5'></span>
				</div>
				<p className='testimonial'>
					{whyUsResources.des} <br />
					<span
						style={{
							fontStyle: 'normal',
							display: 'block',
							marginTop: '10px'
						}}>
						{whyUsResources.des2}
					</span>
				</p>
				<br />
				<h6 className='section-title'>{whyUsResources.des3}</h6>
				<p>{whyUsResources.des4}</p>
				<Link className='btn red' style={{ padding: '10px 30px' }} rel='nofollow' href='#'>
					Đăng tin ngay
				</Link>
			</div>
		</section>
	)
}

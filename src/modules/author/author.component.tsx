import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQueryPostId } from '../postDetail/hooks'

export default function AuthorComponent() {
	const router = useRouter()
	const { id } = router.query

	const { data } = useQueryPostId(id)
	return (
		<div className='author-aside'>
			<figure className='author-avatar'>
				<img src={data?.user?.avatar} />
			</figure>
			<span className='author-name'>{data?.user?.name}</span>
			<div style={{ minHeight: '16px', marginBottom: '10px' }}>
				<div className='author-online-status online'>
					<i></i>
					<span>Đang hoạt động</span>
				</div>
			</div>
			<Link
				className='btn author-phone'
				rel='nofollow'
				href='#'
				// href={`tel:${item?.phone}`}
			>
				<i></i> {data?.user?.phone}
			</Link>
			<Link
				className='btn author-zalo'
				target='_blank'
				rel='nofollow'
				href='#'
				// href={item?.phone}
			>
				<i></i> Nhắn Zalo
			</Link>
			<span className='btn post-save js-btn-save' data-post-id='135699'>
				<i></i> Yêu thích
			</span>
		</div>
	)
}

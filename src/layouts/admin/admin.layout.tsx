import { AsideComponent, NavComponent } from '../../containers/admin'
import useAuth from '../../hooks/useAuth.hook'
import { useQueryUserId } from '../../modules/user/hooks/user.hook'

export default function AdminLayout({ children }) {
	const { dataUser } = useAuth()
	const { data, isLoading } = useQueryUserId(dataUser?.id)

	return (
		<div className='desktop dashboard loaded ready'>
			<div id='webpage' style={{ position: 'relative' }}>
				<NavComponent />
				<div className='container-fluid' style={{ position: 'absolute', top: '45px' }}>
					{!isLoading ? (
						<div className='row'>
							<div className='d-flex'>
								<AsideComponent dataUser={data} />
								{children}
							</div>
						</div>
					) : (
						<span className='loader'></span>
					)}
				</div>
			</div>
		</div>
	)
}

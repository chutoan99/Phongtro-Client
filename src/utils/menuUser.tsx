
export const menuManage2 = [
	{
		id: 1,
		text: 'Quản lý tin đăng',
		path: '/admin/manager',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				style={{ marginRight: '10px' }}
				className='feather feather-file-text mr-3'>
				<path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
				<polyline points='14 2 14 8 20 8'></polyline>
				<line x1='16' y1='13' x2='8' y2='13'></line>
				<line x1='16' y1='17' x2='8' y2='17'></line>
				<polyline points='10 9 9 9 8 9'></polyline>
			</svg>
		)
	},
	{
		id: 2,
		text: 'Nạp tiền vào tài khoản ',
		path: '#',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				style={{ marginRight: '10px' }}
				stroke='currentColor'
				className='feather feather-dollar-sign mr-2'>
				<line x1='12' y1='1' x2='12' y2='23'></line>
				<path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'></path>
			</svg>
		)
	},
	{
		id: 3,
		text: 'Lịch sử nạp tiền',
		path: '#',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				style={{ marginRight: '10px' }}
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				className='feather feather-clock mr-2'>
				<circle cx='12' cy='12' r='10'></circle>
				<polyline points='12 6 12 12 16 14'></polyline>
			</svg>
		)
	},
	{
		id: 4,
		text: 'Lịch sử thanh toán',
		path: '#',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				style={{ marginRight: '10px' }}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				className='feather feather-calendar mr-2'>
				<rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
				<line x1='16' y1='2' x2='16' y2='6'></line>
				<line x1='8' y1='2' x2='8' y2='6'></line>
				<line x1='3' y1='10' x2='21' y2='10'></line>
			</svg>
		)
	},
	{
		id: 5,
		text: 'Sửa thông tin cá nhân',
		path: '#',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				style={{ marginRight: '10px' }}
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				className='feather feather-user mr-2'>
				<path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
				<circle cx='12' cy='7' r='4'></circle>
			</svg>
		)
	},
	{
		id: 6,
		text: 'Đổi số điện thoại',
		path: '#',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				style={{ marginRight: '10px' }}
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				className='feather feather-phone mr-2'>
				<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
			</svg>
		)
	},
	{
		id: 7,
		text: 'Đổi mật khẩu',
		path: '#',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				style={{ marginRight: '10px' }}
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				className='feather feather-lock mr-2'>
				<rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect>
				<path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
			</svg>
		)
	},
	{
		id: 8,
		text: 'Liên hệ',
		path: '#',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				style={{ marginRight: '10px' }}
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				className='feather feather-log-out mr-2'>
				<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
				<polyline points='16 17 21 12 16 7'></polyline>
				<line x1='21' y1='12' x2='9' y2='12'></line>
			</svg>
		)
	},
	{
		id: 8,
		text: 'Đăng xuất',
		path: '#',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				style={{ marginRight: '10px' }}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				className='feather feather-log-out mr-2'>
				<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
				<polyline points='16 17 21 12 16 7'></polyline>
				<line x1='21' y1='12' x2='9' y2='12'></line>
			</svg>
		)
	}
]
export const note = [
	`Nội dung phải viết bằng tiếng Việt có dấu`,
	`Tiêu đề tin không dài quá 100 kí tự`,
	`Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.`,
	`Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới đúng vị trí của tin rao.`,
	`Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!`
]

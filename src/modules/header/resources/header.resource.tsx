export const menuManageResources = [
	{
		id: 1,
		text: 'Quản lý tin đăng',
		path: '/admin/manager',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='feather feather-file-text'>
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
		text: 'Sửa thông tin cá nhân',
		path: '/admin/profile',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='feather feather-edit'>
				<path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
				<path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
			</svg>
		)
	},
	{
		id: 3,
		text: 'Nạp tiền vào tài khoản',
		path: '',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='feather feather-dollar-sign'>
				<line x1='12' y1='1' x2='12' y2='23'></line>
				<path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'></path>
			</svg>
		)
	},
	{
		id: 4,
		text: 'Lịch sử nạp tiền',
		path: '',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='feather feather-clock'>
				<circle cx='12' cy='12' r='10'></circle>
				<polyline points='12 6 12 12 16 14'></polyline>
			</svg>
		)
	},
	{
		id: 5,
		text: 'Lịch sử thanh toán',
		path: '',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='feather feather-calendar'>
				<rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
				<line x1='16' y1='2' x2='16' y2='6'></line>
				<line x1='8' y1='2' x2='8' y2='6'></line>
				<line x1='3' y1='10' x2='21' y2='10'></line>
			</svg>
		)
	},
	{
		id: 6,
		text: 'Bảng giá dịch vụ',
		path: '',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='feather feather-clipboard'>
				<path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'></path>
				<rect x='8' y='2' width='8' height='4' rx='1' ry='1'></rect>
			</svg>
		)
	},
	{
		id: 7,
		text: 'Liên hệ',
		path: '',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='feather feather-message-circle'>
				<path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'></path>
			</svg>
		)
	},
	{
		id: 8,
		text: 'Thoát',
		path: '',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='feather feather-log-out'>
				<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
				<polyline points='16 17 21 12 16 7'></polyline>
				<line x1='21' y1='12' x2='9' y2='12'></line>
			</svg>
		)
	}
]

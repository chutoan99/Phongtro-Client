export default function UserComponent({ data }) {
	return (
		<>
			{data?.map((item, index: number) => (
				<div className='w-full bg-[#febb02] rounded-[10px] p-[15px] grid gap-[10px]' key={index}>
					<div className='flex justify-center'>
						<div className='w-[80px] h-[80px]'>
							<img
								className='w-full h-full rounded-[50%]'
								alt='avartar'
								src='https://phongtro123.com/images/default-user.png'
							/>
						</div>
					</div>
					<div className='text-[1.5rem]  uppercase text-center'>{item.user.name}</div>
					<div className='text-[1rem] text-[#333] text-center'>Đang hoạt động</div>
					<button className='bg-[#16c784] h-[40px] text-[1.2rem] uppercase text-white rounded-[5px] items-center flex justify-center gap-[5px]'>
						<i className='fa-solid fa-phone text-[1rem]'></i> {item.user.phone}
					</button>
					<button
						className=' h-[40px] text-[1rem] flex items-center justify-center gap-[5px] rounded-[5px] bg-white'
						style={{ border: '1px solid #000' }}>
						<svg
							className='text-[1.6rem]'
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							preserveAspectRatio='xMidYMid meet'
							viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.273 3.273 0 0 1-1.938.632a3.284 3.284 0 0 1-3.284-3.282a3.284 3.284 0 0 1 3.284-3.282a3.273 3.273 0 0 1 1.937.632h.001zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a7.714 7.714 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.857 9.23H.192V7.79H6.92zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354h-.961zM20.693 9.6a3.306 3.306 0 1 1 .002 6.612a3.306 3.306 0 0 1-.002-6.612zm-10.14 5.253a1.932 1.932 0 1 0 0-3.863a1.932 1.932 0 0 0 0 3.863zm10.14-.003a1.945 1.945 0 1 0 0-3.89a1.945 1.945 0 0 0 0 3.89z'
							/>
						</svg>
						<span className=''>Nhắn zalo</span> {item.user.zalo}
					</button>
					<button
						className='h-[40px] text-[1rem] flex items-center justify-center gap-[5px] rounded-[5px] bg-white'
						style={{ border: '1px solid #000' }}>
						<i className='fa-solid fa-heart'></i>
						<span>Yêu Thích</span>
					</button>
				</div>
			))}
		</>
	)
}

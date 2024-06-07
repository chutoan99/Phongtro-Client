import { memo, useEffect, useState } from 'react'
import { convert100ToTarget, convertTo100, getNumbersPrice } from '../../../utils/Commom/fomarNumber'

function ModalPriceComponent({ items, modals, setOverPlay, setModals, handleSubmit, arrMinMax }) {
	let number = +15
	const [perSent1, setPerSent1] = useState(arrMinMax?.priceArr?.length > 0 ? arrMinMax?.priceArr[0] : 0)
	const [perSent2, setPerSent2] = useState(arrMinMax?.priceArr?.length > 0 ? arrMinMax?.priceArr[1] : 100)
	const [number1, setNumber1] = useState(0)
	const [number2, setNumber2] = useState(number)

	const handleClickMin = () => {
		setNumber1(0)
		setPerSent1(0)
	}
	const handleClickMax = () => {
		setNumber2(number)
		setPerSent2(100)
	}
	useEffect(() => {
		const activeTrackId = document.getElementById('track-active')
		if (perSent1 <= perSent2) {
			activeTrackId.style.left = `${perSent1}%`
			activeTrackId.style.right = `${100 - perSent2}%`
			setNumber1(convert100ToTarget(perSent1, 'price'))
			setNumber2(convert100ToTarget(perSent2, 'price'))
		} else {
			activeTrackId.style.left = `${perSent2}%`
			activeTrackId.style.right = `${100 - perSent1}%`
			setNumber1(convert100ToTarget(perSent2, 'price'))
			setNumber2(convert100ToTarget(perSent1, 'price'))
		}
	}, [perSent2, perSent1])
	// lấy vị trí click
	const handleClickStack = (e) => {
		const stackEl = document.getElementById('stack')
		const stackRect = stackEl.getBoundingClientRect()
		let perSent = Math.round((e.clientX - stackRect.left) * 100) / stackRect.width
		if (Math.abs(perSent - perSent1) <= Math.abs(perSent - perSent2)) {
			setPerSent1(perSent)
			setNumber1(convert100ToTarget(perSent, 'price'))
		} else {
			setPerSent2(perSent)
			setNumber2(convert100ToTarget(perSent, 'price'))
		}
	}
	const handleChangeRange = (value) => {
		let arrMaxMin
		arrMaxMin = getNumbersPrice(value)
		if (arrMaxMin.length === 1) {
			if (arrMaxMin[0] === 1) {
				setPerSent1(0)
				setPerSent2(convertTo100(1, 'price'))
			}
			if (arrMaxMin[0] === 20) {
				setPerSent1(0)
				setPerSent2(convertTo100(20, 'price'))
			}
			if (arrMaxMin[0] === number) {
				setPerSent1(100)
				setPerSent2(100)
			}
		} else {
			setPerSent1(convertTo100(arrMaxMin[0], 'price'))
			setPerSent2(convertTo100(arrMaxMin[1], 'price'))
		}
	}

	const handleBeforeSubmit = () => {
		let min = perSent1 <= perSent2 ? convert100ToTarget(perSent1, 'price') : convert100ToTarget(perSent2, 'price')
		let max = perSent1 <= perSent2 ? convert100ToTarget(perSent2, 'price') : convert100ToTarget(perSent1, 'price')
		handleSubmit(
			{
				[`${'price'}Number`]: [min, max],
				['price']: `Từ ${min} - ${max} ${'triệu'}`
			},
			{ [`${'price'}Arr`]: [perSent1, perSent2] }
		)
	}
	const onCLose = () => {
		setModals(false)
		setOverPlay(false)
	}
	return (
		<>
			{modals ? (
				<div className='filter-popup has-footer js-filter-popup js-filter-popup-price show'>
					<div className='filter-popup-header'>
						<span className='header-label'>CHỌN GIÁ</span>{' '}
						<div className='popup-close js-filter-popup-close' onClick={onCLose}>
							Đóng
						</div>
					</div>
					<div className='filter-popup-content'>
						<div className='bds-ranger'>
							<div
								style={{
									paddingTop: '3px',
									display: 'flex',
									margin: '0 48px',
									textAlign: 'center'
								}}>
								<p
									style={{
										width: '100%',
										color: '#ff6600',
										fontSize: '1.5rem',
										fontWeight: 'bold'
									}}>
									{perSent1 === 100 && perSent2 === 100
										? `Trên ${number2} ${'Triệu'}`
										: `Từ ${number1} - ${number2}  ${'Triệu'}`}
								</p>
							</div>
							<div style={{ margin: '0 48px' }}>
								<div className='input-slider-wrapper'>
									<div
										className='slider-track input-slider-track'
										onClick={handleClickStack}
										style={{
											backgroundColor: 'rgb(209 213 219 / 1',
											width: '100%'
										}}
										id='stack'></div>
									<div
										className='slider-track-active input-slider-track'
										id='track-active'
										style={{ backgroundColor: 'rgb(234 88 12 / 1' }}
										onClick={handleClickStack}></div>
									<input
										type='range'
										max='100'
										min='0'
										step='1'
										className='input-range'
										value={perSent1}
										onChange={(e) => setPerSent1(+e.target.value)}
									/>
									<input
										type='range'
										max='100'
										min='0'
										step='1'
										value={perSent2}
										onChange={(e) => setPerSent2(+e.target.value)}
										className='input-range'
									/>
								</div>
								<div
									style={{
										paddingTop: '23px',
										zIndex: 10,
										display: 'flex',
										justifyContent: 'center'
									}}>
									<span
										className='translate-x-2'
										style={{ fontSize: '15px' }}
										onClick={handleClickMin}>
										0
									</span>

									<span
										style={{ fontSize: '15px' }}
										className='translate-x-5'
										onClick={handleClickMax}>
										+15 triệu/đồng
									</span>
								</div>
								<div
									style={{
										marginTop: '40px',
										flexWrap: 'wrap',
										display: 'flex'
									}}>
									<ul className='custom-list-ranger'>
										{items?.map((item: any, index: number) => (
											<li className='' key={index} onClick={() => handleChangeRange(item.value)}>
												{item.value}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='filter-popup-footer'>
						<div className='filter-btn-bottom' onClick={handleBeforeSubmit}>
							Áp dụng
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}

export default memo(ModalPriceComponent)

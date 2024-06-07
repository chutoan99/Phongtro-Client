import Swal from 'sweetalert2'
import { useEffect, useState, memo } from 'react'
import useAuth from '../../hooks/useAuth.hook'
import { useQueryCategories } from '../../modules/category/hooks/category.hook'
import { getCodesPrice, getCodesArea } from '../../utils/Commom/getCodePrice'
import { useRouter } from 'next/router'
import { ICategoryModel } from '../../modules/category/interfaces'
import { InputCreatePost } from '../../modules/post/interfaces'
import { useMutationCreatePost } from '../../modules/post/hooks'
import {
	GetALLProvince,
	GetAllDistrictWithProvinceCode,
	GetAllWardWithDistrictCode,
	apiUploadImages
} from '../../modules/orher/services'
import { NoteComponent } from '.'
import { useQueryPrices } from '../../modules/aside/price/hooks'
import { useQueryAreas } from '../../modules/aside/area/hooks'
import { LoadingCustomComponent } from '../../modules/loading'

export default function AdminCreatePostComponent() {
	const requiredFieldsCreatePost = {
		title: 'Tiêu đề',
		description: 'nội dung mô tả',
		priceNumber: 'giá tiền',
		areaNumber: 'Diện tích'
	}
	

	// * INIT
	const router = useRouter()
	const { dataUser } = useAuth()
	const { data: dataPrices } = useQueryPrices()
	const { data: dataAreas } = useQueryAreas()
	const { data: dataCategories } = useQueryCategories()

	// * HANDLE ADDRESS
	const [province, setProvince] = useState([])
	const [district, setDistrict] = useState([])
	const [provinceCode, setProvinceCode] = useState()
	const [districtCode, setDistrictCode] = useState()
	const [ward, setWard] = useState([])
	const [wardCode, setWardCode] = useState()
	const [numberHouse, setNumberHouse] = useState('')
	const [addressDetail, setAddressDetail] = useState('')

	// * HANDLE PAYLOAD
	const [fileImages, setFileImages] = useState<any[]>([])
	const [imageUrls, setImageUrls] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [payLoad, setPayload] = useState<InputCreatePost>({
		areaNumber: 0,
		priceNumber: 0,
		priceCode: '',
		areaCode: '',
		categoryCode: '',
		title: '',
		images: [''],
		address: '',
		target: '',
		type: '',
		province: '',
		description: '',
		label: '',
		userid: '',
		start: 5
	})

	// * HANDLE API PROVINCE
	useEffect(() => {
		const fetchALLProvince = async () => {
			const response = await GetALLProvince()
			setProvince(response)
		}
		fetchALLProvince()
	}, [])

	useEffect(() => {
		const fetchDistrictWithProvinceCode = async () => {
			if (provinceCode) {
				const response = await GetAllDistrictWithProvinceCode(provinceCode)
				setDistrict(response)
			}
		}
		fetchDistrictWithProvinceCode()
	}, [provinceCode])

	useEffect(() => {
		const fetchAllWardWithDistrictCode = () => {
			if (districtCode) {
				GetAllWardWithDistrictCode(districtCode).then((item) => setWard(item))
			}
		}
		fetchAllWardWithDistrictCode()
	}, [districtCode])

	useEffect(() => {
		let provinceItem
		let districtItem
		let wardItem
		if (provinceCode) {
			provinceItem = province.find((item) => item.code === provinceCode)
		}
		if (districtCode) {
			districtItem = district.find((item) => item.code === districtCode)
		}
		if (wardCode) {
			wardItem = ward.find((item) => item.code === wardCode)
		}
		const address = [
			numberHouse,
			wardItem?.name_with_type,
			districtItem?.name_with_type,
			provinceItem?.name_with_type
		]
			.filter(Boolean)
			.join(',')
		setAddressDetail(address)
		setPayload((prev: InputCreatePost) => {
			return {
				...prev,
				address: address
			}
		})
	}, [provinceCode, districtCode, wardCode, numberHouse])

	// * HANDLE CREATE POST

	const mutateCreatePost = useMutationCreatePost()

	const onFileChange = (event: any) => {
		const files = event.target.files
		const maxSize = 10485760 // 10MB, in bytes
		if (files.length + imageUrls.length > 5) {
			Swal.fire('Oop!', 'Bạn chỉ được tải tối đa 5 ảnh"', 'error')
			event.target.value = ''
			return
		}
		const newImages: string[] = []
		const newFiles: any[] = []
		for (let i = 0; i < files?.length; i++) {
			const file = files[i]
			if (file.size > maxSize) {
				Swal.fire('Oop!', 'File size too large. Maximum is 10MB.', 'error')
				continue
			}
			const imageURL: string = URL.createObjectURL(file)
			newImages.push(imageURL)
			newFiles.push(file)
		}
		setImageUrls((prevImageUrls) => [...prevImageUrls, ...newImages])
		setFileImages((prev: any) => [...prev, ...newFiles])
	}

	const onRemoveFile = (index: number) => {
		const updatedImageUrls = [...imageUrls]
		updatedImageUrls.splice(index, 1)
		setImageUrls(updatedImageUrls)
	}

	const handleCreatePost = async () => {
		if (!numberHouse || !ward || !district || !province) {
			Swal.fire('Oop!', 'Vui lòng nhập "Địa chỉ chính xác"', 'error')
			return
		}
		const missingField = Object.keys(requiredFieldsCreatePost).find((field) => !payLoad[field])
		if (missingField) {
			Swal.fire('Oop!', `Vui lòng nhập "${requiredFieldsCreatePost[missingField]}"`, 'error')
			return
		}
		if (imageUrls.length === 0) {
			Swal.fire('Oop!', 'Vui lòng cập nhật hình ảnh cho bài đăng"', 'error')
			return
		}

		let images = []
		try {
			setIsLoading(true)
			const response = await apiUploadImages(fileImages)
			images = response
		} catch (error) {
			images = ['https://phongtro123.com/img/thumb_default.jpg']
		} finally {
			setIsLoading(false)
		}

		const type = payLoad.type || (dataCategories.length > 0 && dataCategories[0]?.code)

		const priceCodeArr = getCodesPrice(+payLoad.priceNumber, dataPrices, 1, 15)

		const areaCodeArr = getCodesArea(+payLoad.areaNumber, dataAreas, 0, 90)

		const foundCategoryItem =
			dataCategories.find((item) => item.code === type) ?? (dataCategories.length > 0 && dataCategories[0])
		const categoryCode = foundCategoryItem?.code

		const onPayload: InputCreatePost = {
			areaNumber: payLoad.areaNumber,
			priceNumber: payLoad?.priceNumber,
			priceCode: priceCodeArr[0]?.code,
			areaCode: areaCodeArr[0]?.code,
			categoryCode: categoryCode,
			title: payLoad.title,
			images: images,
			address: payLoad.address,
			target: payLoad.target || 'Nam',
			type: type,
			province: payLoad?.address?.split(',')[3]?.trim(),
			description: payLoad?.description,
			label: `${foundCategoryItem?.value}${payLoad.address?.split(',')[1]}`,
			userid: dataUser?.id,
			start: 5
		}

		setPayload(onPayload)
		onCreatePost(onPayload)
	}

	const onCreatePost = async (onPayload: InputCreatePost) => {
		console.log(onPayload, 'onPayload')
		try {
			setIsLoading(true)
			mutateCreatePost(onPayload)
			setTimeout(() => {
				router.push('/admin/manager')
			}, 2000)
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			{isLoading && <LoadingCustomComponent />}
			<div className='alert alert-danger mb-5' role='alert'>
				Nếu bạn đã từng đăng tin trên Phongtro123.com, hãy sử dụng chức năng ĐẨY TIN / GIA HẠN / NÂNG CẤP VIP
				trong mục QUẢN LÝ TIN ĐĂNG để làm mới, đẩy tin lên cao thay vì đăng tin mới. Tin đăng trùng nhau sẽ
				không được duyệt.
			</div>
			<div className='form-horizontal js-form-submit-data js-frm-manage-post' id='form_dangtin'>
				<div className='row'>
					<div className='col-md-8'>
						<div className='col-md-12'>
							<div className='col-md-12'>
								<h3>Địa chỉ cho thuê</h3>
							</div>
							<div className='mt-3 col-md-12'>
								<div className='row'>
									<div className='col-md-3'>
										<div className='form-group'>
											<label htmlFor='province_id' className='col-form-label'>
												Tỉnh/Thành phố
											</label>
											<select
												id='province_id'
												name='province_id'
												className='form-control js-select-tinhthanhpho '
												onChange={(e: any) => setProvinceCode(e.target.value)}>
												<option>-- Chọn Tỉnh/TP --</option>
												{province?.map((item) => (
													<option
														className='mt-[10px]'
														value={item?.code}
														key={item?._id}
														// onClick={fetchAllDistrictVietNam}
													>
														{item.name}
													</option>
												))}
											</select>
										</div>
									</div>
									<div className='col-md-3'>
										<div className='form-group'>
											<label className='col-form-label' htmlFor='district_id'>
												Quận/Huyện
											</label>
											<select
												id='province_id'
												name='province_id'
												className='form-control js-select-tinhthanhpho '
												onChange={(e: any) => setDistrictCode(e.target.value)}>
												<option>-- Quận/Huyện --</option>
												{district?.map((item) => (
													<option
														className='mt-[10px]'
														value={item?.code}
														key={item?._id}
														// onClick={fetchAllWardVietNam}
													>
														{item.name}
													</option>
												))}
											</select>
										</div>
									</div>
									<div className='col-md-3'>
										<div className='form-group'>
											<label className='col-form-label' htmlFor='phuongxa'>
												Phường/Xã
											</label>
											<select
												id='province_id'
												name='province_id'
												className='form-control js-select-tinhthanhpho '
												onChange={(e: any) => setWardCode(e.target.value)}>
												<option value=''>chọn phường xã</option>
												{ward?.map((item) => (
													<option className='mt-[10px]' value={item?.code} key={item?._id}>
														{item.name}
													</option>
												))}
											</select>
										</div>
									</div>
									<div className='col-md-3'>
										<div className='form-group'>
											<label htmlFor='post_title' className='col-form-label'>
												Số nhà
											</label>
											<input
												type='text'
												className='form-control js-title'
												name='tieu_de'
												id='post_title'
												onChange={(e) => setNumberHouse(e.target.value)}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className=''>
								<div className='col-md-12'>
									<div className='form-group'>
										<label htmlFor='street_number' className='col-form-label'>
											Địa chỉ chính xác
										</label>
										<input
											style={{ width: '100%' }}
											type='text'
											className='form-control'
											name='dia_chi'
											id='diachi'
											disabled
											value={addressDetail}
											placeholder='nhap so na'
										/>
									</div>
								</div>
								<div className='form-group mt-5'>
									<div className='col-md-12'>
										<h3>Thông tin mô tả</h3>
									</div>
								</div>
								<div className='col-md-12'>
									<div className='form-group row mt-3'>
										<label htmlFor='post_cat' className='col-md-12 col-form-label'>
											Loại chuyên mục
										</label>
										<div className='col-md-6'>
											<select
												className='form-control'
												id='post_cat'
												name='loai_chuyen_muc'
												data-msg-required='Chưa chọn loại chuyên mục'
												onChange={(e) =>
													setPayload((prev) => ({
														...prev,
														type: e.target.value
													}))
												}>
												<option value=''>-- Chọn loại chuyên mục --</option>
												{dataCategories?.map((ele: ICategoryModel, index: number) => (
													<option key={index} value={ele.value}>
														{ele.value}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
								<div className='col-md-12'>
									<div className='form-group row mt-3'>
										<label htmlFor='post_title' className='col-md-12 col-form-label'>
											Tiêu đề
										</label>
										<div className='col-md-12'>
											<input
												type='text'
												className='form-control js-title'
												onChange={(e: any) =>
													setPayload((prev) => ({
														...prev,
														title: e.target.value
													}))
												}
											/>
										</div>
									</div>
								</div>
								<div className='col-md-12'>
									<div className='form-group  mt-3'>
										<label htmlFor='post_content' className='col-md-12 col-form-label'>
											Nội dung mô tả
										</label>
										<div className='col-md-12'>
											<textarea
												className='form-control js-content'
												name='noi_dung'
												id='post_content'
												onChange={(e: any) =>
													setPayload((prev) => ({
														...prev,
														description: e.target.value
													}))
												}
												data-msg-required='Bạn chưa nhập nội dung'
												data-msg-minlength='Nội dung tối thiểu 100 kí tự'></textarea>
										</div>
									</div>
								</div>
								<div className='col-md-12'>
									<div className='form-group  mt-3'>
										<label htmlFor='phone' className='col-md-12 col-form-label'>
											Thông tin liên hệ
										</label>
										<div className='col-md-6'>
											<div className='input-group mb-3'>
												<input
													id='ten_lien_he'
													type='text'
													name='ten_lien_he'
													className='form-control'
													data-msg-required='Tên liên hệ'
													value='cu toan'
												/>
											</div>
										</div>
									</div>
								</div>

								<div className='col-md-12'>
									<div className='form-group  mt-3'>
										<label htmlFor='phone' className='col-md-12 col-form-label'>
											Điện thoại
										</label>
										<div className='col-md-6'>
											<div className='input-group mb-3'>
												<input
													id='phone'
													type='number'
													name='phone'
													className='form-control'
													data-msg-required='Số điện thoại'
													value='0349324722'
												/>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-12'>
									<div className='form-group  mt-3'>
										<label htmlFor='giachothue' className='col-md-12 col-form-label'>
											Giá cho thuê
										</label>
										<div className='col-md-6'>
											<div className='input-group'>
												<input
													id='giachothue'
													name='gia'
													type='text'
													className='form-control'
													data-msg-required='Bạn chưa nhập giá phòng'
													data-msg-min='Giá phòng chưa đúng'
													onChange={(e: any) =>
														setPayload((prev) => ({
															...prev,
															priceNumber: +e.target.value / Math.pow(10, 6)
														}))
													}
												/>
												<div className='input-group-append'>
													<span className='input-group-text'>đồng</span>
												</div>
											</div>
											<small className='form-text text-muted'>
												Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000
											</small>
										</div>
										<label
											htmlFor='text_giachothue'
											id='text_giachothue'
											className='col-sm-12 control-label js-number-text'
											style={{ color: 'red' }}></label>
									</div>
								</div>

								<div className='col-md-12'>
									<div className='form-group  mt-3'>
										<label htmlFor='post_acreage' className='col-md-12 col-form-label'>
											Diện tích
										</label>
										<div className='col-md-6'>
											<div className='input-group mb-3'>
												<input
													id='post_acreage'
													type='number'
													name='dien_tich'
													max='1000'
													className='form-control'
													data-msg-required='Bạn chưa nhập diện tích'
													onChange={(e: any) =>
														setPayload((prev) => ({
															...prev,
															areaNumber: +e.target.value
														}))
													}
												/>
												<div className='input-group-append'>
													<span className='input-group-text'>
														m<sup>2</sup>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='col-md-12'>
									<label htmlFor='doi_tuong' className='col-md-12 col-form-label'>
										Đối tượng cho thuê
									</label>
									<div className='col-md-6'>
										<div className='input-group mb-3'>
											<select
												className='form-control'
												id='post_cat'
												name='doi_tuong'
												onChange={(e: any) =>
													setPayload((prev) => ({
														...prev,
														target: e.target.value
													}))
												}>
												<option value='Nam'>Nam</option>
												<option value='Nữ'>Nữ</option>
												<option value='LGBT'>Chưa xác định</option>
											</select>
										</div>
									</div>
								</div>

								<div className='form-group row mt-5'>
									<div className='col-md-12'>
										<h3>Hình ảnh</h3>
									</div>
								</div>
								<div className='form-group row'>
									<div className='col-md-12'>
										<p>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</p>
										<div className='form-group' style={{ cursor: 'poiter' }}>
											<div className='browse_photos js-dropzone dz-clickable'>
												{imageUrls.length === 0 && (
													<>
														<label htmlFor='file' style={{ width: '100%' }}>
															<i className='icon-upload-image'></i> Thêm Ảnh
														</label>
														<input
															onChange={onFileChange}
															id='file'
															hidden
															type='file'
															accept='image/*'
															multiple
														/>
													</>
												)}
												<div
													className='list_photos d-lex dropzone-previews'
													style={{ display: 'flex', marginTop: '20px' }}>
													{imageUrls.map((img: string, index: number) => {
														return (
															<>
																<div className='photo_item col-md-2 col-3 js-photo-manual dz-processing dz-image-preview dz-success dz-complete'>
																	<div className='photo'>
																		<img data-dz-thumbnail='' src={img} />
																	</div>
																	<div className='dz-progress'>
																		<span
																			className='dz-upload'
																			data-dz-uploadprogress=''
																			style={{ width: '100%' }}></span>
																	</div>
																	<div
																		className='bottom clearfix'
																		style={{
																			display: 'flex',
																			justifyContent: 'center',
																			gap: '15px',
																			alignItems: 'center'
																		}}
																		onClick={() => onRemoveFile(index)}>
																		<i className='fa-regular fa-trash-can'></i>
																		<span
																			className='photo_delete'
																			data-dz-remove=''>
																			Xóa
																		</span>
																	</div>
																</div>
															</>
														)
													})}
													{imageUrls.length > 0 && (
														<>
															{Array.from({ length: 5 }).map((_, index: number) => (
																<>
																	{index < 5 - imageUrls.length && (
																		<div
																			style={{
																				display: 'flex',
																				justifyContent: 'center',
																				alignItems: 'center'
																			}}
																			className='photo_item col-md-2 col-3 js-photo-manual dz-processing dz-image-preview dz-success dz-complete'>
																			<label className='--ENop' key={index}>
																				<svg
																					width={30}
																					height={30}
																					viewBox='0 0 20 18'
																					fill='none'>
																					<path
																						fillRule='evenodd'
																						clipRule='evenodd'
																						d='M6.15377 9.76902C6.15377 11.8927 7.87492 13.6152 9.99992 13.6152C12.1236 13.6152 13.8461 11.8927 13.8461 9.76902C13.8461 7.64466 12.1236 5.92286 9.99992 5.92286C7.87492 5.92286 6.15377 7.64466 6.15377 9.76902ZM5 9.76902C5 7.00777 7.23813 4.76902 10 4.76902C12.7613 4.76902 15 7.00777 15 9.76902C15 12.5296 12.7613 14.769 10 14.769C7.23813 14.769 5 12.5296 5 9.76902ZM1.15385 17.2607C0.489784 17.2607 0 16.725 0 16.0662V4.12224C0 3.4623 0.489784 2.84596 1.15385 2.84596H4.61538L5.21635 1.73273C5.21635 1.73273 5.75421 0.538269 6.41827 0.538269H13.5817C14.2452 0.538269 14.7837 1.73273 14.7837 1.73273L15.3846 2.84596H18.8462C19.5096 2.84596 20 3.4623 20 4.12224V16.0662C20 16.725 19.5096 17.2607 18.8462 17.2607H1.15385Z'
																						fill='black'
																						fillOpacity='0.26'
																					/>
																				</svg>
																				<input
																					className='JiUFY3'
																					type='file'
																					accept='image/*'
																					multiple
																					hidden
																					onChange={onFileChange}
																				/>
																			</label>
																		</div>
																	)}
																</>
															))}
														</>
													)}
												</div>
											</div>
										</div>

										<div id='tpl' style={{ display: 'none' }}>
											<div className='photo_item col-md-2 col-3 js-photo-manual'>
												<div className='photo'>
													<img data-dz-thumbnail='' />
												</div>
												<div className='dz-progress'>
													<span className='dz-upload' data-dz-uploadprogress=''></span>
												</div>
												<div className='bottom clearfix'>
													<span className='photo_name' data-dz-name=''></span>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
														className='feather feather-trash-2'>
														<polyline points='3 6 5 6 21 6'></polyline>
														<path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
														<line x1='10' y1='11' x2='10' y2='17'></line>
														<line x1='14' y1='11' x2='14' y2='17'></line>
													</svg>
													<span className='photo_delete' data-dz-remove=''>
														Xóa
													</span>
												</div>
												<input name='' value='' type='' />
											</div>
										</div>
									</div>
								</div>
								{/* <div className="col-md-12">
                  <div className="col-md-12">
                    <h3>Video</h3>
                  </div>
                  <div className="col-md-12">
                    <p>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</p>
                    <div className="form-group row">
                      <label
                        htmlFor="youtube_url"
                        className="col-md-12 col-form-label"
                      >
                        Video Link (Youtube)
                      </label>
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          name="youtube_url"
                          id="youtube_url"
                        />
                      </div>
                    </div>
                    <div
                      className="list_photos row dropzone-previews"
                      id="list-photos-dropzone-previews"
                    ></div>
                    <div id="tpl" style={{ display: "none" }}>
                      <div className="photo_item col-md-2 col-3 js-photo-manual">
                        <div className="photo">
                          <img data-dz-thumbnail="" />
                        </div>
                        <div className="dz-progress">
                          <span
                            className="dz-upload"
                            data-dz-uploadprogress=""
                          ></span>
                        </div>
                        <div className="bottom clearfix">
                          <span className="photo_name" data-dz-name=""></span>
                          <span className="photo_delete" data-dz-remove="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>{" "}
                            Xóa
                          </span>
                        </div>
                        <input name="" value="" type="" />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <p>Hoặc upload Video từ máy của bạn</p>
                        <div className="form-group">
                          <div className="browse_photos js-dropzone-video dz-clickable">
                            <i className="icon-upload-video"></i>
                            <span className="js-btn-chon-video">
                              Thêm Video
                            </span>
                          </div>
                        </div>
                        <div
                          className="list_photos row dropzone-previews"
                          id="list-videos-dropzone-previews"
                        ></div>
                        <div id="tpl-video" style={{ display: "none" }}>
                          <div className="photo_item col-md-2 col-3 js-video-manual">
                            <div className="photo">
                              <video width="100%" height="100%" id="video">
                                <source src="" />
                              </video>
                            </div>
                            <div className="dz-progress">
                              <span
                                className="dz-upload"
                                data-dz-uploadprogress=""
                              ></span>
                            </div>
                            <div className="bottom clearfix">
                              <span
                                className="photo_name"
                                data-dz-name=""
                              ></span>
                              <span className="photo_delete" data-dz-remove="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                  className="feather feather-trash-2"
                                >
                                  <polyline points="3 6 5 6 21 6"></polyline>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                  <line x1="10" y1="11" x2="10" y2="17"></line>
                                  <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>{" "}
                                Xóa
                              </span>
                            </div>
                            <input name="" value="" type="hidden" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
							</div>

							<div className='form-group mt-5'>
								<div className='col-md-12'>
									<button
										type='submit'
										onClick={handleCreatePost}
										className='btn btn-success mb-5 btn-lg btn-block js-btn-hoan-tat'>
										Tiếp tục
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div id='maps' style={{ width: '100%', height: '300px', marginBottom: '30px' }}>
							<iframe
								width='100%'
								height='100%'
								style={{ border: '0' }}
								loading='lazy'
								src='https://www.google.com/maps/embed/v1/place?key=AIzaSyD6Coia3ssHYuRKJ2nDysWBdSlVlBCzKAw&amp;q=Hồ Chí Minh'></iframe>
						</div>

						<div
							className='card mb-5'
							style={{
								color: '#856404',
								backgroundColor: '#fff3cd',
								borderColor: '#ffeeba'
							}}>
							<NoteComponent />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

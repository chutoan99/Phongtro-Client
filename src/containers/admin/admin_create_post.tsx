// LIBRARY
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
// APP
import { apiUploadImages } from "../../services/orther/orther";
import { getCodesPrice, getCodesArea } from "../../utils/Commom/getCodePrice";
import { requiredFieldsCreatePost } from "../../utils/validate";
import {
  GetAllDistrictWithProvinceCode,
  GetALLProvince,
  GetAllWardWithDistrictCode,
} from "../../services/orther/orther";
import { AreaModel } from "../../services/area/area.model";
import { PriceModel } from "../../services/price/price.model";
import { CategoryModel } from "../../services/category/category.model";
import { UserModel } from "../../services/user/user.model";
import useTokenValidation from "../../hooks/useTokenValidation.hook";
import InforLocal from "../../models/InforLocal";
interface Payload {
  areaNumber: number;
  priceNumber: number;
  priceCode: string;
  areaCode: string;
  categoryCode: string;
  title: string;
  images: string;
  address: string;
  target: string;
  type: string;
  province: string;
  description: string;
  label: string;
  userId: string;
}
function AdminCreatePost() {
  //? INIT
  const queryClient = useQueryClient();
  const dataLocal: InforLocal = useTokenValidation();
  const dataPrices = queryClient.getQueriesData<PriceModel[]>(["Price"])[0][1];
  const dataAreas = queryClient.getQueriesData<AreaModel[]>(["Area"])[0][1];
  const dataCategories = queryClient.getQueriesData<CategoryModel[]>([
    "Category",
  ])[0][1];
  const dataUser = queryClient.getQueriesData<UserModel>([
    "User",
    dataLocal?.id,
  ])[0][1];
  //? HANDLE ADDRESS
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [provinceCode, setProvinceCode] = useState();
  const [districtCode, setDistrictCode] = useState();
  const [ward, setWard] = useState([]);
  const [wardCode, setWardCode] = useState();
  const [numberHouse, setNumberHouse] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  //? HANDLE PAYLOAD
  const [loading, setLoading] = useState(false);
  const [imageReview, setImageReview] = useState([]);
  const [payLoad, setPayload] = useState<Payload>({
    areaNumber: 0,
    priceNumber: 0,
    priceCode: "",
    areaCode: "",
    categoryCode: "",
    title: "",
    images: "",
    address: "",
    target: "",
    type: "",
    province: "",
    description: "",
    label: "",
    userId: "",
  });
  //? HANDLE API PROVINCE
  const fetchALLProvince = async () => {
    const response = await GetALLProvince();
    setProvince(response);
  };
  const fetchDistrictWithProvinceCode = async () => {
    const response = await GetAllDistrictWithProvinceCode(provinceCode);
    setDistrict(response);
  };
  const fetchAllWardWithDistrictCode = () => {
    GetAllWardWithDistrictCode(districtCode).then((item) => setWard(item));
  };
  useEffect(() => {
    fetchALLProvince();
  }, []);

  useEffect(() => {
    setDistrict([]);
    if (provinceCode === undefined) return;
    fetchDistrictWithProvinceCode();
  }, [provinceCode]);

  useEffect(() => {
    setWard([]);
    if (districtCode === undefined) return;
    fetchAllWardWithDistrictCode();
  }, [districtCode]);

  //? HANDLE CREATE POST
  const handleCreatePost = async () => {
    if (!numberHouse || !ward || !district || !province)
      return Swal.fire("Oop !", `Vui lòng nhập "Địa chỉ chính xác"`, "error");
    const missingField = Object.keys(requiredFieldsCreatePost).find(
      (field) => !payLoad[field]
    );
    if (missingField) {
      return Swal.fire(
        "Oop!",
        `Vui lòng nhập "${requiredFieldsCreatePost[missingField]}"`,
        "error"
      );
    }

    let userId = dataUser?.id;
    let type = payLoad.type || dataCategories[0]?.code;
    const priceCodeArr = getCodesPrice(+payLoad.priceNumber, dataPrices, 1, 15);
    const priceCode = priceCodeArr[0]?.code;
    const areaCodeArr = getCodesArea(+payLoad.areaNumber, dataAreas, 0, 90);
    const areaCode = areaCodeArr[0]?.code;
    const wardItem = ward.find((item) => item.code === wardCode);
    const districtItem = district.find((item) => item.code === districtCode);
    const provinceItem = province.find((item) => item.code === provinceCode);
    const address = [
      numberHouse,
      wardItem?.name_with_type,
      districtItem?.name_with_type,
      provinceItem?.name_with_type,
    ]
      .filter(Boolean)
      .join(",");

    const foundCategoryItem = dataCategories.find((item) => item.code === type);
    const categoryCode = foundCategoryItem?.code;
    const target = payLoad.target || "Nam";
    const label = `${foundCategoryItem.value}${payLoad.address?.split(",")[1]}`;
    const provincePayload = provinceItem?.name_with_type || "";

    setPayload({
      target,
      type: type,
      label: label,
      userId,
      address,
      priceCode,
      areaCode,
      categoryCode,
      areaNumber: payLoad.areaNumber,
      priceNumber: payLoad.priceNumber,
      title: payLoad.title,
      province: provincePayload,
      description: payLoad.description,
      images: "",
    });
  };

  const handleDeteleImg = (item: any) => {};
  const handleUploadImg = async (e: any) => {
    setLoading(true);
    e.stopPropagation();
    const fileInput = document.querySelector("[type=file]") as HTMLInputElement;
    const files = fileInput.files;

    let images = [];
    const formData = new FormData();
    const length = files?.length;
    for (let i = 0; i < length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME
      );
      let response = await apiUploadImages(formData);
      if ((response as any).data)
        images = [...images, (response as any).data.secure_url];
    }
    setLoading(false);
    setImageReview((prev) => [...prev, ...images]);
    setPayload((prev: any) => ({
      ...prev,
      images: images,
    }));
  };
  return (
    <>
      <div className="alert alert-danger mb-5" role="alert">
        Nếu bạn đã từng đăng tin trên Phongtro123.com, hãy sử dụng chức năng ĐẨY
        TIN / GIA HẠN / NÂNG CẤP VIP trong mục QUẢN LÝ TIN ĐĂNG để làm mới, đẩy
        tin lên cao thay vì đăng tin mới. Tin đăng trùng nhau sẽ không được
        duyệt.
      </div>
      <div
        className="form-horizontal js-form-submit-data js-frm-manage-post"
        id="form_dangtin"
      >
        <div className="row">
          <div className="col-md-8">
            <div className="col-md-12">
              <div className="col-md-12">
                <h3>Địa chỉ cho thuê</h3>
              </div>
              <div className="mt-3 col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="province_id" className="col-form-label">
                        Tỉnh/Thành phố
                      </label>
                      <select
                        id="province_id"
                        name="province_id"
                        className="form-control js-select-tinhthanhpho "
                        onChange={(e: any) => setProvinceCode(e.target.value)}
                      >
                        <option>-- Chọn Tỉnh/TP --</option>
                        {province?.map((item) => (
                          <option
                            className="mt-[10px]"
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
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-form-label" htmlFor="district_id">
                        Quận/Huyện
                      </label>
                      <select
                        id="province_id"
                        name="province_id"
                        className="form-control js-select-tinhthanhpho "
                        onChange={(e: any) => setDistrictCode(e.target.value)}
                      >
                        <option>-- Quận/Huyện --</option>
                        {district?.map((item) => (
                          <option
                            className="mt-[10px]"
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
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-form-label" htmlFor="phuongxa">
                        Phường/Xã
                      </label>
                      <select
                        id="province_id"
                        name="province_id"
                        className="form-control js-select-tinhthanhpho "
                        onChange={(e: any) => setWardCode(e.target.value)}
                      >
                        <option value="">chọn phường xã</option>
                        {ward?.map((item) => (
                          <option
                            className="mt-[10px]"
                            value={item?.code}
                            key={item?._id}
                          >
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="post_title" className="col-form-label">
                        Số nhà
                      </label>
                      <input
                        type="text"
                        className="form-control js-title"
                        name="tieu_de"
                        id="post_title"
                        onChange={(e) => setNumberHouse(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="street_number" className="col-form-label">
                      Địa chỉ chính xác
                    </label>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      className="form-control"
                      name="dia_chi"
                      id="diachi"
                      placeholder="nhap so na"
                      onChange={(e) => setAddressDetail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-5">
                  <div className="col-md-12">
                    <h3>Thông tin mô tả</h3>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group row mt-3">
                    <label
                      htmlFor="post_cat"
                      className="col-md-12 col-form-label"
                    >
                      Loại chuyên mục
                    </label>
                    <div className="col-md-6">
                      <select
                        className="form-control"
                        id="post_cat"
                        name="loai_chuyen_muc"
                        data-msg-required="Chưa chọn loại chuyên mục"
                        onChange={(e) =>
                          setPayload((prev) => ({
                            ...prev,
                            type: e.target.value,
                          }))
                        }
                      >
                        <option value="">-- Chọn loại chuyên mục --</option>
                        {dataCategories?.map(
                          (ele: CategoryModel, index: number) => (
                            <option key={index} value={ele.value}>
                              {ele.value}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group row mt-3">
                    <label
                      htmlFor="post_title"
                      className="col-md-12 col-form-label"
                    >
                      Tiêu đề
                    </label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control js-title"
                        onChange={(e: any) =>
                          setPayload((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group  mt-3">
                    <label
                      htmlFor="post_content"
                      className="col-md-12 col-form-label"
                    >
                      Nội dung mô tả
                    </label>
                    <div className="col-md-12">
                      <textarea
                        className="form-control js-content"
                        name="noi_dung"
                        id="post_content"
                        onChange={(e: any) =>
                          setPayload((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                        data-msg-required="Bạn chưa nhập nội dung"
                        data-msg-minlength="Nội dung tối thiểu 100 kí tự"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group  mt-3">
                    <label htmlFor="phone" className="col-md-12 col-form-label">
                      Thông tin liên hệ
                    </label>
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <input
                          id="ten_lien_he"
                          type="text"
                          name="ten_lien_he"
                          className="form-control"
                          data-msg-required="Tên liên hệ"
                          value="cu toan"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group  mt-3">
                    <label htmlFor="phone" className="col-md-12 col-form-label">
                      Điện thoại
                    </label>
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <input
                          id="phone"
                          type="number"
                          name="phone"
                          className="form-control"
                          data-msg-required="Số điện thoại"
                          value="0349324722"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group  mt-3">
                    <label
                      htmlFor="giachothue"
                      className="col-md-12 col-form-label"
                    >
                      Giá cho thuê
                    </label>
                    <div className="col-md-6">
                      <div className="input-group">
                        <input
                          id="giachothue"
                          name="gia"
                          type="text"
                          className="form-control"
                          data-msg-required="Bạn chưa nhập giá phòng"
                          data-msg-min="Giá phòng chưa đúng"
                          onChange={(e: any) =>
                            setPayload((prev) => ({
                              ...prev,
                              priceNumber: +e.target.value / Math.pow(10, 6),
                            }))
                          }
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">đồng</span>
                        </div>
                      </div>
                      <small className="form-text text-muted">
                        Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000
                      </small>
                    </div>
                    <label
                      htmlFor="text_giachothue"
                      id="text_giachothue"
                      className="col-sm-12 control-label js-number-text"
                      style={{ color: "red" }}
                    ></label>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group  mt-3">
                    <label
                      htmlFor="post_acreage"
                      className="col-md-12 col-form-label"
                    >
                      Diện tích
                    </label>
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <input
                          id="post_acreage"
                          type="number"
                          name="dien_tich"
                          max="1000"
                          className="form-control"
                          data-msg-required="Bạn chưa nhập diện tích"
                          onChange={(e: any) =>
                            setPayload((prev) => ({
                              ...prev,
                              areaNumber: +e.target.value,
                            }))
                          }
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            m<sup>2</sup>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <label
                    htmlFor="doi_tuong"
                    className="col-md-12 col-form-label"
                  >
                    Đối tượng cho thuê
                  </label>
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <select
                        className="form-control"
                        id="post_cat"
                        name="doi_tuong"
                        onChange={(e: any) =>
                          setPayload((prev) => ({
                            ...prev,
                            target: e.target.value,
                          }))
                        }
                      >
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="LGBT">Chưa xác định</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group row mt-5">
                  <div className="col-md-12">
                    <h3>Hình ảnh</h3>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <p>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</p>
                    <div className="form-group">
                      <div className="browse_photos js-dropzone dz-clickable">
                        <i className="icon-upload-image"></i>
                        <label htmlFor="file">Thêm Ảnh</label>{" "}
                        <input
                          id="file"
                          hidden
                          type="file"
                          name="files[]"
                          multiple
                          onChange={handleUploadImg}
                        />
                      </div>
                    </div>
                    {/* <div className="list_photos d-lex dropzone-previews">
                      <div className="photo_item col-md-2 col-3 js-photo-manual dz-processing dz-image-preview dz-success dz-complete">
                        <div className="photo">
                          <img
                            data-dz-thumbnail=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAFUpJREFUeF7tnQeQFEUXx99eABSQT8wRMVumMmLArJgFMWAqFREtcw6YRcWIqGgpRhRzAnOWEvRTzDmACcSIETw4vNvdr3791VubcWanZ/Z2d26drrq6u92eme737/f6xZ5MPp/PS9pqlgKZagO83nrrydy5c6Wurk4OOeQQOeyww2S++eaTTCZTs0Sv5MSqBjBAHn/88TJs2DBZYIEF5JprrpFsNis33XSTfPXVV3L55Zcb0NNWGgWqAnAul5N+/frJmDFjDLhPPvmkPPDAA3LRRRfJzTffLGeffbb89ddfMnToULMA0hafAhUH+NJLL5U333xT7r//ftlrr71k5513lgMPPFDeffddA+riiy8uxxxzjBHb9F133XXjzy69UioKMJz79ddfS8+ePWXPPfc0IG+44Yby2muvSWNjo+Hg3r17y+TJk+Wjjz6Syy67TNZcc0357LPPUqhiUqCiAC+44ILSt29fs88iht9//30jnu3GPoxi/80338jEiRNl0UUXlR122CHm9NLLKgrwMsssI1OnTpWjjjpK9t57b9l8882lvr5e4Gx+GhoaDCK9evWSLbfc0ohwOBjuThWueIu1ogCvttpqRvQqmPwGOPZelK2mpiYD+BVXXCEnnXSSmdG3334rSy65ZApwPHwruwffeOONctBBB0nHjh3NcAHy5JNPLgwdwLfffnu54447ZIklljCfP/bYY7LrrrvGnF56WUU5eObMmXLnnXfKkUceaSjPfotDwxa/iOYXX3yx8Nnzzz8v2267bYpUTApUFGAAPfzww2XUqFFGFKNM8YMpxOf77befdOrUqcDhcPTKK68sn3/+eczppZdVFGDIjX0L16I4hbkjW1tbC4pXClU8ClQcYIaJmF5jjTVkrbXWMiDbQCtXA26HDh0izQqO996PG+jn/KYhPbTxHJpq8GEPZHxhC1PvYfdtaWkxi5pmx3cYkz0e7/2L/c/YudYeDwykOo65tprBBgDGW7XjjjsWJo7z48ILL5Q33njDEMSefBjx+R6N3L6GPX2RRRYp7Pnc3waTvs3NzQXiF3sGIEE8XShh41FwbCC++OILOf300wuX3nvvvf9Y4DZgU6ZMkSFDhhT6M37VWTA38eGrqcnnX375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"
                          />
                        </div>
                        <div className="dz-progress">
                          <span
                            className="dz-upload"
                            data-dz-uploadprogress=""
                            style={{ width: "100%" }}
                          ></span>
                        </div>
                        <div className="bottom clearfix">
                          <span className="photo_delete" data-dz-remove="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
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
                      </div>
                      <div className="photo_item col-md-2 col-3 js-photo-manual dz-processing dz-image-preview dz-success dz-complete">
                        <div className="photo">
                          <img
                            data-dz-thumbnail=""
                            alt="z4131899906024_c9a30865780f44357d6d60f033c942c0.jpg"
                            src="data:image/png;base64,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"
                          />
                        </div>
                        <div className="dz-progress">
                          <span
                            className="dz-upload"
                            data-dz-uploadprogress=""
                            style={{ width: "100%" }}
                          ></span>
                        </div>
                        <div className="bottom clearfix">
                          <span className="photo_delete" data-dz-remove="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
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
                      </div>
                    </div> */}
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
                              strokeWidth="2"
                              strokeLinecap="round"
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
                        <input name="" value="" type="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
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
                </div>
              </div>

              <div className="form-group mt-5">
                <div className="col-md-12">
                  <button
                    type="submit"
                    onClick={handleCreatePost}
                    className="btn btn-success mb-5 btn-lg btn-block js-btn-hoan-tat"
                  >
                    Tiếp tục
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              id="maps"
              style={{ width: "100%", height: "300px", marginBottom: "30px" }}
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: "0" }}
                loading="lazy"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD6Coia3ssHYuRKJ2nDysWBdSlVlBCzKAw&amp;q=Hồ Chí Minh"
              ></iframe>
            </div>

            <div
              className="card mb-5"
              style={{
                color: "#856404",
                backgroundColor: "#fff3cd",
                borderColor: "#ffeeba",
              }}
            >
              <div className="card-body">
                <h4 className="card-title">Lưu ý khi đăng tin</h4>
                <ul>
                  <li style={{ listStyleType: "square", marginLeft: "15px" }}>
                    Nội dung phải viết bằng tiếng Việt có dấu
                  </li>
                  <li style={{ listStyleType: "square", marginLeft: "15px" }}>
                    Tiêu đề tin không dài quá 100 kí tự
                  </li>
                  <li style={{ listStyleType: "square", marginLeft: "15px" }}>
                    Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có
                    hiệu quả hơn.
                  </li>
                  <li style={{ listStyleType: "square", marginLeft: "15px" }}>
                    Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn,
                    hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo
                    icon tới đúng vị trí của tin rao.
                  </li>
                  <li style={{ listStyleType: "square", marginLeft: "15px" }}>
                    Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều
                    lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao
                    dịch nhanh chóng!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <input type="hidden" id="action" name="action" value="add_new_post" />
        <input type="hidden" id="map_lat" name="map_lat" value="" />
        <input type="hidden" id="map_long" name="map_long" value="" />
        <input
          type="hidden"
          id="payment_method"
          name="payment_method"
          value="thanh_toan_sau"
        />
      </div>
    </>
  );
}
export default AdminCreatePost;

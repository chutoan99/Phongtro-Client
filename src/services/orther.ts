import axiosDefault from "axios";
import axios from "axios";

export const GetALLProvinceVietNam = (setProvince) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1",
      });
      if (response.status === 200) {
        setProvince(response.data.data.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const GetAllDistrictVietNam = (setDistrict) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: "https://vn-public-apis.fpo.vn/districts/getAll?limit=-1",
      });
      if (response.status === 200) {
        setDistrict(response.data.data.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const GetAllWardVietNam = (setWard: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: `https://vn-public-apis.fpo.vn/wards/getAll?limit=-1`,
      });
      if (response.status === 200) {
        setWard(response.data.data.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const GetAllDistrictWithProvinceCode = (
  provinceCode: any,
  setDistrict: any
) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${provinceCode}&limit=-1`,
      });
      if (response.status === 200) {
        setDistrict(response?.data?.data?.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const GetAllWardWithDistrictCode = (districtCode: any, setWard: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${districtCode}&limit=-1`,
      });
      if (response.status === 200) {
        setWard(response?.data?.data?.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiUploadImages = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "post",
        url: `https://api.cloudinary.com/v1_1/dxcershra/image/upload/`,
        data: formData,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

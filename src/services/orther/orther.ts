import axiosDefault from "axios";
import axios from "axios";
import Swal from "sweetalert2";

export const GetALLProvince = async () => {
  try {
    const response = await axiosDefault({
      method: "get",
      url: "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1",
    });
    if (response.status === 200) {
      return response.data.data.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error, "error");
  }
};

export const GetAllDistrict = async () => {
  try {
    const response = await axiosDefault({
      method: "get",
      url: "https://vn-public-apis.fpo.vn/districts/getAll?limit=-1",
    });
    if (response.status === 200) {
      return response.data.data.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error, "error");
  }
};

export const GetAllWard = async () => {
  try {
    const response = await axiosDefault({
      method: "get",
      url: `https://vn-public-apis.fpo.vn/wards/getAll?limit=-1`,
    });
    if (response.status === 200) {
      return response.data.data.data;
    } else {
      return [];
    }
  } catch (error) {
    Swal.fire("Oop !", error, "error");
  }
};

export const GetAllDistrictWithProvinceCode = async (provinceCode: any) => {
  try {
    const response = await axiosDefault({
      method: "get",
      url: `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${provinceCode}&limit=-1`,
    });
    if (response.status === 200) {
      return response?.data?.data?.data;
    } else {
      return [];
    }
  } catch (error) {
    Swal.fire("Oop !", error, "error");
  }
};

export const GetAllWardWithDistrictCode = async (districtCode: any) => {
  try {
    const response = await axiosDefault({
      method: "get",
      url: `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${districtCode}&limit=-1`,
    });
    if (response.status === 200) {
      return response?.data?.data?.data;
    } else {
      return [];
    }
  } catch (error) {
    Swal.fire("Oop !", error, "error");
  }
};

export const apiUploadImages = async (formData) => {
  try {
    const response = await axios({
      method: "post",
      url: `https://api.cloudinary.com/v1_1/dxcershra/image/upload/`,
      data: formData,
    });
    return response;
  } catch (error) {
    Swal.fire("Oop !", error, "error");
  }
};

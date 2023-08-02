import axios from "axios";
import { promises } from "dns";
import Swal from "sweetalert2";

export const GetALLProvince = async () => {
  try {
    const response = await axios({
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
    const response = await axios({
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
    const response = await axios({
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
    const response = await axios({
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
    const response = await axios({
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

export const apiUploadImages = async (fileImages: File[]) => {
  try {
    const uploadPromises = fileImages.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_UPLOAD_ASSETS_NAME
      );

      try {
        const response = await axios({
          method: "post",
          url: `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/`,
          data: formData,
        });

        if (response.status === 200) {
          return response?.data?.url;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error; // Re-throw the error to be caught by Promise.all
      }
    });

    const images = await Promise.all(uploadPromises);

    if (images.every((url) => url)) {
      return images;
    } else {
      Swal.fire("Error!", "Some images failed to upload.", "error");
      return null;
    }
  } catch (error) {
    Swal.fire("Oop!", error, "error");
    return null;
  }
};

import { authActions } from "../redux/auth.slice";
import config from "../configs/axios";
import Swal from "sweetalert2";
import { login, Register } from "../graphql/mutations/auth";

export const apiRegister = async (
  { name, password, phone },
  dispatch,
  Router
) => {
  try {
    dispatch(authActions.registerStart());
    const responsive = await config({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(Register(name, password, phone)),
    });
    if (responsive.status === 200 && responsive.data.data.register.token) {
      Swal.fire("Oop !", "Register is success", "success");
      Router.push("/login");
    } else {
      dispatch(authActions.registerFailed(responsive.data.data.register.msg));
      Swal.fire("Oop !", "Phone Is used", "error");
    }
  } catch (error) {
    dispatch(authActions.registerFailed(error));
    Swal.fire("Oop !", "Lỗi server", "error");
  }
};

export const apiLogin = async ({ password, phone }, dispatch, Router) => {
  dispatch(authActions.loginStart());
  try {
    const responsive = await config({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(login(password, phone)),
    });
    if (responsive.status === 200 && responsive.data.data.login.token) {
      dispatch(authActions.loginSuccess(responsive.data.data.login));
      localStorage.setItem(
        "token",
        JSON.stringify({
          isLogin: true,
          token: responsive.data.data.login.token,
        })
      );
      Swal.fire("Oop !", "Login is success", "success");
      Router.push("/");
    } else {
      dispatch(authActions.loginFailed(responsive.data.data.login.msg));
      Swal.fire("Oop !", "Password is wrong", "error");
    }
  } catch (error) {
    dispatch(authActions.loginFailed(error));
    Swal.fire("Oop !", "Lỗi server", "error");
  }
};

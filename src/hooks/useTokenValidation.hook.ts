import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useTokenValidation = () => {
  const router = useRouter();
  const [data, setData] = useState({
    token: null,
    isLogin: false,
    id: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const dataFromLocalStorage = localStorage.getItem("token");
      if (!dataFromLocalStorage) {
        router.push("/login");
      }
      if (dataFromLocalStorage) {
        setData(JSON.parse(dataFromLocalStorage));
      }
    }
  }, [router]);

  return data;
};

export default useTokenValidation;

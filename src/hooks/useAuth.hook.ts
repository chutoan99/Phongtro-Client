import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQueryUserId } from "../services/user/index.hook";
import { UserIdModel } from "../models/user";

const useAuth = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<UserIdModel | null>(null);
  const [dataLocalLocalStore, setDataLocalStore] = useState({
    token: null,
    isLogin: false,
    id: "",
  });
  const { data, isLoading } = useQueryUserId(dataLocalLocalStore?.id);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const dataFromLocalStorage = localStorage.getItem("token");
      if (!dataFromLocalStorage) {
        router.push("/login");
      }
      if (dataFromLocalStorage) {
        setDataLocalStore(JSON.parse(dataFromLocalStorage));
      }
    }
  }, []);

  useEffect(() => {
    if (!dataLocalLocalStore.id) return;
    if (!data) return;
    setDataUser(data);
  }, [dataLocalLocalStore, data]);
  return { dataUser, isLoading, isLogin: dataLocalLocalStore.isLogin };
};

export default useAuth;

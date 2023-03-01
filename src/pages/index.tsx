import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getArea } from "../services/area";
import { getPrices } from "../services/price";
import { GetProvince } from "../services/province";
import { GetCurrentUser } from "../services/user";
import { Header, Container, Footer, NavBarMenu } from "../components/index";
import { GetNavigation } from "../services/navigation";
import { GetPosts, GetNewPosts } from "../services/posts";
import { useRouter } from "next/router";

const HomePage = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  useEffect(() => {
    (async () => {
      await GetPosts(1, 20, dispatch);
    })();
    (async () => {
      await GetNewPosts(1, 10, dispatch);
    })();
    (async () => {
      await getPrices(dispatch);
    })();
    (async () => {
      await getArea(dispatch);
    })();
    (async () => {
      await GetNavigation(dispatch);
    })();

    (async () => {
      await GetProvince(dispatch);
    })();

    (async () => {
      await GetCurrentUser(dispatch);
    })();
  }, []);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = JSON.parse(localStorage.getItem("token"));
      if (storedToken) {
        setToken(storedToken.token);
      } else {
        Router.push("/login");
      }
    }
  }, []);
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu />
      <Container />
      <Footer />
    </div>
  );
};

export default HomePage;

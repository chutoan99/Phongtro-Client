import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArea } from "../services/area";
import { getPrices } from "../services/price";
import { GetProvince } from "../services/province";
import { Header, Container, Footer, NavBarMenu } from "../components/index";
import { GetNavigation } from "../services/navigation";
import { GetPosts, GetNewPosts } from "../services/posts";
import { useRouter } from "next/router";
import { GetCurrentUser } from "../services/user";

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
    if (typeof window !== "undefined") {
      const storedToken = JSON.parse(localStorage.getItem("token"))?.token;
      console.log(storedToken);
      if (storedToken) {
        const idUser = JSON.parse(localStorage.getItem("token"))?.id;
        if (idUser) {
          GetCurrentUser(idUser, dispatch);
        }
      } else {
        Router.push("/login");
      }
    }
  }, [dispatch]);

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

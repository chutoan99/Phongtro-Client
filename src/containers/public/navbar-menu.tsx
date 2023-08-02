//? LIBRARY
import Link from "next/link";
import { useRouter } from "next/router";
//? HOOKS
import { useQueryCategories } from "../../services/category/index.hook";
//? APP
import { CategoryModel } from "../../models/category.model";

const NavBarMenu = () => {
  const router = useRouter();
  const { pathname } = router;
  const routeSegment = pathname.split("/")[1];
  const { data: dataCategories, isLoading } = useQueryCategories();

  return (
    <nav id="navbar-menu" className="">
      <ul id="menu-main-menu" className="container-menu clearfix level-1">
        <li
          className={`${
            !routeSegment
              ? "navbar_item clearfix active current-menu-item"
              : "navbar_item clearfix"
          }`}
        >
          <Link href="/">Trang chủ</Link>
        </li>
        {!isLoading && (
          <>
            {dataCategories?.map((item: CategoryModel, index: number) => {
              return (
                <li
                  key={index}
                  className={`${
                    item?.path === routeSegment
                      ? "navbar_item clearfix active current-menu-item"
                      : "navbar_item clearfix"
                  }`}
                >
                  <Link href={`./${item?.path}`}>{item.value}</Link>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBarMenu;

// LIBRARY
import Link from "next/link";
import { useQueryClient } from "react-query";
import { CategoryModel } from "../../services/category/category.model";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// APP

const NavBarMenu = () => {
  const queryClient = useQueryClient();
  const dataCategories = queryClient.getQueriesData<CategoryModel[]>([
    "Category",
  ])[0][1];
  const router = useRouter();
  const { pathname } = router;
  const routeSegment = pathname.split("/")[1];

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
      </ul>
    </nav>
  );
};

export default NavBarMenu;

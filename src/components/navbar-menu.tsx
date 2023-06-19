import Link from "next/link";
import { useQueryClient } from "react-query";
import { Category } from "../models/caterory";
import { useEffect, useState } from "react";

interface NavBar {
  path: string;
}

const NavBarMenu = ({ path }: NavBar) => {
  const queryClient = useQueryClient();
  const dataCategory =
    queryClient.getQueriesData<any>(["Category"]).length > 0
      ? queryClient.getQueriesData<any>(["Category"])[0][1]?.category?.response
      : null;
  return (
    <nav id="navbar-menu" className="">
      <ul id="menu-main-menu" className="container-menu clearfix level-1">
        <li
          className={`${
            path === "index"
              ? "navbar_item clearfix active current-menu-item"
              : "navbar_item clearfix"
          }`}
        >
          <Link href="/">Trang chủ</Link>
        </li>
        {dataCategory?.map((item: Category, index: number) => {
          return (
            <li
              key={index}
              className={`${
                item?.path === path
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

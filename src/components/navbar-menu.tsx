import { AppState } from "../app/store";
import type { NextPage } from "next";
import Link from "next/link";

import { useAppSelector } from "../app/hooks";
import { Category } from "../types/category.type";
import { formatVietnameseToString } from "../utils/Commom/formatVietnameseToString";

const NavBarMenu: NextPage = () => {
  const { category } = useAppSelector((state: AppState) => state);

  return (
    <nav id="navbar-menu" className="">
      <ul id="menu-main-menu" className="container-menu clearfix level-1">
        <li className="navbar_item clearfix active current-menu-item">
          <a href="https://phongtro123.com">Trang chủ</a>
        </li>
        {category.data?.map((item: Category, index: number) => {
          return (
            <li className="navbar_item clearfix" key={index}>
              <Link href={formatVietnameseToString(item.value)}>
                {item.value}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBarMenu;

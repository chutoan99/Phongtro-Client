// LIBRARY
import { useQueryClient } from "react-query";
import Link from "next/link";
import { NextPage } from "next";
//APP
import { Support } from "../../containers/index";
import {
  SystemNavMenu,
  SystemCreatePost,
  SystemAside,
} from "../../admin/index";

const CreatePost: NextPage = () => {
  const queryClient = useQueryClient();
  const dataUser =
    queryClient.getQueriesData<any>(["User"]).length > 0
      ? queryClient.getQueriesData<any>(["User"])[0][1]?.userId?.response
      : null;

  return (
    <>
      <div className="desktop dashboard quan-ly dang-tin dang-tin-moi loaded ready">
        <div id="webpage" style={{ position: "relative" }}>
          <SystemNavMenu />
          <div
            className="container-fluid"
            style={{ position: "absolute", top: "45px" }}
          >
            <div className="row">
              <div className="d-flex">
                <SystemAside dataUser={dataUser} />
                <main role="main" className="ml-sm-auto col-lg-10">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Phongtro123.com</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link href="/system">Quản lý</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Đăng tin mới
                      </li>
                    </ol>
                  </nav>
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 className="h1">Đăng tin mới</h1>
                  </div>
                  <SystemCreatePost />
                  <Support />
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePost;

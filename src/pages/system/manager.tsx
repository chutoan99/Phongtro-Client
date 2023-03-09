import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SystemAside,
  SystemMain,
  SystemNavMenu,
  SystemSection,
} from "../../components/index";
import moment from "moment";
import { AppState } from "../../app/store";
import { NextPage } from "next";
import SystemManager from "../../components/system/system-manager";
import { useQueryClient } from "react-query";

const ManagePost: NextPage = () => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const queryClient = useQueryClient();
  const dataUser =
    queryClient.getQueriesData<any>(["user"]).length > 0
      ? queryClient.getQueriesData<any>(["user"])[0][1]?.userId?.response
      : null;
  const query = { UserId: dataUser.id };

  const checkStatus = (dateTime) =>
    moment(dateTime, "DD/MM/YYYY").isSameOrAfter(new Date().toDateString());
  // const handleShowEditPost = (item) => {
  //   dispatch(postActions.fetchPostEdit(item));
  //   setEdit(true);
  // };
  return (
    <div className="desktop dashboard quan-ly dang-tin dang-tin-moi loaded ready">
      <div id="webpage" style={{ position: "relative" }}>
        <SystemNavMenu />
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "45px" }}
        >
          <div className="row">
            <div className="d-flex">
              <SystemAside />
              <SystemMain>
                <SystemManager />
              </SystemMain>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManagePost;

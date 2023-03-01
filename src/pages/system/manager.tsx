import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SystemAside,
  SystemMain,
  SystemNavMenu,
  SystemSection,
} from "../../components/index";
import { postActions } from "../../redux/post.slice";
import { apiPosted } from "../../services/posts";
import moment from "moment";
import { AppState } from "../../app/store";
import { NextPage } from "next";
import SystemManager from "../../components/system/system-manager";

const ManagePost: NextPage = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state: AppState) => state.user.data);
  const { data } = useSelector((state: AppState) => state.post.posted);
  const [edit, setEdit] = useState(false);

  const query = { UserId: id };
  useEffect(() => {
    const fetchApiPosted = async () => {
      await apiPosted(query, dispatch);
    };
    fetchApiPosted();
  }, [id]);
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

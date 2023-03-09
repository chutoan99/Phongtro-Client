import { useSelector } from "react-redux";
import {
  Input,
  SystemAside,
  SystemMain,
  SystemNavMenu,
  SystemProfile,
} from "../../components/index";
import { AppState } from "../../app/store";
import { NextPage } from "next";

const ProfilePage: NextPage = () => {
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
                <SystemProfile />
              </SystemMain>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;

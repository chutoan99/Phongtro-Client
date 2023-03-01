import { NextPage } from "next";

import {
  SystemAside,
  SystemNavMenu,
  SystemMain,
  SystemCreatePost,
  SystemContent,
} from "../../components/index";
const CreatePost: NextPage = () => {
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
                <SystemContent />
              </SystemMain>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;

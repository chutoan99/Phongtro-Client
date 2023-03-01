import { NextPage } from "next";
import {
  SystemAside,
  SystemMain,
  SystemNavMenu,
  SystemSection,
} from "../../components/index";
import { path } from "../../utils/constant";

const SystemPage: NextPage = () => {
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
                <SystemSection />
              </SystemMain>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SystemPage;

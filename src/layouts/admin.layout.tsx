// LIBRARY
import { useQueryClient } from "react-query";
// APP
import { Aside, Nav } from "../containers/admin/index";
import { useQueryUserId } from "../hooks/useQueryUserId";
import InforLocal from "../models/InforLocal";
import useTokenValidation from "../hooks/useTokenValidation.hook";

export default function AdminLayout({ children }) {
  const dataUser: InforLocal = useTokenValidation();
  const { data, isLoading, isFetching } = useQueryUserId(dataUser?.id);

  return (
    <div className="desktop dashboard loaded ready">
      <div id="webpage" style={{ position: "relative" }}>
        <Nav />
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "45px" }}
        >
          {!isLoading ? (
            <div className="row">
              <div className="d-flex">
                <Aside dataUser={data} />
                {children}
              </div>
            </div>
          ) : (
            <span className="loader"></span>
          )}
        </div>
      </div>
    </div>
  );
}

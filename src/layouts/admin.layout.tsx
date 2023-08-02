//? HOOK
import useAuth from "../hooks/useAuth.hook";
import { useQueryUserId } from "../services/user/index.hook";
//? APP
import { Aside, Nav } from "../containers/admin";

export default function AdminLayout({ children }) {
  const { dataUser } = useAuth();
  const { data, isLoading } = useQueryUserId(dataUser?.id);

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

// LIBRARY
import { useQueryClient } from "react-query";
// APP
import { AdminAside, AdminNav } from "../containers/admin/index";
import { useQueryAreas } from "../hooks/useQueryAreas";
import { useQueryPrices } from "../hooks/useQueryPrices";
import { useQueryCategories } from "../hooks/useQueryCategories";
import { useQueryProvinces } from "../hooks/useQueryProvinces";
import { UserModel } from "../services/user/user.model";
import { useQueryPostsOfUser } from "../hooks/useQueryPostsOfUser";
import { useQueryUserId } from "../hooks/useQueryUserId";
import InforLocal from "../models/InforLocal";
import useTokenValidation from "../hooks/useTokenValidation.hook";

export default function AdminLayout({ children }) {
  const queryClient = useQueryClient();
  const dataUser: InforLocal = useTokenValidation();
  console.log(queryClient.getQueriesData<UserModel>(["Post_User"]), "user");
  // const dataUser = queryClient.getQueriesData<UserModel>(["User"])[0][1];
  useQueryProvinces();
  useQueryCategories();
  useQueryPrices();
  useQueryAreas();
  useQueryUserId(dataUser?.id);
  useQueryPostsOfUser(dataUser?.id);

  return (
    <div className="desktop dashboard loaded ready">
      <div id="webpage" style={{ position: "relative" }}>
        <AdminNav />
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "45px" }}
        >
          <div className="row">
            <div className="d-flex">
              <AdminAside dataUser={dataUser} />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

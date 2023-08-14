//? LIBRARY
import { memo } from "react";
function AdminNote() {
  return (
    <div className="card-body">
      <h4 className="card-title">Lưu ý khi đăng tin</h4>
      <ul>
        <li style={{ listStyleType: "square", marginLeft: "15px" }}>
          Nội dung phải viết bằng tiếng Việt có dấu
        </li>
        <li style={{ listStyleType: "square", marginLeft: "15px" }}>
          Tiêu đề tin không dài quá 100 kí tự
        </li>
        <li style={{ listStyleType: "square", marginLeft: "15px" }}>
          Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả
          hơn.
        </li>
        <li style={{ listStyleType: "square", marginLeft: "15px" }}>
          Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa
          vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới đúng vị trí
          của tin rao.
        </li>
        <li style={{ listStyleType: "square", marginLeft: "15px" }}>
          Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với
          tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!
        </li>
      </ul>
    </div>
  );
}
export default memo(AdminNote);

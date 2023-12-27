import thanhcop from '~/assets/image/bmw_x6/thanh_cop.jpg';
import hopmuitran from '~/assets/image/bmw_x6/hop_mui_tran.jpg';
import lopnotsan from '~/assets/image/bmw_x6/lop_lot_san.jpg';
import thamhanhly from '~/assets/image/bmw_x6/tham_khoang_hanhly.jpg';
import mamxe from '~/assets/image/bmw_x6/mam_xe.jpg';
import mamxeden from '~/assets/image/bmw_x6/mam_xe_hopkim.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: thanhcop,
    alt: '  Thanh ngang cốp nóc BMW ',
    textHead: '  Thanh ngang cốp nóc BMW ',
    textBody:
      'Các thanh ngang cốp nóc có thể được kết hợp với tất cả các khung hành lý và cốp nóc BMW thêm phần hoàn hảo cho ngoại hình toàn diện của chiếc xe. Các bộ phận này dễ dàng lắp đặt mà không cần dụng cụ và tuân thủ tiêu chuẩn chất lượng và an toàn cao nhất nhờ kết cấu chắc khỏe và hệ thống khóa chống trộm.',
  },
  {
    src: hopmuitran,
    alt: ' Hộp mui trần cabin BMW 520 bằng bạc titan/màu đen.  ',
    textHead: '   Hộp mui trần cabin BMW 520 bằng bạc titan/màu đen.  ',
    textBody:
      'Hộp mui trần cabin BMW hiện đại màu đen với các tấm ốp bằng bạc titan bên hông có dung tích chứa 520 lít và tương thích với mọi hệ thống cốp nóc BMW. Do có thể mở từ cả hai bên và mỗi bên đều có khóa ba chạc ở giữa, tiện lợi khi chất hàng hóa và khóa chống trộm.',
  },
  {
    src: thamhanhly,
    alt: ' Thảm khoang hành lý.  ',
    textHead: '  Thảm khoang hành lý.  ',
    textBody:
      'Thảm chống trượt, chịu nước và bền bỉ với mép cao ở cả 4 bên giúp bảo vệ khoang hành lý khỏi bụi bẩn và ẩm ướt. Thảm màu đen thêm phần hoàn hảo cho nội thất xe với các Trang bị cơ bản.',
  },
  {
    src: lopnotsan,
    alt: '  Lớp lót sàn phía sau BMW.  ',
    textHead: '   Lớp lót sàn phía sau BMW.  ',
    textBody:
      'Chức năng trên xe đáng tin cậy kết hợp với vẻ sang trọng đầy tính thể thao: Lớp lót sàn chống trượt, chịu nước và bền bỉ BMW có đường viền tôn cao giúp bảo vệ khu vực để chân phía sau tránh bị ẩm ướt và bụi bặm. Chúng có màu đen và có lớp khảm bằng thép không gỉ. Định dạng 3D đặc biệt ở phần đuôi hoàn hảo cả về ngoại hình và tính phù hợp.',
  },
  {
    src: mamxe,
    alt: '  Mâm xe bằng hợp kim nhẹ 22 inch kiểu dáng 749 M Bicolor 5 chấu.   ',
    textHead: '   Mâm xe bằng hợp kim nhẹ 22 inch kiểu dáng 749 M Bicolor 5 chấu.   ',
    textBody:
      'Mâm xe bằng hợp kim nhẹ 22 inch M Performance chất lượng cao, tối ưu hóa trọng lượng kiểu dáng 749 M Bicolour 5 chấu màu đen bóng với logo chữ M sắc màu và chữ M Performance. Mâm xe trước, kích cỡ mâm 9,5J x 22, không có lốp.',
  },
  {
    src: mamxeden,
    alt: '  Mâm xe bằng hợp kim nhẹ 22 inch kiểu dáng 749 M Bicolor 5 chấu màu đen bóng mờ.   ',
    textHead: '   Mâm xe bằng hợp kim nhẹ 22 inch kiểu dáng 749 M Bicolor 5 chấu màu đen bóng mờ.   ',
    textBody:
      'Mâm xe bằng hợp kim nhẹ 22 inch M Performance chất lượng cao, tối ưu hóa trọng lượng kiểu dáng 749 M Bicolour 5 chấu màu đen Jet Black với logo chữ M sắc màu và chữ M Performance. Mâm xe trước, kích cỡ mâm 9,5J x 22, không có lốp.',
  },
];

function PkChinhHang() {
  return (
    <>
      <div>
        <General content={content} />
      </div>
    </>
  );
}

export default PkChinhHang;

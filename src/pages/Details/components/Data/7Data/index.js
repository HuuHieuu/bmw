import bmw735imsport from '~/assets/image/7Series/735iMSport.webp';
import bmw735ipure from '~/assets/image/7Series/735iPure.webp';
import bmw740ipure from '~/assets/image/7Series/740iPure.webp';

import bmw735imsport_lower from '~/assets/image/7Series/735iM_lower.jpeg';
import bmw735ipure_lower from '~/assets/image/7Series/735iPure_lower.jpeg';
import bmw740ipure_lower from '~/assets/image/7Series/740iPure_lower.jpeg';

import nt1 from '~/assets/image/7Series/nt1.jpg';
import nt2 from '~/assets/image/7Series/nt2.jpg';
import nt3 from '~/assets/image/7Series/nt3.jpg';
import nt4 from '~/assets/image/7Series/nt4.jpg';
import nt5 from '~/assets/image/7Series/nt5.jpg';
import nt6 from '~/assets/image/7Series/nt6.jpg';

import cn1 from '~/assets/image/5Series/cn1.jpg';
import cn2 from '~/assets/image/5Series/cn2.jpg';
import cn3 from '~/assets/image/5Series/cn3.jpg';
import cn4 from '~/assets/image/5Series/cn4.jpg';

const tabItems = [{ label: 'Mẫu xe' }];
const b5_imgEx = [
  {
    src: bmw735imsport,
    alt: '735i M Sport',
  },
  {
    src: bmw735ipure,
    alt: '735i Pure Excellence',
  },
  {
    src: bmw740ipure,
    alt: '740i Pure Excellence',
  },
];

const x4_imgMamXe = [];
const x4_imgClg = [];
const x4_imgtt = [];

const imageLowerColor = [
  {
    src: bmw735imsport_lower,
    alt: '735i M Sport',
    text: '735i M Sport',
  },
  { src: bmw735ipure_lower, alt: '735i Pure Excellence', text: '735i Pure Excellence' },
  { src: bmw740ipure_lower, alt: '740i Pure Excellence', text: '740i Pure Excellence' },
];

const imageLowerMamXe = [];
const imageLowerChatLieuGhe = [];
const imageLowerTrangTri = [];

const contentData = [
  {
    src: nt1,
    alt: ' ĐÈN CHÀO MỪNG WELCOME LIGHT CARPET PHONG CÁCH MỚI. ',
    textHead: ' ĐÈN CHÀO MỪNG WELCOME LIGHT CARPET PHONG CÁCH MỚI. ',
    textBody:
      'Đèn chào mừng Welcome Light Carpet được thiết kế với các khối hình sắc cạnh bắt mắt, tích hợp trong hệ thống Comfort Access System, tự động sáng khi chủ nhân tiến đến gần xe.',
  },
  {
    src: nt2,
    alt: ' CÔNG NGHỆ ĐÈN LED THÍCH ỨNG MỚI CỦA BMW 7 SERIES MỚI ',
    textHead: ' CÔNG NGHỆ ĐÈN LED THÍCH ỨNG MỚI CỦA BMW 7 SERIES MỚI ',
  },
  {
    src: nt3,
    alt: '  MÂM XE HỢP KIM NHẸ KÍCH THƯỚC 20-INCH VỚI THIẾT KẾ CHẤU HÌNH NGÔI SAO PHONG CÁCH 905 BICOLOUR  ',
    textHead: '  MÂM XE HỢP KIM NHẸ KÍCH THƯỚC 20-INCH VỚI THIẾT KẾ CHẤU HÌNH NGÔI SAO PHONG CÁCH 905 BICOLOUR  ',
  },
  {
    src: nt4,
    alt: ' MÀU SƠN ĐỘC QUYỀN M CARBON BLACK ',
    textHead: ' MÀU SƠN ĐỘC QUYỀN M CARBON BLACK ',
  },
  {
    src: nt5,
    alt: ' THIẾT KẾ MẶT SAU ĐỘC ĐÁO ',
    textHead: ' THIẾT KẾ MẶT SAU ĐỘC ĐÁO ',
  },
  {
    src: nt6,
    alt: '  CHI TIẾT GÂN NỔI 3D NỔI BẬT TRÊN BMW 7 SERIES MỚI ',
    textHead: '  CHI TIẾT GÂN NỔI 3D NỔI BẬT TRÊN BMW 7 SERIES MỚI ',
  },
];

const contentData2 = [
  {
    src: cn1,
    alt: ' Công nghệ hybrid nhẹ của Sedan BMW 5 Series. ',
    textHead: ' Công nghệ hybrid nhẹ của Sedan BMW 5 Series. ',
    textBody:
      'Công nghệ hybrid nhẹ nhàng giúp thu hồi động năng khi phanh và hỗ trợ động cơ đốt khi tăng tốc. Công nghệ này vừa giúp bạn giảm mức tiêu thụ nhiên liệu và khí xả vừa cungc ấp cho bạn lợi thế năng động vượt trội. Công nghệ hybrid này cũng giúp chức năng Automatic Start/Stop chạy nhanh hơn và thoải mái hơn nhiều.',
  },
  {
    src: cn2,
    alt: ' Hệ thống treo thích ứng. ',
    textHead: '  Hệ thống treo thích ứng.  ',
    textBody:
      'Hệ thống treo thích ứng giúp bạn có thể điều chỉnh lý tưởng các đặc tính giảm chấn phù hợp với mọi tình huống lái xe liên quan, cải thiện độ thoải mái khi lăn và đông lực lái. Ngoài thiết lập chế độ COMFORT tiêu chuẩn cho mức độ thoải mái lái xe tăng cao, chương trình SPORT cũng có thể được lựa chọn cho thiết lập giảm chấn đậm chất thể thao.',
  },
  {
    src: cn3,
    alt: ' Hệ thống lái chủ động tích hợp. ',
    textHead: '  Hệ thống lái chủ động tích hợp.  ',
    textBody:
      'Hệ thống đánh lái bánh sau kết hợp hỗ trợ tùy theo góc lái trên trục trước và bánh sau - cũng góp phần vào việc đánh lái. Ở tốc độ thấp hơn, hệ thống mang lại khả năng cơ động và nhanh nhẹn hơn bằng cách quay bánh sau đối diện với bánh trước. Bắt đầu trong khoảng từ 60 đến 80 km/h, bánh sau quay song song với bánh trước để tăng độ ổn định và thoải mái.',
  },
  {
    src: cn4,
    alt: ' BMW xDrive. ',
    textHead: ' BMW xDrive.  ',
    textBody:
      'Hệ thống dẫn động bốn bánh BMW xDrive thông minh giúp phân bổ lực truyền động đến bánh trước và bánh sau một cách mượt mà và linh hoạt nhằm tạo ra lực bám đường, đảm bảo động lực lái tối đa và an toàn tuyệt đối trong mọi tình huống lái xe. Thậm chí còn nhanh hơn nữa nhờ cơ chế phân phối năng lượng được kiểm soát điện tử như đối trọng với xe vượt hoặc xe dưới ở khúc cua.',
  },
];

export {
  contentData,
  contentData2,
  tabItems,
  b5_imgEx,
  x4_imgtt,
  x4_imgClg,
  x4_imgMamXe,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerTrangTri,
  imageLowerChatLieuGhe,
};

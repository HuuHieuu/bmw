import dauxe from '~/assets/image/bmw_x5/dauxe.jpg';
import thanxe from '~/assets/image/bmw_x5/thanxe.jpg';
import duoixe from '~/assets/image/bmw_x5/duoixe.jpg';

import camgiaclai from '~/assets/image/bmw_x5/camgiaclai.jpg';
import hotrovanhanh from '~/assets/image/bmw_x5/hotrovanhanh.jpg';

import flex1 from '~/assets/image/bmw_x4/flex1.jpeg';
import flex2 from '~/assets/image/bmw_x4/flex2.jpg';

import amthanh from '~/assets/image/bmw_x5/amthanh.jpg';
import remchenang from '~/assets/image/bmw_x5/remchenang.jpg';

import x5_sport from '~/assets/image/bmw_x5/x5Sport.webp';
import x5_xline from '~/assets/image/bmw_x5/x5Xline.webp';

import x5_lower_sport from '~/assets/image/bmw_x5/x5_lower_sport.jpeg';
import x5_lower_xline from '~/assets/image/bmw_x5/x5_lower_xline.jpeg';

const tabItems = [{ label: 'Mẫu xe' }];
const x5_imgEx = [
  {
    src: x5_sport,
    alt: 'x5_sport',
  },
  {
    src: x5_xline,
    alt: 'x5_xline',
  },
];

const x4_imgMamXe = [];
const x4_imgClg = [];
const x4_imgtt = [];

const imageLowerColor = [
  {
    src: x5_lower_sport,
    alt: 'x5_MSport',
    text: 'X5 xDrive40i M Sport',
  },
  { src: x5_lower_xline, alt: 'x5_XLine', text: 'X5 xDrive40i xLine' },
];

const imageLowerMamXe = [];
const imageLowerChatLieuGhe = [];
const imageLowerTrangTri = [];

const contentFlex = {
  src: flex1,
  alt: 'THIẾT KẾ PHÍA TRƯỚC CỦA BMW X4',
  head: 'THIẾT KẾ PHÍA TRƯỚC CỦA BMW X4 VỚI LƯỚI TẢN NHIỆT HÌNH BẦU DỤC MỚI',
  body: 'Nhờ mặt trước được diễn giải lại hoàn toàn, BMW X4 có một sự biểu hiện tiên tiến hơn bao giờ hết. Lưới tản nhiệt hình bầu dục đặc biệt góc cạnh, cản sau được thiết kế lại với các khe hút gió thẳng đứng và đèn pha LED hạ thấp 10 mm hoàn toàn mang đến tính hiện đại và thể thao từ mọi góc nhìn.',
};

const contentFlex2 = {
  src: flex2,
  alt: 'THIẾT KẾ MẶT SAU CỦA BMWX4',
  head: 'THIẾT KẾ MẶT SAU CỦA BMWX4 VỚI ĐÈN CHIỀU HẬU TRÀN VIỀN ĐÈN LED',
  body: 'Đuôi xe BMW X4 thể hiện sự uy quyền và mang tính thể thao. Đèn hậu tràn viền LED với kiểu dáng mới đảm bảo sự hiển thị nhiều hơn, trong khi ống xả rộng, phẳng, dạng tự do nhấn mạnh tính hiện đại của Sports Activity Coupé tiên tiến. Kết hợp với phần bảo vệ gầm được thiết kế lại nằm giữa ống xả, đuôi xe BMW X4 thể hiện rõ nét, mạnh mẽ trên mặt đường.',
};

// design
const contentData = [
  {
    src: dauxe,
    alt: ' Thiết kế mới phần đầu xe. ',
    textHead: '  Thiết kế mới phần đầu xe.  ',
    textBody:
      'Lưới tản nhiệt thiết kế mới với các nan to bản, kích thước lớn tạo vẻ bề thế, cứng cáp nhận diện phần đầu xe kết hợp cụm đèn trước với thiết kế biểu tượng X cùng áp dụng công nghệ Adaptive LED bảo đảm cường độ chiếu sáng, tự động điều chỉnh, phân vùng ánh sáng, không làm chói mắt người/ phương tiện đối diện và giúp tiết kiệm năng lượng.\n  Cản trước thiết kế nổi bật với hốc gió khối hình tam giác cùng viền chrome tạo điểm nhấn và thu hút ánh nhìn về phía trung tâm đầu xe.',
  },
  {
    src: thanxe,
    alt: ' Thiết kế thân xe.  ',
    textHead: '  Thiết kế thân xe. ',
    textBody:
      'Thân xe được tối ưu hóa với kích thước tổng thể được mở rộng lên đến 4.935 x 2.004 x 1.765 mm kết hợp trang bị mâm xe 20 inch hợp kim đa chấu kiểu 740 M Bicolour và khe thoát gió thiết kế mới bên hông xe giúp cải thiện hơn tính khí động học cho mẫu xe BMW X5 mới \n  Ngoài ra, BMW X5 mới trở nên sang trọng, mạnh mẽ và khỏe khoắn hơn với trang bị bệ bước chân hợp kim nhôm cứng vững giúp hành khách lên xuống dễ dàng hơn cùng đèn chào mừng Welcome light carpet với họa tiết ánh sáng tinh tế, nổi bật và tự động bật sáng khi chủ nhân tiến lại gần xe.',
  },
  {
    src: duoixe,
    alt: ' Thiết kế mới đuôi xe. ',
    textHead: '  Thiết kế mới đuôi xe. ',
    textBody:
      'Cụm đèn hậu thiết kế mới hình L-shape đặc trưng, phân tầng, tạo hiệu ứng ánh sáng 3D và hiệu ứng dòng nước khi khóa/mở khóa xe cùng họa tiết trang trí làm nổi bật cụm đèn sau.\n  Cản sau với ốp bạc màu Glacier Silver dập nổi thiết kế mới tăng vẻ hầm hố đặc trưng của dòng BMW X.',
  },
];

const contentData2 = [
  {
    src: camgiaclai,
    alt: '  Khả năng vận hành mượt mà với khối động cơ mạnh mẽ ',
    textHead: '  Khả năng vận hành mượt mà với khối động cơ mạnh mẽ  ',
    textBody:
      'Tất cả phiên bản BMW X5 mới được ra mắt tại Việt Nam đều sở hữu động cơ 6 xi-lanh thẳng hàng kết hợp với công nghệ Mild Hybrid 48V sản sinh công suất tối đa 381 mã lực, mô-men xoắn cực đại 540Nm mang đến khả năng vận hành ấn tượng khi chỉ mất 5,4s để tăng tốc từ 0 - 100 km/h.\n BMW X5 mới được trang bị 3 chế độ lái ECO PRO/COMFORT/SPORT thay đổi linh hoạt qua điều khiển nút bấm, hứa hẹn mang đến những trải nghiệm cảm giác lái đầy phấn khích và phù hợp với cá tính riêng của chủ sở hữu.',
  },
  {
    src: hotrovanhanh,
    alt: ' Hệ thống hỗ trợ vận hành Mild Hybrid ',
    textHead: ' Hệ thống hỗ trợ vận hành Mild Hybrid ',
    textBody:
      'Hệ thống Mild Hybrid với động cơ điện 48V hỗ trợ động cơ đốt trong khởi động nhanh hơn 20% và giúp BMW X5 mới tiết kiệm nhiên liệu khi tốc độ xe vận hành dưới 15km/h ở chế độ Start/Stop (khởi động hoặc dừng đỗ xe). Công nghệ Mild Hybrid cung cấp tính năng Coasting chạy trớn bằng động cơ điện kết hợp với các chế độ lái ECO PRO và COMFORT giúp tăng khả năng tiết kiệm nhiên liệu, giảm lượng phát thải CO2. Hơn nữa, tính năng eBOOST của hệ thống Mild Hybrid cung cấp thêm khoảng 18,7 Hp công suất giúp hỗ trợ đắc lực cho động cơ đốt trong trong quá trình tăng tốc.',
  },
];

const contentData3 = [
  {
    src: amthanh,
    alt: '  Hệ thống âm thanh đẳng cấp trên BMW X5 mới. ',
    textHead: ' Hệ thống âm thanh đẳng cấp trên BMW X5 mới. ',
    textBody:
      'BMW X5 mới trang bị với hệ thống âm thanh 16 loa Harman Kardon gia tăng trải nghiệm tiện nghi đẳng cấp cho không gian nội thất.',
  },
  {
    src: remchenang,
    alt: ' Trang bị rèm che nắng hàng ghế sau ',
    textHead: ' Trang bị rèm che nắng hàng ghế sau ',
    textBody:
      'Không gian nội thất của BMW X5 mới trở nên tiện nghị và dễ chịu hơn với trang bị rèm che nắng hàng ghế sau giúp hành khách có được trải nghiệm thoải mái nhất khi di chuyển trên những hành trình.',
  },
];

export {
  tabItems,
  x5_imgEx,
  x4_imgMamXe,
  x4_imgClg,
  x4_imgtt,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
  contentData,
  contentData2,
  contentData3,
  contentFlex,
  contentFlex2,
};

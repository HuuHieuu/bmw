import x3_co_ban from '~/assets/image/bmw_x3/x3_co_ban.webp';
import x3_xline from '~/assets/image/bmw_x3/x3_xline.webp';
import x3_luxury_line from '~/assets/image/bmw_x3/x3_luxury_line.webp';
import x3_msport from '~/assets/image/bmw_x3/x3_msport.webp';

//data
import x3_cs1 from '~/assets/image/bmw_x3/cs1.jpeg';
import x3_cs2 from '~/assets/image/bmw_x3/cs2.jpg';
import x3_cs3 from '~/assets/image/bmw_x3/cs3.jpg';
import x3_cs4 from '~/assets/image/bmw_x3/cs4.jpg';
import x3_cs5 from '~/assets/image/bmw_x3/cs5.jpg';

// dk bằng nút bấm
import ht1 from '~/assets/image/bmw_x3/ht1.jpg';
import ht2 from '~/assets/image/bmw_x3/ht2.jpg';
import ht3 from '~/assets/image/bmw_x3/ht3.jpg';

//sac
import i7_tb_sac1 from '~/assets/image/i7_tb_sac1.jpg';
import i7_tb_sac2 from '~/assets/image/i7_tb_sac2.jpg';
import i7_tb_sac3 from '~/assets/image/i7_tb_sac3.jpg';

// kết nối liên tục
import kn1 from '~/assets/image/bmw_x3/kn1.jpg';
import kn2 from '~/assets/image/bmw_x3/kn2.jpg';
import kn3 from '~/assets/image/bmw_x3/kn3.jpg';

// hướng đến tương lai
import ft1 from '~/assets/image/bmw_x3/ft1.jpg';
import ft2 from '~/assets/image/bmw_x3/ft2.jpg';
import ft3 from '~/assets/image/bmw_x3/ft3.jpg';
import ft4 from '~/assets/image/bmw_x3/ft4.jpg';
import ft5 from '~/assets/image/bmw_x3/ft5.jpg';

const tabItems = [{ label: 'Mẫu xe' }];

const x3_imgEx = [
  {
    src: x3_co_ban,
    alt: 'x3_mẫu xe cơ bản',
  },
  {
    src: x3_xline,
    alt: 'x3_mẫu xe xLine',
  },
  {
    src: x3_luxury_line,
    alt: 'x3_mẫu xe Luxury Line',
  },
  {
    src: x3_msport,
    alt: 'x3_mẫu xe MSport',
  },
];

// top
const ix3_imgMamXe = [];
const ix3_imgClg = [];
const ix3_imgTrangtri = [];

// bot
const imageLowerColor = [
  { src: x3_co_ban, alt: 'x3_cơ bản', text: 'Mẫu xe cơ bản' },
  { src: x3_xline, alt: 'x3_xLine', text: 'Mẫu xe xLine' },
  { src: x3_luxury_line, alt: 'x3_luxury line', text: 'Mẫu xe Luxury Line' },
  { src: x3_msport, alt: 'x3_MSport', text: 'Mẫu xe M Sport' },
];

const imageLowerMamXe = [];
const imageLowerChatLieuGhe = [];
const imageLowerTrangTri = [];

// công suất nổi bật
const contentData = [
  {
    src: x3_cs1,
    alt: 'BMWxDrive',
    textHead: '  BMW xDrive.  ',
    textBody:
      'Hệ thống truyền động bốn bánh BMW xDrive thông minh phân bổ công suất dẫn động nhịp nhàng và linh hoạt cho các bánh xe phía trước và phía sau để có được độ bám đường, động cơ và mức độ an toàn tối đa trong mọi tình huống điều khiển xe. Không những vậy, hệ thống phân bổ công suất được điều khiển điện tử sẽ điều chỉnh cân bằng một cách linh hoạt trong các trường hợp đánh lái thừa hoặc thiếu tại các khúc cua.',
  },
  {
    src: x3_cs2,
    alt: 'Experience Control',
    textHead: '   Hệ thống chuyển đổi chế độ vận hành Driving Experience Control. ',
    textBody:
      'Hệ thống chuyển đổi chế độ vận hành Driving Experience Control cho phép người điều khiển lựa chọn giữa chế độ COMFORT tiêu chuẩn, chế độ ECO PRO hiệu quả hơn, chế độ SPORT, để bạn có lái xe chủ động hơn nữa. Chức năng Chế độ thích ứng với tương tác mới liên tục điều chỉnh hệ thống treo thích ứng, hệ thống lái và hệ thống truyền động Steptronic để phù hợp với tình huống lái xe hiện tại.',
  },
  {
    src: x3_cs3,
    alt: 'Steptronic Sport',
    textHead: '  Hệ thống truyền động Steptronic Sport.  ',
    textBody:
      ' Hệ thống truyền động Steptronic Sport 8 cấp cung cấp chuyển số Cho dù sử dụng lẫy chuyển số hoặc cần số, tự động hoặc thủ công, mục đích chỉ để tạo sự thoải mái khi lái xe hoặc động cơ đáng kinh ngạc. Khi ở chế độ SPORT và cần số ở vị trí S/M bên trái, cần số được cấu hình để đạt hiệu năng tối đa',
  },
  {
    src: x3_cs4,
    alt: 'Đuôi xe',
    textHead: '  Khí động học.  ',
    textBody:
      ' Với các phương pháp mục tiêu tập trung vào Khí động học, BMW đã tối ưu hóa hệ số và hiệu quả kéo cũng như âm học bên trong. Mức tiêu thụ nhiên liệu cũng được cải thiện. Lưới tản nhiệt hình quả thận với luồng khí chủ động, Khe thoát gió, Quạt cắt gió ở bánh xe phía trước và Bánh xe khí động học đều là các phương pháp mục tiêu và chi tiết để tiếp tục giảm lực cản không khí.',
  },
  {
    src: x3_cs5,
    alt: 'Đuôi xe',
    textHead: '  Lưới tản nhiệt hình quả thận với luồng khí chủ động.  ',
    textBody:
      'Lưới tản nhiệt hình quả thận với luồng khí chủ động thể hiện được sự kết nối trong hiệu suất khí động học. Khi không cần làm mát, xe tự động đóng lưới tản nhiệt với các lỗ thông hơi và do đó, giảm được lượng khí bay vào khoang động cơ. Điều này giúp tối ưu hóa khí động học và mức tiêu thụ nhiên liệu.',
  },
];

// dk bằng nút bấm
const contentData2 = [
  {
    src: ht1,
    alt: 'Hệ thống định vị',
    textHead: '  Hệ thống định vị Navigation system Professional.  ',
    textBody:
      'Hệ thống định vị Navigation system Professional, bao gồm giao diện kết nối USB, màn hình màu 10.25” LCD và Radio BMW Professional có đầu DVD, đi kèm với bộ nhớ 20 GB dùng cho các tập tin âm thanh. Hệ thống được vận hành trực quan thông qua Bộ điều khiển cảm ứng iDrive Touch Controller hoặc bảy dấu trang chức năng hoặc màn hình cảm ứng.',
  },
  {
    src: ht2,
    alt: 'Màn hiển thị',
    textHead: '   Màn hiển thị trên kính chắn gió BMW Head-Up Display.  ',
    textBody:
      'Màn hình màu hiển thị thông tin trên kính chắn gió BMW Head-Up Display chiếu mọi thông tin liên quan trực tiếp vào tầm quan sát của người điều khiển, qua đó cho phép họ tập trung hoàn toàn vào việc lái xe. Màn hình này hiển thị các thông tin như tốc độ hiện tại, hướng dẫn điều hướng, thông tin giới hạn tốc độ bao gồm đèn báo cấm vượt, cùng với danh bạ điện thoại và danh sách các phương tiện giải trí.',
  },
  {
    src: ht3,
    alt: 'Màn hình bảng điều khiển',
    textHead: ' Màn hình bảng điều khiển xeô đa chức năng.  ',
    textBody:
      'Màn hình bảng điều khiển xe đa chức năng với công nghệ Black Panel và đường chéo màn hình 12” mang đến các thông tin trực quan rất ấn tượng về trải nghiệm lái xe. Có thể hiển thị ba chế độ khác nhau và màn hình chuyên biệt – mỗi màn hình đều có tông màu và phong cách đồ họa riêng – trong cụm đồng hồ: ECO PRO, COMFORT và SPORT.',
  },
];

// kết nối ltuc
const khamPhaCNMoi = [
  {
    src: kn1,
    alt: 'Wifi',
    textHead: '  Điểm truy cập Wifi. ',
    textBody:
      'Tham gia các cuộc gọi hội nghị qua video trên máy tính bảng của bạn hoặc phát trực tuyến tập cuối của loạt phim yêu thích của bạn trên điện thoại thông minh. Điểm truy cập Wifi là cách truy cập trực tuyến với tốc độ LTE (nếu có) bằng cách sử dụng thẻ SIM được cài đặt trên xe của bạn. Bạn và bạn đồng hành của mình có thể lướt web tối đa trên mười thiết bị',
  },
  {
    src: kn2,
    alt: 'điểm đỗ xe',
    textHead: '  Thông tin về điểm đỗ xe trên đường. ',
    textBody:
      'Điểm đỗ xe gần nhất ở đâu? Thay vì phải mất thời gian tìm kiếm, sử dụng ứng dụng Thông tin về điểm đỗ xe trên đường sẽ giúp lái xe tìm được điểm đỗ xe nhanh hơn Những điểm đỗ xe phù hợp sẽ được hiển thị màu xanh trên bản đồ điều hướng. Các điểm đỗ xe trống gần đó đều được đánh chữ P.',
  },
  {
    src: kn3,
    alt: 'trợ lý di động',
    textHead: '  Ứng dụng trợ lý di động cá nhân BMW Connected+. ',
    textBody:
      'Chiếc xe BMW và đi động thông minh của bạn có thể hợp nhất để tạo thành một thể duy nhất với Ứng dụng trợ lý di động cá nhân BMW Connected+. Sử dụng các tính năng cá nhân hóa của Ứng dụng trợ lý di động cá nhân BMW Connected ngay cả trong và ngoài xe. Chia sẻ thông tin hành trình với bạn bè, tìm đường đi chính xác hoặc kiểm soát ngôi nhà thông minh của bạn.',
  },
];

// hướng đến tương lai
const huongdentuonglai = [
  {
    src: ft1,
    alt: 'ft1',
    textHead: '  Hệ thống chuyển đổi chế độ vận hành Driving Experience Control.  ',
    textBody:
      'Với Hệ thống chuyển đổi chế độ vận hành Driving Experience Control, bạn có thể lựa chọn giữa 4 chế độ lái: ECO PRO, COMFORT, SPORT và SPORT+ bất cứ khi nào. Các chương trình lái mang đến hiệu quả khác nhau trong việc quản lý lái và thiết lập các đặc tính hệ thống treo. Chế độ ECO PRO được thiết kế nhằm mang lại hiệu suất lái tối đa và các đặc tính hệ thống treo tiện lợi, trong khi chế độ SPORT+ có công suất bổ sung lên tới 30 kW tập trung vào động cơ mang tính thể thao.',
  },
  {
    src: ft2,
    alt: 'ft2',
    textHead: '  Cụm đồng hồ lai. ',
    textBody:
      'Với cụm đồng hồ lai, bạn sẽ luôn có sẵn tất cả những thông tin liên quan về động cơ lai sạc điện cải tiến một cách trọn vẹn. Ví dụ, bạn có thể đọc trên màn hình hiển thị của động cơ điện cũng như các thông số về mức sạc đối với xe hoàn toàn sử dụng điện và xe lai kết hợp.',
  },
  {
    src: ft3,
    alt: 'ft3',
    textHead: '  Nắp ổ sạc bao gồm cả thông tin về tình trạng sạc điện. ',
    textBody:
      'Cổng sạc ngoài của bộ kích điện ắc quy được đặt sau nắp ổ sạc ở bên trái của panen hông trước. Điều này bảo vệ ổ cắm khỏi tác động của môi trường. Một màn hình LED hiển thị tình trạng mức sạc hiện tại.',
  },
  {
    src: ft4,
    alt: 'ft4',
    textHead: ' Động cơ lai sạc điện. ',
    textBody:
      'Động cơ lai sạc điện cải tiến kết hợp cùng với động cơ đốt hiệu quả và động cơ điện mạnh mẽ. Công suất đầu ra hệ thống đặc biệt cao mang đến sự tiện nghi của hệ thống đốt, đồng thời việc lái xe sẽ không gây ra khí thải cục bộ.',
  },
  {
    src: ft5,
    alt: 'ft5',
    textHead: '  Hệ thống âm thanh cảnh báo dành cho người đi bộ. ',
    textBody:
      'Với hệ thống âm thanh cảnh báo dành cho người đi bộ, xe tạo nên nhạc hiệu tao nhã với vận tốc lên đến 30 km/ h để đảm bảo người đi đường khác nhận ra chiếc xe đang tiến gần đến họ. Hệ thống được tự động kích hoạt ngay khi khởi động xe. ',
  },
];

export {
  tabItems,
  x3_imgEx,
  ix3_imgMamXe,
  ix3_imgClg,
  ix3_imgTrangtri,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
  contentData,
  contentData2,
  khamPhaCNMoi,
  huongdentuonglai,
};

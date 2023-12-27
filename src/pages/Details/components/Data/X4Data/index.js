import x4_color from '~/assets/image/bmw_x4/x4_white.webp';
import x4_mamxe from '~/assets/image/bmw_x4/x4_mamxe.webp';
import x4_clg from '~/assets/image/bmw_x4/x4_clg.webp';

import flex1 from '~/assets/image/bmw_x4/flex1.jpeg';
import flex2 from '~/assets/image/bmw_x4/flex2.jpg';

import twinPower from '~/assets/image/bmw_x4/twinPow.jpg';
import xDrive from '~/assets/image/bmw_x4/xDrive.jpg';
import taylaithethao from '~/assets/image/bmw_x4/taylaithethao.jpg';
import steptronic from '~/assets/image/bmw_x4/steptronic.jpg';

import liveCockpit from '~/assets/image/bmw_x4/liveCockpit.jpg';
import headUpDisplay from '~/assets/image/bmw_x4/headUpDisplay.jpg';
import vanhanh from '~/assets/image/bmw_x4/vanhanh.jpg';

import pk1 from '~/assets/image/bmw_x4/pk1.jpg';
import pk2 from '~/assets/image/bmw_x4/pk2.jpg';
import pk3 from '~/assets/image/bmw_x4/pk3.jpg';
import pk4 from '~/assets/image/bmw_x4/pk4.jpg';
import pk5 from '~/assets/image/bmw_x4/pk5.jpg';

import p1 from '~/assets/image/bmw_x4/luoitannhiet.jpg';
import p2 from '~/assets/image/bmw_x4/napguong.jpg';
import p3 from '~/assets/image/bmw_x4/banhxe.jpg';
import p4 from '~/assets/image/bmw_x4/volang.jpg';
import p5 from '~/assets/image/bmw_x4/thamchuichan.jpg';
import p6 from '~/assets/image/bmw_x4/bocangten.jpg';

const tabItems = [{ label: 'Màu ngoại thất' }, { label: 'Mâm xe' }, { label: 'Chất liệu ghế' }];
const x4_imgEx = [
  {
    src: x4_color,
    alt: 'x4_white_alpine',
  },
];

const x4_imgMamXe = [
  {
    src: x4_mamxe,
    alt: 'x4_mam_xe',
  },
];
const x4_imgClg = [
  {
    src: x4_clg,
    alt: 'x4_chat_lieu_ghe',
  },
];
const x4_imgtt = [];

const imageLowerColor = [];

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
    src: twinPower,
    alt: 'TwinPower turbo',
    textHead: ' Động cơ TwinPower Turbo ',
    textBody:
      'Động cơ TwinPower Turbo 2.0 lít 4 xi-lanh mang đến sự hài lòng tối đa Sản phẩm nổi bật nhờ vào khả năng chuyển đổi nhanh và phản ứng thanh thoát ngay cả khi quay theo luật.',
  },
  {
    src: xDrive,
    alt: ' BMW xDrive. ',
    textHead: '  BMW xDrive. ',
    textBody:
      'Hệ thống dẫn động bốn bánh BMW xDrive thông minh giúp phân bổ lực truyền động đến bánh trước và bánh sau một cách mượt mà và linh hoạt nhằm tạo ra lực bám đường, đảm bảo động lực lái tối đa và an toàn tuyệt đối trong mọi tình huống lái xe.',
  },
  {
    src: taylaithethao,
    alt: ' tay lái thể thao ',
    textHead: '   Tay lái thể thao. ',
    textBody:
      'Hệ thống trợ lực tay lái thể thao biến đổi với Servotronic tạo ra phản ứng lái trực tiếp và nhanh nhẹn và đảm bảo rằng cần ít nỗ lực thể chất hơn để xoay tay lái. Điều này giúp cải thiện khả năng xử lý khi lái xe linh hoạt hơn và giảm thiểu tác động lực cần thiết để đánh lái khi đỗ xe và rẽ.',
  },
  {
    src: steptronic,
    alt: '  Hệ truyền động thể thao Steptronic.  ',
    textHead: ' Hệ truyền động thể thao Steptronic. ',
    textBody:
      'Hộp số Steptronic Sport 8 cấp mang đến khả năng chuyển số vô cùng thể thao. Dù vận hành ở chế độ tự động hay số sàn bằng cách sử dụng cần chọn hoặc lẫy chuyển số - tạo cảm giác lái thoải mái hoặc cực kỳ năng động.',
  },
];

const contentData2 = [
  {
    src: liveCockpit,
    alt: ' BMW Live Cockpit Plus. ',
    textHead: ' BMW Live Cockpit Plus. ',
    textBody:
      'BMW Live Cockpit Plus với chức năng điều hướng bao gồm bảng điều khiển với cụm đồng hồ 5,7", Màn hình điều khiển cảm ứng 8,8" độ phân giải cao và Bộ điều khiển cảm ứng iDrive trên bảng điều khiển trung tâm. Hệ điều hành BMW 6.0 cũng có thể được vận hành thông qua Bộ điều khiển iDrive.',
  },
  {
    src: headUpDisplay,
    alt: ' Chức năng hiển thị thông tin trên kính chắn gió (BMW Head-Up Display). ',
    textHead: ' Chức năng hiển thị thông tin trên kính chắn gió (BMW Head-Up Display). ',
    textBody:
      'Màn hình BMW Head-Up Display đủ màu hiển thị trực tiếp tất cả thông tin liên quan đến hành trình vào tầm nhìn của người lái, từ đó giúp họ hoàn toàn tập trung vào việc lái xe. Màn hình hiển thị bao gồm các dữ liệu như tốc độ hiện tại, hướng dẫn chỉ đường, khu vực giới hạn tốc độ và nhắc nhở người lái tránh vi phạm, danh bạ điện thoại và danh sách giải trí.',
  },
  {
    src: vanhanh,
    alt: ' Khái niệm vận hành trực quan. ',
    textHead: ' Khái niệm vận hành trực quan. ',
    textBody:
      'Việc vận hành hệ thống Thông tin giải trí giờ đây thậm chí còn dễ dàng hơn, rõ ràng hơn và nhiều thông tin hơn. Người lái có thể điều khiển thông qua màn hình cảm ứng, Bộ điều khiển iDrive, điều khiển bằng giọng nói hoặc điều khiển bằng cử chỉ, tùy theo sở thích của họ. Các ô bây giờ được hiển thị dưới dạng ô trực tiếp trên menu chính thay vì chế độ xem menu tĩnh.',
  },
];

const phukien = [
  {
    src: pk1,
    alt: ' Mâm hợp kim nhẹ BMW 20 inch chấu Y 695 màu Jetblack mờ, bộ mâm hoàn chỉnh dành cho mùa hè. ',
    textHead: ' Mâm hợp kim nhẹ BMW 20 inch chấu Y 695 màu Jetblack mờ, bộ mâm hoàn chỉnh dành cho mùa hè. ',
    textBody:
      'Mâm bánh xe hợp kim nhẹ 20 inch BMW kiểu chấu Y 695 màu Jetblack mờ. Bộ bánh xe hoàn chỉnh dành cho mùa hè với máy đo áp suất lốp và lốp runflat',
  },
  {
    src: pk2,
    alt: ' Thùng mui BMW 420 Đen / Bạc Titan.  ',
    textHead: ' Thùng mui BMW 420 Đen / Bạc Titan.  ',
    textBody:
      'Thùng mui có khóa màu Đen / Bạc Titan, có thể mở được từ cả hai bên với dung tích 420 lít, tương thích với tất cả các hệ thống giá nóc của BMW.',
  },
  {
    src: pk3,
    alt: ' Thùng mui BMW 420 Đen / Bạc Titan.  ',
    textHead: '  Thảm lót sàntrước BMW chống chịu mọi điều kiện thời tiết ',
    textBody:
      ' Thảm lót sàn BMW phù hợp với mọi điều kiện thời tiết giúp bảo vệ sàn để chân khỏi ẩm ướt và bụi bẩn. Màu đen với chữ X4 bằng thép không gỉ. ',
  },
  {
    src: pk4,
    alt: '  Thiết bị kéo xe đạp BMW Pro 2.0 phía sau ',
    textHead: ' Thiết bị kéo xe đạp BMW Pro 2.0 phía sau ',
    textBody:
      'Giá đỡ xe đạp sau BMW Pro 2.0 nhẹ, ổn định cho hai xe đạp /xe đạp điện. Tải trọng tối đa 60 kg, có thể gấp gọn lại với nhau.',
  },
  {
    src: pk5,
    alt: '  BMW Advanced Car Eye 2.   ',
    textHead: ' BMW Advanced Car Eye 2. ',
    textBody:
      'Trong trường hợp có sự bất thường, camera full-HD có độ nhạy cao sẽ tự động ghi lại tình hình phía trước và phía sau xe.',
  },
];

const performance = [
  {
    src: p1,
    alt: ' Lưới tản nhiệt M Performance Kidney bằng sợi carbon. ',
    textHead: ' Lưới tản nhiệt M Performance Kidney bằng sợi carbon. ',
    textBody:
      'Thể hiện phong cách của bạn: Khung của lưới tản nhiệt hình quả thận M Performance được làm bằng sợi carbon cao cấp. Cho một diện mạo đặc biệt thanh lịch, thể thao và cá tính.',
  },
  {
    src: p2,
    alt: ' Nắp gương ngoại thất bằng sợi carbon M Performance ',
    textHead: '  Nắp gương ngoại thất bằng sợi carbon M Performance ',
    textBody:
      'Nắp gương bên ngoài M nổi bật được làm bằng sợi carbon tô điểm thêm dòng dõi công nghệ cao của xe, tô điểm thêm nét thể thao riêng.',
  },
  {
    src: p3,
    alt: ' Bánh xe rèn M Performance 21 inch chấu Y701 M Bicolor (Jetblack mờ, phay bóng). ',
    textHead: ' Bánh xe rèn M Performance 21 inch chấu Y701 M Bicolor (Jetblack mờ, phay bóng). ',
    textBody:
      'Mâm xe rèn 21" M Performance kiểu chấu Y 701 M màu Bicolor Jetblack mờ, được phay bóng. Mâm xe mùa hè hoàn chỉnh với máy đo áp suất lốp và lốp run-flat',
  },
  {
    src: p4,
    alt: '  Vô lăng M Performance.  ',
    textHead: '  Vô lăng M Performance.  ',
    textBody:
      'Với hình dáng nổi bật và tay nắm Alcantara đặc biệt, vô lăng M Performance mang đến bầu không khí xe đua thể thao không thể nhầm lẫn trong khoang lái.',
  },
  {
    src: p5,
    alt: ' Thảm chùi chân M Performance. ',
    textHead: ' Thảm chùi chân M Performance. ',
    textBody:
      'Vẻ ngoài cao cấp, khả năng cầm nắm vượt trội: Thảm trải sàn M Performance mang đến nét thể thao cá tính cho sàn để chân, giúp cho toàn bộ xe có một diện mạo năng động hơn.',
  },
  {
    src: p6,
    alt: '  Bọc ăng ten M Performance bằng sợi Aramid. ',
    textHead: ' Bọc ăng ten M Performance bằng sợi Aramid. ',
    textBody:
      'Vừa là điểm nhấn trực quan và vừa có chức năng trên nóc xe: tấm che trên không hình kim tự tháp M Performance.',
  },
];

export {
  tabItems,
  x4_imgEx,
  x4_imgMamXe,
  x4_imgClg,
  x4_imgtt,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
  contentData,
  contentData2,
  contentFlex,
  contentFlex2,
  phukien,
  performance,
};

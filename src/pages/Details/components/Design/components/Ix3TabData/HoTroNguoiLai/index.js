import classNames from 'classnames/bind';

import ix3_support1 from '~/assets/image/bmw_ix3/ix3_support1.jpeg';
import ix3_support2 from '~/assets/image/bmw_ix3/ix3_support2.jpg';
import ix3_support3 from '~/assets/image/bmw_ix3/ix3_support3.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: ix3_support1,
    alt: 'hỗ trợ lái xe an toàn',
    textHead: ' HỖ TRỢ LÁI XE AN TOÀN ',
    textBody:
      ' BMW iX3 trang bị Driving Assistant Professional, hệ thống hỗ trợ lái xe cao cấp cho các tình huống giao thông khác nhau. Bạn sẽ được hỗ trợ bởi các chức năng như Hỗ trợ lái và kiểm soát làn đường, Hỗ trợ dừng khẩn cấp và Hỗ trợ giữ làn đường với tính năng bảo vệ va chạm bên chủ động. Những chức năng này giúp bạn lái xe an toàn và thoải mái hơn',
  },
  {
    src: ix3_support2,
    alt: 'trợ lí đỗ xe thông minh',
    textHead: ' TRỢ LÝ ĐỖ XE THÔNG MINH ',
    textBody:
      'BMW iX3 trang bị trợ lý đỗ xe, giúp bạn đỗ xe một cách dễ dàng và an toàn. Bạn có thể sử dụng camera chiếu hậu để quan sát phía sau xe, hoặc kiểm soát khoảng cách đỗ xe chủ động để tránh va chạm khi đỗ xe. Bạn cũng có thể để cho hệ thống hỗ trợ đỗ xe tự động đỗ xe cho bạn, dù là song song, vuông góc hay rời khỏi song song.',
  },
  {
    src: ix3_support3,
    alt: 'điều hướng linh hoạt',
    textHead: ' ĐIỀU HƯỚNG LINH HOẠT ',
    textBody:
      ' chức năng mở rộng  Hỗ trợ Chỉ dẫn Lái và Làn đường có thể đề xuất thay đổi làn đường khi điều này trở nên cần thiết để đi theo tuyến đường điều hướng. Để thực hiện việc này, hệ thống sẽ xác định khoảng trống phù hợp trong dòng xe cộ đang lưu thông ở làn đường liền kề và sau đó hướng sự chú ý của bạn đến việc thay đổi làn đường.',
  },
];

function HoTroNguoiLai() {
  return (
    <>
      <div>
        <General content={content} />
      </div>
    </>
  );
}

export default HoTroNguoiLai;

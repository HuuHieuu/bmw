import nt1 from '~/assets/image/4MuiTran/noithat1.jpg';
import nt2 from '~/assets/image/4MuiTran/noithat2.jpg';
import nt3 from '~/assets/image/4MuiTran/noithat3.jpg';
import nt4 from '~/assets/image/4MuiTran/noithat4.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: nt1,
    alt: '   Vô lăng M Performance  ',
    textHead: '   Vô lăng M Performance   ',
    textBody:
      'Sự thật thú vị: Nhờ có khu vực tay lái được lót Alcantara, vô-lăng M Performance mang lại cảm giác và độ bám tuyệt vời - mang lại cảm giác lái thể thao hơn. Thiết kế đặc biệt và dải trung tâm làm bằng da đỏ nhấn mạnh phong cách đua xe thể thao của chiếc xe.',
  },
  {
    src: nt2,
    alt: '  Gói ốp nội thất M Performance bằng sợi carbon  ',
    textHead: '   Gói ốp nội thất M Performance bằng sợi carbon  ',
    textBody:
      ' Các chi tiết trang trí nội thất của M Performance được làm bằng carbon hở lỗ. Bằng những phương pháp xử lý đặc biệt không chỉ mang đến cho các chi tiết trang trí một vẻ ngoài đặc biệt nổi bật - các chi tiết trang trí còn gây ấn tượng với cảm giác độc đáo. Tạo nên một không gian thể thao cá nhân trong nội thất xe.',
  },
  {
    src: nt3,
    alt: '  Thảm lót sàn M Performance  ',
    textHead: '  Thảm lót sàn M Performance ',
    textBody:
      'Vẻ ngoài cao cấp, độ bám đường nổi bật: thảm lót sàn M Performance tạo thêm nét thể thao cá tính cho chỗ để chân, mang đến cho toàn bộ chiếc xe một diện mạo năng động hơn. Với chữ thêu M Performance. Thiết kế cao cấp được bo tròn bằng da bao quanh với đường khâu trang trí màu tương phản và chỉ màu M.',
  },
  {
    src: nt4,
    alt: '  Bệ cửa M Performance bằng sợi carbon.  ',
    textHead: '  Bệ cửa M Performance bằng sợi carbon.  ',
    textBody:
      'Để đặt chân vào thế giới thanh lịch: Bệ cửa M Performance với đường viền bằng sợi carbon chất lượng cao làm tăng vẻ thể thao và độc quyền cho chiếc xe. Được thiết kế tỉ mỉ theo thiết kế của xe và đã được kiểm tra theo các tiêu chí chất lượng nghiêm ngặt của BMW. Với gói thiết kế M Performance.',
  },
];

function NoiThat() {
  return (
    <>
      <div>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={content} />
      </div>
    </>
  );
}

export default NoiThat;

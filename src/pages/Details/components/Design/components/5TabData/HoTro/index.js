import luixe from '~/assets/image/5Series/luixe.jpeg';
import dentruoc from '~/assets/image/5Series/dentruoc.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: luixe,
    alt: '   Hỗ trợ lùi xe.  ',
    textHead: '   Hỗ trợ lùi xe.   ',
    textBody:
      'Hỗ trợ lùi xe 50m cuối cùng của quãng đường được điều khiển khi di chuyển về phía trước với vận tốc 35 km/h, để có thể lùi xe lại nếu cần. Bạn có thể thoái mái trong việc cầm lái và tập trung vào quan sát mọi thứ xung quanh xe.',
  },
  {
    src: dentruoc,
    alt: '   Cụm đèn trước BMW Laserlight. ',
    textHead: '    Cụm đèn trước BMW Laserlight. ',
    textBody:
      'Ở chế độ high-beam laser, BMW Laserlight chiếu sáng phạm vi lên đến 650 m, gần gấp đôi so với đèn pha thông thường. Khả năng chiếu sáng trong bóng tối tốt hơn giúp tăng độ an toàn đáng kể. Các điểm nhấn màu xanh lam và chữ “BMW Laser” trên đèn pha cũng nhấn mạnh các tiêu chuẩn công nghệ và tính thể thao của chiếc xe.',
  },
];

function HoTro() {
  return (
    <>
      <div>
        <General content={content} />
      </div>
    </>
  );
}

export default HoTro;

import nt1 from '~/assets/image/4MuiTran/nt1.jpg';
import nt2 from '~/assets/image/4MuiTran/nt2.jpg';
import nt3 from '~/assets/image/4MuiTran/nt3.jpg';
import nt4 from '~/assets/image/4MuiTran/nt4.jpg';
import nt5 from '~/assets/image/4MuiTran/nt5.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: nt1,
    alt: '  Đệm cản trước M Performance làm bằng sợi carbon  ',
    textHead: '  Đệm cản trước M Performance làm bằng sợi carbon   ',
    textBody:
      'Tuyên bố mạnh mẽ: đệm cản trước M Performance làm bằng sợi carbon làm nổi bật vẻ ngoài nam tính của chiếc xe một cách độc đáo. Một kiểu dáng thể thao độc đáo dành cho bất kỳ ai không chấp nhận thỏa hiệp.',
  },
  {
    src: nt2,
    alt: '  Lưới tản nhiệt thận kép M Performance bằng sợi carbon  ',
    textHead: '   Lưới tản nhiệt thận kép M Performance bằng sợi carbon  ',
    textBody:
      'Thể hiện phong cách của bạn: Khung của lưới tản nhiệt phía trước M Performance được làm bằng sợi carbon cao cấp được làm thủ công và các thanh trang trí bằng nhựa cực kỳ chắc chắn. Điểm nhấn trực quan ở phần đầu xe cho một cái nhìn đặc biệt thanh lịch, thể thao và cá tính.',
  },
  {
    src: nt3,
    alt: '  Mâm đúc chấu chữ Y 20" M Performance kiểu 795 M đen bóng mờ, bộ lốp mùa hè.  ',
    textHead: '   Mâm đúc chấu chữ Y 20" M Performance kiểu 795 M đen bóng mờ, bộ lốp mùa hè.  ',
    textBody:
      'Mâm đúc chất lượng cao chấu chữ Y 20" M Performance kiểu 795 M được thiết kế màu đen bóng mờ với màu & logo M nổi bật Bộ bánh xe TPMS mùa hè hoàn chỉnh với lốp run-flat, kích thước bánh xe 8J x 20 với cỡ lốp 225/35 R20 90Y XL RSC ở phía trước và 8,5J x 20 với cỡ lốp 255/30 R20 92Y XL RSC ở phía sau.',
  },
  {
    src: nt4,
    alt: '  Hệ thống phanh M Performance 18-inch  ',
    textHead: '  Hệ thống phanh M Performance 18-inch  ',
    textBody:
      'Đối với quãng đường phanh ngắn - ngay cả khi chịu ứng suất nhiệt cao: Hệ thống phanh 18 "M Performance trang bị đĩa phanh thể thao trọng lượng nhẹ có thông gió. Xe được trang bị phanh kẹp cố định bằng nhôm bốn piston ở phía trước và phanh kẹp nổi bằng nhôm một piston ở phía sau. Với màu đỏ M Performance. Với màu của logo M.',
  },
  {
    src: nt3,
    alt: '  Bệ cửa mở rộng M Performance bằng sợi carbon  ',
    textHead: '   Bệ cửa mở rộng M Performance bằng sợi carbon  ',
    textBody:
      'Hình ảnh đầy cảm hứng: phần mở rộng của bệ cửa xe bên hông M Performance được làm từ sợi carbon cao cấp và chế tác công phu bằng tay. Về mặt quang học, nó kéo dài tỷ lệ của chiếc xe, tạo cho nó một vẻ ngoài năng động hơn. Cho một diện mạo cực kỳ thể thao và thanh lịch.',
  },
];

function NgoaiThat() {
  return (
    <>
      <div>
        <General content={content} />
      </div>
    </>
  );
}

export default NgoaiThat;

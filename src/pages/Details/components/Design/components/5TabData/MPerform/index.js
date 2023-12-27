import pk1 from '~/assets/image/5Series/pk1_mp.jpg';
import pk2 from '~/assets/image/5Series/pk2_mp.jpg';
import pk3 from '~/assets/image/5Series/pk3_mp.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: pk1,
    alt: '    Đệm cản trước M Performance làm bằng carbon  ',
    textHead: '    Đệm cản trước M Performance làm bằng carbon   ',
    textBody:
      'Dấu ấn mạnh mẽ riêng: đệm cản trước M Performance làm bằng sợi carbon tối ưu hóa giá trị khí động học và làm nổi bật vẻ ngoài nam tính của chiếc xe một cách độc đáo. Dáng vẻ xe thể thao cá tính cho nhu cầu chính xác nhất.',
  },
  {
    src: pk2,
    alt: '   Bánh hợp kim nhẹ chấu đôi M Performance 20 inch kiểu 669 M.  ',
    textHead: '    Bánh hợp kim nhẹ chấu đôi M Performance 20 inch kiểu 669 M ',
    textBody:
      'Bánh hợp kim nhẹ M Performance 20 inch chất lượng cao được rèn và có hai màu Orbit Grey, mang đặc điểm là sự kết hợp độc quyền giữa lớp lót và bề mặt chạm khắc ở mặt ngoài với logo M. Trọn bộ bánh TPMS có lốp run-flat. Kích thước bánh trước 8J x 20 với cỡ lốp 245/35 R20 95Y XL RSC ở phía trước và 9J x 20 với cỡ lốp 275/30 R20 97Y XL RSC ở phía sau.',
  },
  {
    src: pk3,
    alt: '   Vô lăng M Performance.  ',
    textHead: '    Vô lăng M Performance ',
    textBody:
      'Cảm giác lái được nâng tầm: Nhờ có khu vực tay lái được lót Alcantara, vô-lăng M Performance mang lại cảm giác và độ bám tuyệt vời - mang lại cảm giác lái thể thao hơn. Đường viền độc đáo và điểm nhấn ở giữa được làm bằng da màu đỏ tăng thêm điểm nhấn cho dáng vẻ xe thể thao cá tính mạnh mẽ.',
  },
];

function MPerform() {
  return (
    <>
      <div>
        <General content={content} />
      </div>
    </>
  );
}

export default MPerform;

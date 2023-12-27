import pk1 from '~/assets/image/5Series/pk1_ch.jpg';
import pk2 from '~/assets/image/5Series/pk2_ch.jpg';
import pk3 from '~/assets/image/5Series/pk3_ch.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: pk1,
    alt: '   Hộp mui trần cabin BMW 520.  ',
    textHead: '   Hộp mui trần cabin BMW 520.   ',
    textBody:
      'Hộp mui trần cabin BMW hiện đại màu đen với các tấm ốp bằng bạc titan bên hông có dung tích chứa 520 lít và tương thích với mọi hệ thống giá nóc BMW. Do có thể mở từ cả hai bên và mỗi bên đều có khóa ba chạc ở giữa, thật tiện lợi khi chất hàng hóa và khóa chống trộm.',
  },
  {
    src: pk2,
    alt: '   Tấm lót khoang hành lý ',
    textHead: '    Tấm lót khoang hành lý ',
    textBody:
      'Thảm lót khoang hành lý chống trơn trượt, chống nước và bền bỉ với các đường viền nổi ở tất cả các bên và thiết kế vừa vặn giúp bảo vệ khoang hành lý khỏi bụi bẩn và hơi ẩm. Thảm màu đen bằng thép không gỉ thêm phần hoàn hảo cho nội thất xe.',
  },
  {
    src: pk3,
    alt: '   Giá đa năng BMW dành riêng cho hộp an toàn, Travel & Comfort. ',
    textHead: '    Giá đa năng BMW dành riêng cho hộp an toàn, Travel & Comfort. ',
    textBody:
      'Móc đa năng có thể điều chỉnh kích cỡ và được lắp với giá đỡ cơ bản hiện được cung cấp riêng hoặc thiết bị tùy chọn "Travel & Comfort". Móc đa năng giúp giữ đồ an toàn cho nhiều loại máy tính bảng Apple hoặc Samsung với hộp an toàn BMW từ 7 inch đến 11 inch. Móc có thể quay 360° và khóa theo mọi góc nghiêng mong muốn.',
  },
];

function ChinhHang() {
  return (
    <>
      <div>
        <General content={content} />
      </div>
    </>
  );
}

export default ChinhHang;

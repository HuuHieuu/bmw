import hop_mui from '~/assets/image/4Gran/mui.jpg';
import gia_treo from '~/assets/image/4Gran/giatreo.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: hop_mui,
    alt: '   Hộp mui trần cabin BMW 320 Màu đen/Bạc titan.  ',
    textHead: '   Hộp mui trần cabin BMW 320 Màu đen/Bạc titan.   ',
    textBody:
      'Hộp mui trần cabin có khóa màu đen/bạc tintan có thể mở từ cả hai bên có dung tích chứa 320 lít và tương thích với mọi hệ thống mui BMW.',
  },
  {
    src: gia_treo,
    alt: '   Giá treo xe đạp BMW.  ',
    textHead: '    Giá treo xe đạp BMW.  ',
    textBody:
      'Giá treo xe đạp BMW là giải pháp vận chuyển an toàn của xe đua, xe đường trường hoặc xe trẻ em cũng như xe leo núi lên tới 20 kg.',
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

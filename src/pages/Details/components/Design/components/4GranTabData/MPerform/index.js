import luoitannhiet from '~/assets/image/4Gran/luoitannhiet.jpg';
import napguong from '~/assets/image/4Gran/napguong.jpg';
import ongxa from '~/assets/image/4Gran/ongxa.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: luoitannhiet,
    alt: '   Lưới tản nhiệt hình quả thận M Performance được làm bằng sợi carbon.  ',
    textHead: '   Lưới tản nhiệt hình quả thận M Performance được làm bằng sợi carbon.   ',
    textBody:
      'Thể hiện phong cách của bạn: Khung của lưới tản nhiệt hình quả thận M Performance được làm bằng sợi carbon cao cấp. Cho một diện mạo đặc biệt thanh lịch, thể thao và cá tính.',
  },
  {
    src: napguong,
    alt: '    Nắp gương bên ngoài M làm bằng sợi carbon.   ',
    textHead: '     Nắp gương bên ngoài M làm bằng sợi carbon.   ',
    textBody:
      'Nắp gương bên ngoài M nổi bật được làm bằng sợi carbon tô điểm thêm dòng dõi công nghệ cao của xe, tô điểm thêm nét thể thao riêng.',
  },
  {
    src: ongxa,
    alt: '    Ống xả M Performance làm bằng sợi carbon. ',
    textHead: '     Ống xả M Performance làm bằng sợi carbon. ',
    textBody:
      'Ống xả M Performance làm bằng sợi carbon tạo ra kiểu dáng hiện đại hơn nhiều - và nâng cao dáng vẻ thể thao mạnh mẽ của chiếc xe.',
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

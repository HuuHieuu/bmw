import khoanglai from '~/assets/image/5Series/khoanglai.jpg';
import trolyao from '~/assets/image/5Series/trolyao.jpg';
import tichhop from '~/assets/image/5Series/tichhopsmartphone.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: khoanglai,
    alt: '   Khoang lái thông minh BMW Live Cockpit Professional.  ',
    textHead: '   Khoang lái thông minh BMW Live Cockpit Professional.   ',
    textBody:
      'Khoang lái thông minh BMW Live Cockpit Professional với chức năng điều hướng bao gồm hai màn hình chất lượng cao bao gồm Màn hình điều khiển 12,3" độ phân giải cao có thể được vận hành bằng cảm ứng và bảng đồng hồ 12,3" kỹ thuật số hoàn toàn. Hệ điều hành BMW 7 được vận hành thông qua Bộ điều khiển cảm ứng iDrive.',
  },
  {
    src: trolyao,
    alt: '   Hệ thống trợ lý ảo thông minh BMW Intelligent Personal Assistant. ',
    textHead: '    Hệ thống trợ lý ảo thông minh BMW Intelligent Personal Assistant. ',
    textBody:
      'Sẽ không hề khó tin nếu chiếc BMW của bạn cũng chính là chuyên gia riêng của bạn? Giao tiếp với xe bằng tính năng Trợ lý ảo thông minh BMW Intelligent Personal Assistant. Nói các lệnh một cách tự nhiên để vận hành nhiều chức năng của xe. Trợ lý ảo có thể giải thích mọi thứ về chiếc xe của bạn và giúp bạn hiểu rõ hơn về chiếc BMW của mình.',
  },
  {
    src: tichhop,
    alt: '   Tích hợp điện thoại thông minh.  ',
    textHead: '    Tích hợp điện thoại thông minh.  ',
    textBody:
      'Làm sao bạn có thể khởi hành mà thiếu mất những tính năng từ điện thoại thông minh trên chiếc BMW của mình khi mà bạn có thể tiếp tục sử dụng một cách dễ dàng nhất? Với tích hợp điện thoại thông minh, chiếc xe của bạn hỗ trợ Apple CarPlay và Android Auto bằng kết nối không dây giữa điện thoại thông minh và chiếc xe của bạn. Điều này cho phép bạn sử dụng thuận tiện các chức năng quen thuộc và các ứng dụng khác nhau trên xe.',
  },
];

function KetNoi() {
  return (
    <>
      <div>
        <General content={content} />
      </div>
    </>
  );
}

export default KetNoi;

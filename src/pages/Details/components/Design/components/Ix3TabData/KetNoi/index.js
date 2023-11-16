import ix3_ketnoi1 from '~/assets/image/bmw_ix3/ix3_ketnoi1.jpg';
import ix3_ketnoi2 from '~/assets/image/bmw_ix3/ix3_ketnoi2.jpg';
import ix3_ketnoi3 from '~/assets/image/bmw_ix3/ix3_ketnoi3.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: ix3_ketnoi1,
    alt: 'trợ lí cá nhân thông minh',
    textHead: '  TRỢ LÝ CÁ NHÂN THÔNG MINH BMW ',
    textBody:
      'Giao tiếp với xe của bạn bằng Trợ lý cá nhân thông minh BMW. Nói các lệnh tự nhiên để vận hành nhiều chức năng của xe. Nó cũng có thể giải thích các chủ đề về xe của bạn và giúp bạn hiểu rõ hơn về chiếc BMW của mình.',
  },
  {
    src: ix3_ketnoi2,
    alt: 'kết nối sạc',
    textHead: ' KẾT NỐI SẠC ',
    textBody:
      ' Với các dịch vụ kỹ thuật số Sạc được kết nối, bạn sử dụng phạm vi hoạt động của mẫu xe BMW i của mình một cách hiệu quả trong khi vẫn luôn linh hoạt. Hệ thống hỗ trợ bạn tìm kiếm các trạm sạc công cộng và cung cấp trước các thông tin quan trọng. Ứng dụng này cũng cung cấp cho bạn tổng quan về dữ liệu xe có liên quan.',
  },
  {
    src: ix3_ketnoi3,
    alt: 'chìa khoá kỹ thuật số',
    textHead: '  CHÌA KHÓA KỸ THUẬT SỐ ',
    textBody:
      ' Bạn có thể khóa và mở khóa chiếc BMW của mình và thậm chí khởi động nó bằng Chìa khóa kỹ thuật số. Bạn cũng có thể ủy quyền cho tối đa năm người có iPhone – nếu tương thích – sử dụng chiếc BMW của bạn. Trong số những thứ khác, công suất truyền động và tốc độ tối đa có thể bị hạn chế, ví dụ: dành cho người mới l',
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

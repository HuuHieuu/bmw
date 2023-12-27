import cuasotroi from '~/assets/image/bmw_x6/cuasotroi.jpg';
import denchaomung from '~/assets/image/bmw_x6/denchaomung.jpg';
import mamxe from '~/assets/image/bmw_x6/mamxe.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: denchaomung,
    alt: ' Đèn chào mừng Welcome light carpet. ',
    textHead: ' Đèn chào mừng Welcome light carpet.  ',
    textBody:
      'Chức năng Đèn chào mừng Welcome light carpet hiển thị hình ảnh đèn viền nội thất trước cửa xe và tạo không khí chào mừng xung quanh khu vực ra vào xe. Đèn chào mừng Welcome light carpet cũng giúp việc bước ra ngoài trong bóng tối thoải mái và an toàn hơn nhiều.',
  },
  {
    src: cuasotroi,
    alt: ' Cửa sổ trời Panorama. ',
    textHead: '  Cửa sổ trời Panorama. ',
    textBody:
      'Khi mở ra, Cửa sổ trời Panorama cung cấp một lượng lớn không khí trong lành. Khi đóng lại, Cửa sổ trời tạo ra ánh sáng tràn ngập bên trong xe. Khả năng đóng mở hoàn toàn tự động chỉ bằng một nút bấm hoặc bằng chìa khóa xe, được trang bị các chức năng trượt và nâng/hạ rèm che nắng và che mưa.',
  },
  {
    src: mamxe,
    alt: ' 22“ Mâm xe bằng hợp kim nhẹ kiểu 742 M với chấu kép màu Jet Black đi kèm lốp hỗn hợp. ',
    textHead: '  22“ Mâm xe bằng hợp kim nhẹ kiểu 742 M với chấu kép màu Jet Black đi kèm lốp hỗn hợp. ',
    textBody:
      '22“ Mâm xe bằng hợp kim nhẹ kiểu 798 M với chấu kép màu Jet Black đi kèm lốp hỗn hợp, phía trước 9,5J x 22 với lốp 275/35 R22, phía sau 10,5J x 22 với lốp 315/30 R22.',
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

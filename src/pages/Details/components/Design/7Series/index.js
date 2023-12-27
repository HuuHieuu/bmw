import { contentData, contentData2 } from '../../Data/7Data';
import General from '../General';
import ThongSo5 from '~/pages/Details/components/Design/components/ThongSo/ThongSo5';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';

import noithat1 from '~/assets/image/7Series/noithat1.jpg';
import noithat2 from '~/assets/image/7Series/noithat2.jpg';
import noithat3 from '~/assets/image/7Series/noithat3.jpg';
import noithat4 from '~/assets/image/7Series/noithat4.jpg';

import cn1 from '~/assets/image/7Series/cn1.jpg';
import cn2 from '~/assets/image/7Series/cn2.jpg';
import cn3 from '~/assets/image/7Series/cn3.jpg';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function Bmw7Series() {
  return (
    <>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>NGOẠI THẤT NỔI BẬT CỦA BMW 7 SERIES SEDAN MỚI.</h1>
        <General content={contentData} />
      </div>

      <p>&nbsp;</p>
      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>NỘI THẤT NỔI BẬT CỦA BMW 7 SERIES SEDAN.</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={noithat1} alt="nội thất" />
          <img className={cx('kg-nt-2')} src={noithat2} alt="nội thất" />
          <img className={cx('kg-nt-3')} src={noithat3} alt="nội thất" />
          <img className={cx('kg-nt-4')} src={noithat4} alt="nội thất" />
        </div>
      </div>

      <p>&nbsp;</p>
      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>Công nghệ vận hành và hỗ trợ lái tiên tiến</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={cn1} alt="công nghệ" />
          <img className={cx('kg-nt-2')} src={cn2} alt="công nghệ" />
          <img className={cx('kg-nt-3')} src={cn3} alt="công nghệ" />
        </div>
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>KHẢ NĂNG VẬN HÀNH MƯỢT MÀ VỚI KHỐI ĐỘNG CƠ MẠNH MẼ</h1>
        <p className={cx('nt-p')}>
          Tất cả phiên bản BMW 7 Series hoàn toàn mới được ra mắt tại Việt Nam đều sở hữu động cơ 6 xi-lanh thẳng hàng
          kết hợp với công nghệ Mild Hybrid 48V. Ở phiên bản BMW 735i sản sinh công suất 286 mã lực, mô-men xoắn 425Nm
          và có thể tăng tốc từ 0 - 100 km/h chỉ trong 6,7 giây trong khi phiên bản BMW 740i đạt công suất lên đến 381
          mã lực, mô - men xoắn 540 Nm và chỉ mất 5,4s để tăng tốc từ 0 - 100 km/h.
        </p>
      </div>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>PHIÊN BẢN BMW 7 SERIES HOÀN TOÀN MỚI</h1>
        <p className={cx('nt-p')}>
          Sở hữu tính cách độc đáo rõ ràng, trên BMW 7 Series bạn có thể nhận ra được sự sang trọng một cách dễ dàng. Bộ
          bánh xe hợp kim nhẹ ấn tượng với kiểu dáng đa chấu mới lạ và lớp sơn ngoại thất với nhiều màu sắc khác nhau
          giúp gia tăng tính cá nhân hoá cho mẫu sedan đầu bảng này. Ấn tượng ban đầu trở nên thú vị hơn ngay khi bạn
          bước lên xe, qua các bệ cửa với các chi tiết hoàn thiện bằng nhôm với dòng chữ “BMW Individual” được chiếu
          sáng, nội thất bọc da cao cấp và công nghệ chiếu sáng nội thất Ambient Light ấn tượng cho trải nghiệm thượng
          lưu đúng nghĩa trên BMW 7 Series.
        </p>
      </div>
      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>MẪU VÀ TRANG BỊ CỦA BMW 7 SERIES SEDAN MỚI</h1>
      </div>
    </>
  );
}

export default Bmw7Series;

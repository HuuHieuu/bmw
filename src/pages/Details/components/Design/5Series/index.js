import { contentData, contentData2 } from '../../Data/5Data';
import General from '../General';
import ThongSo5 from '~/pages/Details/components/Design/components/ThongSo/ThongSo5';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import B5Tab from '../components/5Tab/index';
import B5TabX from '../components/5Tab/indexx';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function Bmw5Series() {
  return (
    <>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>NHỮNG ĐIỂM NỔI BẬT VỀ THIẾT KẾT TUYỆT ĐẸP Ở NGOẠI THẤT VÀ NỘI THẤT.</h1>
        <General content={contentData} />
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>CÔNG NGHỆ CỦA BMW 5 SERIES SEDAN.</h1>
      </div>
      <div>
        <B5Tab />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>VẬN HÀNH VƯỢT TRỘI TRÊN BMW 5 SERIES SEDAN.</h1>
        <p className={cx('nt-p')}>
          Mạnh mẽ hơn, kiểm soát tốt hơn. Từ động cơ diesel 4 xi-lanh tiết kiệm nhiên liệu chuyên dụng đến đặc điểm vòng
          quay cao và mô-men xoắn ấn tượng của động cơ xăng 6 xi-lanh. Sedan BMW 5 Series phát huy hiệu suất thể thao
          mạnh mẽ trên mọi hành trình. Với hệ thống lái được tinh chỉnh hoàn hảo và công nghệ khung gầm, như hệ thống
          treo Adaptive, Hệ thống lái chủ động tích hợp Integral Active Steering hoặc hệ thống dẫn động bốn bánh thông
          minh xDrive, độ bám đường tối ưu và cảm giác lái thăng hoa lớn nhất sẽ được đảm bảo.
        </p>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={contentData2} />
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>PHỤ KIỆN CHÍNH HÃNG BMW VÀ BỘ PHẬN BMW M PERFORMANCE CHO SEDAN BMW 5 SERIES.</h1>
        <p className={cx('nt-p')}>
          Tất cả người lái BMW đều tận hưởng niềm vui lái xe tiêu chuẩn. Phụ kiện BMW chính hãng ra đời để đáp ứng mong
          muốn đặc biệt của bạn. Chúng tôi cung cấp nhiều lựa chọn bổ sung và tính năng bổ sung riêng lẻ hoàn toàn phù
          hợp với Sedan BMW 4 Series về chất lượng, thiết kế và hiệu suất, sẵn sàng đáp ứng bất cứ điều gì bạn mong chờ.
        </p>
      </div>
      <div>
        <B5TabX />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>THÔNG SỐ KỸ THUẬT SEDAN BMW 5 SERIES</h1>
      </div>
      <ThongSo5 />
    </>
  );
}

export default Bmw5Series;

import { contentData, contentData2, contentData3 } from '../../Data/X5Data';
import General from '../General';
import ThongSoX5 from '~/pages/Details/components/Design/components/ThongSo/ThongSoX5';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import ContentFlex from '../components/contentFlex';

import x5_nt1 from '~/assets/image/bmw_x5/x5_nt1.jpg';
import x5_nt2 from '~/assets/image/bmw_x5/x5_nt2.jpg';
import x5_nt3 from '~/assets/image/bmw_x5/x5_nt3.jpg';
import x5_nt4 from '~/assets/image/bmw_x5/x5_nt4.jpg';
import x5_nt5 from '~/assets/image/bmw_x5/x5_nt5.jpg';
import x5_nt6 from '~/assets/image/bmw_x5/x5_nt6.jpg';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function X5() {
  return (
    <>
      {/* <div className={cx('tech')} style={{ marginTop: '50px' }}></div> */}
      {/* <p>&nbsp;</p> */}

      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>NGOẠI THẤT NỔI BẬT CỦA BMW X5</h1>
        <General content={contentData} />
      </div>

      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>KHÔNG GIAN NỘI THẤT NỔI BẬT</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={x5_nt1} alt="nội thất" />
          <img className={cx('kg-nt-2')} src={x5_nt2} alt="nội thất" />
          <img className={cx('kg-nt-3')} src={x5_nt3} alt="nội thất" />
          <img className={cx('kg-nt-4')} src={x5_nt4} alt="nội thất" />
          <img className={cx('kg-nt-5')} src={x5_nt5} alt="nội thất" />
          <img className={cx('kg-nt-6')} src={x5_nt6} alt="nội thất" />
        </div>
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '21%' }}>
        <h1>TRẢI NGHIỆM CẢM GIÁC LÁI NĂNG ĐỘNG CỦA BMW X5</h1>
        <General content={contentData2} customCss={{ width: '700px' }} />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>TIỆN NGHI TRANG BỊ BỔ SUNG CHO MẪU XE BMW X5</h1>
        <General content={contentData3} customCss={{ width: '700px' }} />
      </div>

      <div className={cx('thong-so')} style={{ marginTop: '50px' }}>
        <h1>THÔNG SỐ KỸ THUẬT BMW X5</h1>
      </div>
      <ThongSoX5 />
    </>
  );
}

export default X5;

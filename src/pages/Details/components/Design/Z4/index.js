import { contentData, contentData2 } from '../../Data/Z4Data';
import General from '../General';
import ThongSo5 from '~/pages/Details/components/Design/components/ThongSo/ThongSo5';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';

import img1 from '~/assets/image/Z4/img1.jpg';
import img2 from '~/assets/image/Z4/img2.jpg';
import img3 from '~/assets/image/Z4/img3.jpg';
import img4 from '~/assets/image/Z4/img4.jpg';

import nt1 from '~/assets/image/Z4/nt1.jpg';
import nt2 from '~/assets/image/Z4/nt2.jpg';
import nt3 from '~/assets/image/Z4/nt3.jpg';

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
        <h1>TRẢI NGHIỆM THIẾT KẾ MỚI TRÊN BMW Z4 MỚI.</h1>
        <General content={contentData} />
      </div>

      <p>&nbsp;</p>
      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        {/* <h1></h1> */}
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={img1} alt="ngoại thất" />
          <img className={cx('kg-nt-2')} src={img2} alt="ngoại thất" />
          <img className={cx('kg-nt-3')} src={img3} alt="ngoại thất" />
          <img className={cx('kg-nt-4')} src={img4} alt="ngoại thất" />
        </div>
      </div>

      <p>&nbsp;</p>
      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>NỘI THẤT NỔI BẬT CỦA BMW Z4 MỚI.</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={nt1} alt="nội thất" />
          <img className={cx('kg-nt-2')} src={nt2} alt="nội thất" />
          <img className={cx('kg-nt-3')} src={nt3} alt="nội thất" />
        </div>
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>KHÁM PHÁ HIỆU NĂNG LÁI ĐỈNH CAO TRÊN BMW Z4 MỚI.</h1>
        <General customCss={{ width: '700px' }} content={contentData2} />
      </div>

      <p>&nbsp;</p>
    </>
  );
}

export default Bmw7Series;

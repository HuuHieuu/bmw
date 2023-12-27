import { contentData, contentData2 } from '../../Data/XMData';
import General from '../General';
import ThongSoXM from '~/pages/Details/components/Design/components/ThongSo/ThongSoXM';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';

import kg1 from '~/assets/image/XM/kg1.jpg';
import kg2 from '~/assets/image/XM/kg2.jpg';
import kg3 from '~/assets/image/XM/kg3.jpg';
import kg4 from '~/assets/image/XM/kg4.jpg';
import kg5 from '~/assets/image/XM/kg5.jpg';
import kg6 from '~/assets/image/XM/kg6.jpg';

import tb1 from '~/assets/image/XM/tb1.jpg';
import tb2 from '~/assets/image/XM/tb2.jpg';
import tb3 from '~/assets/image/XM/tb3.jpg';
import tb4 from '~/assets/image/XM/tb4.jpg';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function XM() {
  return (
    <>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div className={cx('ngoai-that2')}>
        <h1>NGOẠI THẤT NỔI BẬT CỦA MẪU XE BMW XM ĐẦU TIÊN.</h1>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={contentData} />
      </div>

      <p>&nbsp;</p>
      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>KHÔNG GIAN NỘI THẤT SANG TRỌNG CỦA MẪU XE BMW XM ĐẦU TIÊN.</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={kg1} alt="không gian" />
          <img className={cx('kg-nt-2')} src={kg2} alt="không gian" />
          <img className={cx('kg-nt-3')} src={kg3} alt="không gian" />
          <img className={cx('kg-nt-4')} src={kg4} alt="không gian" />
          <img className={cx('kg-nt-5')} src={kg5} alt="không gian" />
          <img className={cx('kg-nt-6')} src={kg6} alt="không gian" />
        </div>
      </div>

      <div style={{ marginTop: '20%' }}></div>

      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>TRẢI NGHIỆM CẢM GIÁC LÁI MẠNH MẼ TRÊN MẪU BMW XM ĐẦU TIÊN.</h1>
        <General content={contentData2} />
      </div>

      <p>&nbsp;</p>
      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>TIỆN NGHI TRANG BỊ BỔ SUNG </h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={tb1} alt="trang bị" />
          <img className={cx('kg-nt-2')} src={tb2} alt="trang bị" />
          <img className={cx('kg-nt-3')} src={tb3} alt="trang bị" />
          <img className={cx('kg-nt-4')} src={tb4} alt="trang bị" />
        </div>
      </div>

      <p>&nbsp;</p>
      <div className={cx('thong-so')} style={{ marginTop: '50px' }}>
        <h1>THÔNG SỐ KỸ THUẬT BMW XM</h1>
      </div>
      <ThongSoXM />
    </>
  );
}

export default XM;

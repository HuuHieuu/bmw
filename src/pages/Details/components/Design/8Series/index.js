import { contentData, contentData2, contentFlex } from '../../Data/8Data';
import General from '../General';
import ThongSo5 from '~/pages/Details/components/Design/components/ThongSo/ThongSo5';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import ContentFlex from '../components/contentFlex';

import nt1 from '~/assets/image/8Series/nt1.jpg';
import nt2 from '~/assets/image/8Series/nt2.jpg';
import nt3 from '~/assets/image/8Series/nt3.jpg';

import cn1 from '~/assets/image/7Series/cn1.jpg';
import cn2 from '~/assets/image/7Series/cn2.jpg';
import cn3 from '~/assets/image/7Series/cn3.jpg';

import pc1 from '~/assets/image/8Series/pc1.jpg';
import pc2 from '~/assets/image/8Series/pc2.jpg';
import pc3 from '~/assets/image/8Series/pc3.jpg';
import pc4 from '~/assets/image/8Series/pc4.jpg';
import pc5 from '~/assets/image/8Series/pc5.jpg';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function Bmw8Series() {
  return (
    <>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>TÍNH NĂNG THỂ THAO TRONG DIỆN MẠO MỚI NHỮNG ĐẶC ĐIỂM NỔI BẬT CỦA BMW 8 SERIES MỚI</h1>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={contentData} />
      </div>

      <p>&nbsp;</p>
      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>NGOẠI THẤT NỔI BẬT CỦA BMW 8 SERIES GRAN COUPÉ </h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={nt1} alt="ngoại thất" />
          <img className={cx('kg-nt-2')} src={nt2} alt="ngoại thất" />
          <img className={cx('kg-nt-3')} src={nt3} alt="ngoại thất" />
        </div>
      </div>

      <p>&nbsp;</p>
      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>PHONG CÁCH SANG TRỌNG KHÁC BIỆT VỚI CÁ TÍNH THỂ THAO</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={pc1} alt="phong cách" />
          <img className={cx('kg-nt-2')} src={pc2} alt="phong cách" />
          <img className={cx('kg-nt-3')} src={pc3} alt="phong cách" />
          <img className={cx('kg-nt-4')} src={pc4} alt="phong cách" />
          <img className={cx('kg-nt-5')} src={pc5} alt="phong cách" />
        </div>
      </div>

      <div style={{ marginTop: '20%' }}></div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '21%' }}>
        <h1>SỰ SANG TRỌNG ĐI TRƯỚC THỜI ĐẠI</h1>
        <General content={contentData2} customCss={{ width: '700px' }} />
      </div>

      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <ContentFlex ContentFlex={contentFlex} />
      <p>&nbsp;</p>
    </>
  );
}

export default Bmw8Series;

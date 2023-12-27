import { contentData } from '../../Data/3Data';
import General from '../General';
import ThongSoX5 from '~/pages/Details/components/Design/components/ThongSo/ThongSoX5';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import ContentFlex from '../components/contentFlex';

import tk1 from '~/assets/image/3Series/tk1.jpg';
import tk2 from '~/assets/image/3Series/tk2.jpg';
import tk3 from '~/assets/image/3Series/tk3.jpg';

import trolai1 from '~/assets/image/3Series/trolai1.jpg';
import trolai2 from '~/assets/image/3Series/trolai2.jpg';
import trolai3 from '~/assets/image/3Series/trolai3.jpg';

import dlh1 from '~/assets/image/3Series/dlh1.jpg';
import dlh2 from '~/assets/image/3Series/dlh2.jpg';
import dlh3 from '~/assets/image/3Series/dlh3.jpg';
import dlh4 from '~/assets/image/3Series/dlh4.jpg';
import dlh5 from '~/assets/image/3Series/dlh5.jpg';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function Bmw3() {
  return (
    <>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>TRẢI NGHIỆM THIẾT KẾ MỚI TRÊN BMW 3 SERIES</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={tk1} alt="tk1" />
          <img className={cx('kg-nt-2')} src={tk2} alt="tk2" />
          <img className={cx('kg-nt-3')} src={tk3} alt="tk3" />
        </div>
      </div>

      <div style={{ marginTop: '10%' }}></div>
      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={contentData} />
      </div>

      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>CÔNG NGHỆ HỖ TRỢ LÁI TIÊN TIẾN</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={trolai1} alt="TRỢ LÁI" />
          <img className={cx('kg-nt-2')} src={trolai2} alt="TRỢ LÁI" />
          <img className={cx('kg-nt-3')} src={trolai3} alt="TRỢ LÁI" />
        </div>
      </div>
      <div style={{ marginTop: '10%' }}></div>

      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>TÍNH ĐỘNG LỰC HỌC CỦA BMW 3 SERIES MỚI</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={dlh1} alt="ĐỘNG LỰC HỌC" />
          <img className={cx('kg-nt-2')} src={dlh2} alt="ĐỘNG LỰC HỌC" />
          <img className={cx('kg-nt-3')} src={dlh3} alt="ĐỘNG LỰC HỌC" />
          <img className={cx('kg-nt-4')} src={dlh4} alt="ĐỘNG LỰC HỌC" />
          <img className={cx('kg-nt-5')} src={dlh5} alt="ĐỘNG LỰC HỌC" />
        </div>
      </div>
      <div style={{ marginTop: '25%' }}></div>
    </>
  );
}

export default Bmw3;

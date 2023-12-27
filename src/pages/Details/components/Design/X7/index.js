import { contentData, contentData2, contentData3 } from '../../Data/X5Data';
import General from '../General';
import ThongSoX5 from '~/pages/Details/components/Design/components/ThongSo/ThongSoX5';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import ContentFlex from '../components/contentFlex';

import x7_cn1 from '~/assets/image/bmw_x7/x7_cn1.jpg';
import x7_cn2 from '~/assets/image/bmw_x7/x7_cn2.jpg';
import x7_cn3 from '~/assets/image/bmw_x7/x7_cn3.jpg';
import x7_cn4 from '~/assets/image/bmw_x7/x7_cn4.jpg';
import x7_cn5 from '~/assets/image/bmw_x7/x7_cn5.jpg';

import x7_hs1 from '~/assets/image/bmw_x7/x7_hs1.jpg';
import x7_hs2 from '~/assets/image/bmw_x7/x7_hs2.jpg';
import x7_hs3 from '~/assets/image/bmw_x7/x7_hs3.jpg';

import x7_in1 from '~/assets/image/bmw_x7/x7_in1.jpg';
import x7_in2 from '~/assets/image/bmw_x7/x7_in2.jpg';
import x7_in3 from '~/assets/image/bmw_x7/x7_in3.jpg';
import x7_in4 from '~/assets/image/bmw_x7/x7_in4.jpg';
import x7_in5 from '~/assets/image/bmw_x7/x7_in5.jpg';

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

      {/* <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>NGOẠI THẤT NỔI BẬT CỦA BMW X5</h1>
        <General content={contentData} />
      </div> */}
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>Trải nghiệm với công nghệ hiện đại và tân tiến.</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={x7_cn2} alt="công nghệ" />
          <img className={cx('kg-nt-2')} src={x7_cn1} alt="công nghệ" />
          <img className={cx('kg-nt-3')} src={x7_cn3} alt="công nghệ" />
          <img className={cx('kg-nt-4')} src={x7_cn4} alt="công nghệ" />
          <img className={cx('kg-nt-5')} src={x7_cn5} alt="công nghệ" />
        </div>
      </div>

      <div style={{ marginTop: '25%' }}></div>

      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>THÁCH THỨC MỌI GIỚI HẠN VỀ HIỆU SUẤT</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={x7_hs1} alt="hs" />
          <img className={cx('kg-nt-2')} src={x7_hs2} alt="hs" />
          <img className={cx('kg-nt-3')} src={x7_hs3} alt="hs" />
        </div>
      </div>

      <div style={{ marginTop: '10%' }}></div>

      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>ĐA DẠNG PHONG CÁCH CÙNG BMW INDIVIDUAL</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={x7_in1} alt="INDIVIDUAL" />
          <img className={cx('kg-nt-2')} src={x7_in2} alt="INDIVIDUAL" />
          <img className={cx('kg-nt-3')} src={x7_in3} alt="INDIVIDUAL" />
          <img className={cx('kg-nt-4')} src={x7_in4} alt="INDIVIDUAL" />
          <img className={cx('kg-nt-5')} src={x7_in5} alt="INDIVIDUAL" />
        </div>
      </div>
      <div style={{ marginTop: '25%' }}></div>
    </>
  );
}

export default X5;

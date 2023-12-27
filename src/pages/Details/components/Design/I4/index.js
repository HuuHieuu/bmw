import { contentData, contentData2, thietBiSac, contentFlex } from '../../Data/I4Data';
import General from '../General';

import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import ThongSoI4 from '../components/ThongSo/ThongSoI4';
import ContentFlex from '../components/contentFlex';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function I4() {
  return (
    <>
      {/* Ngoại thất p2 */}
      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>NGOẠI THẤT NỔI BẬT CỦA BMW i4</h1>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={contentData2} />
      </div>

      {/* Ngoai that */}
      <div className={cx('ngoai-that')} style={{ marginTop: '85px' }}>
        <h1>KHÔNG GIAN NỘI THẤT NỔI BẬT CỦA BMW i4.</h1>
        <General content={contentData} />;
      </div>

      <p>&nbsp;</p>
      <div className={cx('tech')} style={{ marginTop: '50px' }}></div>
      <ContentFlex ContentFlex={contentFlex} />

      {/* Thiết bị sạc điện */}
      <div className={cx('tb-sac')} style={{ marginTop: '50px' }}>
        <h1>NHỮNG THIẾT BỊ SẠC ĐIỆN</h1>
      </div>
      <General content={thietBiSac} />

      {/* Thông số kĩ thuật */}
      <div className={cx('thong-so')} style={{ marginTop: '50px' }}>
        <h1>THÔNG SỐ KỸ THUẬT BMW i4</h1>
      </div>
      <ThongSoI4 />

      {/* chính sách bảo hành */}
      <div className={cx('policy')}>
        <h1>Chính sách bảo hành cho các dòng xe điện BMW i</h1>
        <div className={cx('policy-content')}>
          <p>Các dòng xe thuần điện BMW i có chính sách bảo hành khác biệt so với xe máy xăng, cụ thể:</p>
          <ul style={{ marginLeft: '20px', padding: '9px 0' }}>
            <li style={styles.disc}>Thời hạn bảo hành cho xe: 3 năm không giới hạn số km.</li>
            <li style={styles.disc}>Thời hạn bảo hành Pin cao áp: 8 năm/160,000 km tuỳ điều kiện nào đến trước. </li>
          </ul>
          <p>Chính sách bảo hành này được áp dụng chung cho BMW iX3, BMW i4 và BMW i7.</p>
        </div>
      </div>
    </>
  );
}

export default I4;

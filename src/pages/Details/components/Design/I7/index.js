import { contentData, contentData2, contentFlex, vanHanh, quangDuong, thietBiSac } from '../../Data/I7Data';
import General from '../General';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import i7_noi_that1 from '~/assets/image/i7_noi_that1.jpg';
import i7_noi_that2 from '~/assets/image/i7_noi_that2.jpg';
import i7_noi_that3 from '~/assets/image/i7_noi_that3.jpg';
import i7_noi_that4 from '~/assets/image/i7_noi_that4.jpg';
import ContentFlex from '../components/contentFlex';
import ThongSoI7 from '../components/ThongSo/ThongSoI7';

import classNames from 'classnames/bind';
import style from './I7.module.scss';
const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function I7() {
  const contentRef = useRef(null);

  const handleArrowClick = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({
        left: 100, // Thay đổi giá trị left tùy thuộc vào bước cuộn bạn muốn
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      {/* Ngoai that */}
      <div className={cx('ngoai-that')} style={{ marginTop: '85px' }}>
        <h1>KHÔNG GIAN NGOẠI THẤT ĐẦY ĐỦ TRÊN BMW i7.</h1>
        <General content={contentData} />
      </div>
      {/* Noi that */}
      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>KHÔNG GIAN NỘI THẤT HOÀN MỸ TRÊN BMW i7.</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={i7_noi_that1} alt="nội thất" />
          <img className={cx('kg-nt-2')} src={i7_noi_that3} alt="nội thất" />
          <img className={cx('kg-nt-3')} src={i7_noi_that2} alt="nội thất" />
          <img className={cx('kg-nt-4')} src={i7_noi_that4} alt="nội thất" />
        </div>
      </div>
      {/* Ấn tượng */}
      <div className={cx('an-tuong')} style={{ marginTop: '50px' }}>
        <h1>BMW i7 MỚI – ẤN TƯỢNG.</h1>
        <General content={contentData2} customCss={{ width: '482px' }} />
      </div>
      {/* tech */}
      <div className={cx('tech')} style={{ marginTop: '50px' }}>
        <h1>CÔNG NGHỆ SẠC</h1>
      </div>
      <ContentFlex ContentFlex={contentFlex} />
      <p>&nbsp;</p>

      {/*  */}
      <div className={cx('cam-giac')} style={{ marginTop: '50px' }}>
        <h1>TẬN HƯỞNG CẢM GIÁC LÁI CỦA TƯƠNG LAI TRÊN BMW i7</h1>
      </div>
      <ContentFlex ContentFlex={vanHanh} customCss={{ flexDirection: 'row-reverse' }}>
        <ul style={{ paddingLeft: '26px', paddingTop: '11px' }}>
          <li style={styles.disc}>
            Truyền động: Dẫn động bốn bánh bằng điện, truyền mô-men xoắn do một mô-tơ điện truyền tới bánh trước và một
            tới bánh sau, có sự kết hợp.
          </li>
          <li style={styles.disc}>Công suất cực đại: 400 kW / 544 mã lực.</li>
          <li style={styles.disc}>Mô-men xoắn cực đại: 745 Nm.</li>
          <li style={styles.disc}>Hộp số: 1 cấp.</li>
          <li style={styles.disc}>Tăng tốc (0 – 100 km/h): 4.7 giây.</li>
          <li style={styles.disc}>Tốc độ tối đa (Giới hạn điện tử): 240 km/h.</li>
        </ul>
      </ContentFlex>
      <p>&nbsp;</p>

      {/* quãng đường hđ */}
      <div className={cx('quang-duong')} style={{ marginTop: '50px' }}>
        <h1>QUÃNG ĐƯỜNG HOẠT ĐỘNG</h1>
      </div>
      <ContentFlex ContentFlex={quangDuong}>
        <ul style={{ paddingLeft: '26px', paddingTop: '11px' }}>
          <li style={styles.disc}>625 km là phạm vi lái xe tối đa hàng ngày của bạn</li>
          <li style={styles.disc}>
            Mức tiêu thụ điện thấp chỉ 19,6–18,4 kWh/100 km thông qua các công nghệ như phục hồi năng lượng trong quá
            trình phanh
          </li>
          <li style={styles.disc}>Hiệu quả tối đa với phương pháp xây dựng trọng lượng nhẹ và thiết kế khí động học</li>
        </ul>
      </ContentFlex>
      <p>&nbsp;</p>

      {/* Thiết bị sạc điện */}
      <div className={cx('tb-sac')} style={{ marginTop: '50px' }}>
        <h1>NHỮNG THIẾT BỊ SẠC ĐIỆN</h1>
      </div>
      <General content={thietBiSac} />

      {/* Thông số kĩ thuật */}
      <div className={cx('thong-so')} style={{ marginTop: '50px' }}>
        <h1>THÔNG SỐ KỸ THUẬT BMW i7</h1>
      </div>
      <ThongSoI7 />

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

export default I7;

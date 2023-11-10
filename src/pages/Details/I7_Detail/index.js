import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import the_new_i7 from '~/assets/image/the_new_i7.jpg';
import bmw_i from '~/assets/image/bmw_i.png';

//components
import TabFurI7 from '../components/TabFurI7';
import I7_Design from '../components/Design/I7';

import styles from './I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function I7_Detail() {
  const text = 'THE NEW i7';
  const sup_text = 'BMW i7 - MẪU XE THUẦN ĐIỆN ĐẦU TIÊN';
  const prize = 'VND 7,199,000,000';
  const unit = 'Giá';
  const fuel = 'Chạy điện toàn phần';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img src={the_new_i7} alt="the_new_i7" />
          </div>
          <div className={cx('text-overlay')}>
            <h1 className={cx('text-overlay-title')}>{text}</h1>
            <div className={cx('overlay-flex')}>
              <img className={cx('logo-i-hidden')} src={bmw_i} alt="logo-i" />
              <h3 className={cx('text-overlay-desc')}>{sup_text}</h3>
            </div>
          </div>
          <div className={cx('text-overlay-bot')}>
            <h1 className={cx('text-overlay-title')}>{prize}</h1>
            <h3 className={cx('text-overlay-desc')}>{unit}</h3>
          </div>
          <div className={cx('text-overlay-bot2')}>
            <h1 className={cx('text-overlay-title')}>{fuel}</h1>
            <h3 className={cx('text-overlay-desc')}>{fuel_desc}</h3>
          </div>
        </div>

        <div className={cx('description')}>
          <div className={cx('desc-body')}>
            <div className={cx('desc-text')}>
              <p>
                <br></br>
                <br></br>
                BMW i7 chạy hoàn toàn bằng điện đầu tiên kết hợp hiệu suất điện và giải trí đa giác quan để tạo ra trải
                nghiệm lái xe khó quên.
              </p>
              <p>&nbsp;</p>
              <ul>
                <li>Khoảnh khắc chào mừng “Great Entrance Moments”</li>
                <li>Cụm đèn pha lê trước</li>
                <li>Không gian nội thất sang trọng với chế độ My Modes</li>
                <li>400 kW* và hơn 600 km* phạm vi hoạt động hoàn toàn bằng điện</li>
              </ul>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>
                BMW i7 xDrive60*:<br></br>
                Mức tiêu thụ điện tính bằng kWh/100 km (kết hợp, WLTP): 19,7–18,9 <br></br>
                Phạm vi điện tính bằng km (WLTP): 580–615 <br></br>
              </p>

              {/*  */}
              <div className={cx('title-thietke')}>
                <h2> THIẾT KẾ BMW i7 CỦA BẠN. </h2>
                <h3> i7 xDrive60 Pure Excellence </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('tab-furniture')}>
          <TabFurI7 />
        </div>
        <div>
          <I7_Design />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default I7_Detail;

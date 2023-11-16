import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import ix3_background from '~/assets/image/bmw_ix3/ix3_background.jpeg';
import bmw_i from '~/assets/image/bmw_i.png';

//components

import Ix3_Design from '../components/Design/Ix3';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
import TabFurIx3 from '../components/TabFurIx3';

const cx = classNames.bind(styles);

function Ix3_Detail() {
  const text = 'THE iX3';
  const sup_text = 'THE BMW iX3';
  const prize = 'VND 3,479,000,000';
  const unit = 'Giá';
  const fuel = 'Chạy điện toàn phần';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-ix3')} src={ix3_background} alt="ix3_background" />
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
                BMW iX3 mới là sự kết hợp hoàn hảo giữa sức mạnh thể thao và hiệu suất của điện năng. Với gói M Sport
                tiêu chuẩn và hệ dẫn động cầu sau, BMW iX3 mới mang lại cảm giác thể thao hơn bao giờ hết. Các yếu tố
                khí động học và các điểm nhấn màu xanh làm nổi bật chất điện của xe. Không chỉ vậy, BMW iX3 mới với phạm
                vi di chuyển lên tới 285 dặm* và mức tiêu thụ điện từ 3,3 dặm/kWh*, BMW iX3 M Sport mới là lựa chọn lý
                tưởng cho bạn tự do khám phá mọi tuyến đường.
              </p>

              {/*  */}
              <div className={cx('title-thietke')}>
                <h2> THIẾT KẾ MẪU XE BMW iX3 MỚI CỦA BẠN </h2>
                <h3> BMW iX3 M Sport </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('tab-furniture')}>
          <TabFurIx3 />
        </div>
        <div>
          <Ix3_Design />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Ix3_Detail;

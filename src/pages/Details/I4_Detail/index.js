import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import i4_background from '~/assets/image/bmw_i4/i4_background.jpeg';
import bmw_i from '~/assets/image/bmw_i.png';

//components

import I4_DESIGN from '../components/Design/I4';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
import TabFurI4 from '../components/TabFurI4';

const cx = classNames.bind(styles);

function I4_Detail() {
  const text = 'THE i4';
  const sup_text = 'BMW i4: CHIẾC XE GRAN COUPÉ THUẦN ĐIỆN ĐẦU TIÊN';
  const prize = 'VND 3,739,000,000';
  const unit = 'Giá';
  const fuel = 'Chạy điện toàn phần';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-i4')} src={i4_background} alt="i4_background" />
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
                Là chiếc Gran Coupé thuần điện đầu tiên, BMW i4 mang đến sự năng động vượt trội với mức độ thoải mái cao
                và những phẩm chất lý tưởng để trở thành người bạn đồng hành mỗi ngày của bạn. Mẫu xe năm cửa được trang
                bị công nghệ BMW eDrive thế hệ thứ năm cho hiệu suất thể thao – đạt tới 400 kW/544 mã lực (BMW i4 M50).
                Với tầm vận hành lên đến 493km* (BMW i4 eDrive40) và năm chỗ ngồi cỡ lớn rộng rãi, đây là người bạn đồng
                hành hoàn hảo cho mọi hành trình.
              </p>

              {/*  */}
              <div className={cx('title-thietke')}>
                <h2> THIẾT KẾ MẪU XE BMW i4 MỚI CỦA BẠN </h2>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('tab-furniture')}>
          <TabFurI4 />
        </div>
        <div>
          <I4_DESIGN />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default I4_Detail;

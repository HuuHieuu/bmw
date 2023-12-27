import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import bmw5_series_backround from '~/assets/image/5Series/b5_series_background.jpeg';

//components
import Series5 from '../components/Design/5Series';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function B5Series() {
  const text = 'THE 5';
  const sup_text = 'BMW 5 SERIES SEDAN';
  const prize = 'VND 1,829,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-4gran')} src={bmw5_series_backround} alt="bmw 5 series" />
          </div>
          <div className={cx('text-overlay')}>
            <h1 className={cx('text-overlay-title')}>{text}</h1>
            <div className={cx('overlay-flex')}>
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
                <div className={cx('txt_x3_1')}>
                  BMW 5 Series Sedan là hình ảnh thu nhỏ của không gian năng động và sang trọng chuẩn doanh nhân. BMW 5
                  Series Sedan tạo nên sự cuốn hút ngay từ cái nhìn đầu tiên về phong cách thể thao kết hợp với sự tinh
                  tế trong thiết kế. Bề mặt phẳng kết hợp với đường gân sắc nét mang đến vẻ ngoài thanh lịch nhưng vẫn
                  đậm tính hiện đại. Nội thất trang nhã và tiện dụng cho thấy tham vọng cách tân của BMW 5 Series Sedan
                  với các công nghệ hướng tới tương lai cùng các tính năng thể thao. Kết hợp với khả năng vận hành ấn
                  tượng và các công nghệ tiên tiến, BMW 5 Series Sedan mang đến sự thoải mái, tự tin và trên hết là cảm
                  giác lái được thỏa mãn tuyệt đối trên cả hành trình dù ngắn hay dài.
                </div>
                <br></br>
                <br></br>
                <div className={cx('txt_x3_2')}>
                  <li>530i (Áo R19):</li>
                  <li>Kết hợp tính bằng l/100 km: 8.62</li>
                  <li>Khu vực thành thị tính bằng l/100 km: 10.62</li>
                  <li>Ngoài đô thị tính bằng l/100 km: 7.44</li>
                  <li>Số giấy chứng nhận: 22KDN/000163</li>
                </div>
                <br></br>
                <div className={cx('txt_x3_2')}>
                  <li>530i (Đức R19):</li>
                  <li>Kết hợp tính bằng l/100 km: 8.82</li>
                  <li>Khu vực thành thị tính bằng l/100 km: 11.29</li>
                  <li>Ngoài đô thị tính bằng l/100 km: 7.39</li>
                  <li>Số giấy chứng nhận: 22KDN/000164</li>
                </div>
              </p>
            </div>
          </div>
        </div>

        {/* <p>&nbsp;</p> */}
        {/* <p>&nbsp;</p> */}

        {/* <div className={cx('tab-furniture')}>
          <TabFur3 />
        </div> */}

        <div>
          <Series5 />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default B5Series;

import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import bmw4_muitran_backround from '~/assets/image/4MuiTran/4_mui_tran_background.jpg';

//components
import Series4MuiTran from '../components/Design/4MuiTran';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
const cx = classNames.bind(styles);
function MuiTran4() {
  const text = 'THE 4';
  const sup_text = 'CHIẾC BMW 4 SERIES MUI TRẦN HOÀN TOÀN MỚI';
  const prize = 'VND 3,115,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';
  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-4mt')} src={bmw4_muitran_backround} alt="bmw 4 series mui trần" />
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
                  Diện mạo mới của sự tự do: Với tính thẩm mỹ độc lập, tiến bộ và nội thất sang trọng, BMW 4 Series Mui
                  Trần hoàn toàn mới là một hiện tượng đặc biệt phá bỏ mọi ranh giới. Sự nhanh nhẹn của mẫu xe mui trần
                  đảm bảo tính năng động thể thao và nhấn mạnh sự thôi thúc đặc biệt mạnh mẽ của chiếc xe đối với cá
                  tính mạnh mẽ.
                </div>
                <br></br>
                <br></br>

                <div className={cx('txt_x3_2')}>
                  <li>430i:</li>
                  <li>Kết hợp tính bằng l/100 km: 8.8</li>
                  <li>Khu vực thành thị tính bằng l/100 km: 11.06</li>
                  <li>Ngoài đô thị tính bằng l/100 km: 7.47</li>
                  <li>Số giấy chứng nhận: 22KDN/000168</li>
                </div>
              </p>
            </div>
          </div>
        </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        {/* <div className={cx('tab-furniture')}>
          <TabFur3 />
        </div> */}

        <div>
          <Series4MuiTran />
        </div>

        <div className={cx('description')} style={{ marginTop: '0' }}>
          <div className={cx('desc-body')}>
            <div className={cx('desc-text')}>
              <p>
                <br></br>
                <br></br>
                <div className={cx('desc-text-x3')}>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')} style={{ fontWeight: 'bold' }}>
                      Mức tiêu thụ nguyên liệu & lượng khí xả CO2 của chiếc BMW 4 Series Mui Trần.
                    </div>
                    <div className={cx('txt_x3_2')}>
                      <li>430i:</li>
                      <li>Kết hợp tính bằng l/100 km: 8.8</li>
                      <li>Khu vực thành thị tính bằng l/100 km: 11.06</li>
                      <li>Ngoài đô thị tính bằng l/100 km: 7.47</li>
                      <li>Số giấy chứng nhận: 22KDN/000168</li>
                      <br></br>
                      <li>
                        Thông tin về mức tiêu thụ nhiên liệu bao gồm CO2 …. Được quyết định trong điều kiện phù hợp với
                        quy trình đo lường quy định VO (EU) 715/2007 tuỳ theo phiên bản và thời gian tiêu hao. Các chỉ
                        số thụ của xe được kiểm định tại Đức , đánh giá bởi các thiết bị phù hợp tương đương và dựa theo
                        kích cỡ khác nhau của bánh, lốp của từng dòng xe cụ thể
                      </li>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MuiTran4;

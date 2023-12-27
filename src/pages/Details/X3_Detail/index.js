import { useState } from 'react';

import DefaultLayoutWithoutCarousel from '~/layouts/DefaultLayoutWithoutCarousel';
import x3_background from '~/assets/image/bmw_x3/x3_background.jpg';
import x3_duoi_xe from '~/assets/image/bmw_x3/x3_duoi_xe.jpg';
import x3_dau_xe from '~/assets/image/bmw_x3/x3_dau_xe.jpg';
import x3_mam_xe from '~/assets/image/bmw_x3/x3_mam_xe.jpg';
import x3_noi_that from '~/assets/image/bmw_x3/x3_noi_that.jpg';
import x3_vo_lang from '~/assets/image/bmw_x3/x3_vo_lang.jpg';
//components

import X3_Design from '../components/Design/X3';

import styles from '../I7_Detail/I7_Detail.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/pages/components/Footer';
import TabFurX3 from '../components/TabFurX3';

const cx = classNames.bind(styles);

const images = [
  { src: x3_duoi_xe, alt: 'đuôi xe' },
  {
    src: x3_mam_xe,
    alt: 'mâm xe',
  },
  { src: x3_dau_xe, alt: 'đầu xe' },
  { src: x3_noi_that, alt: 'nội thất' },
];

function X3_Detail(activeTabIndex) {
  const text = 'BMW X3';
  const sup_text = 'Các chi tiết, thiết bị và dữ liệu kỹ thuật của mẫu xe BMW X3';
  const prize = 'VND 1,789,000,000';
  const unit = 'Giá';
  const fuel = 'Xăng';
  const fuel_desc = 'Động cơ và loại nhiên liệu';

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <DefaultLayoutWithoutCarousel />
      <div className={cx('detail-container')}>
        <div className={cx('detail-content')}>
          <div className={cx('box-shadow')}>
            <img className={cx('box-x3')} src={x3_background} alt="x3_background" />
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
                <div className={cx('desc-text-x3')}>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')}>
                      BMW X3 xDrive20i (R18): Mức tiêu thụ nhiên liệu kết hợp (l/100 km): 8.6 Mức tiêu thụ nhiên liệu
                      trong đô thị (l/100 km): 10.86 Mức tiêu thụ nhiên liệu ngoài đô thị (l/100 km): 7.32 Số giấy chứng
                      nhận: 20KDN/000124
                    </div>
                    <div className={cx('txt_x3_2')}>
                      BMW X3 xDrive20i (R19): Mức tiêu thụ nhiên liệu kết hợp (l/100 km): 8.54 Mức tiêu thụ nhiên liệu
                      trong đô thị (l/100 km): 10.79
                    </div>
                  </div>
                  <div className={cx('x3_flex_1')}>
                    <div className={cx('txt_x3_1')}>
                      Mức tiêu thụ nhiên liệu ngoài đô thị (l/100 km): 7.27 Số giấy chứng nhận: 20KDN/000123
                    </div>
                    <div className={cx('txt_x3_2')}>
                      BMW X3 xDrive30i: Mức tiêu thụ nhiên liệu kết hợp (l/100 km): 8.73 Mức tiêu thụ nhiên liệu trong
                      đô thị (l/100 km): 11.13 Mức tiêu thụ nhiên liệu ngoài đô thị (l/100 km): 7.34 Số giấy chứng nhận:
                      20KDN/000127
                    </div>
                  </div>
                </div>
              </p>

              {/*  */}
              <div className={cx('title-thietke')}>
                <h2> MẪU XE VÀ THIẾT BỊ. </h2>
                <h3> Các mẫu xe và thiết bị của BMW X3 </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('tab-furniture')}>
          <TabFurX3 />
        </div>
        <div className={cx('x3_chi_tiet')}>
          <div className={cx('x3_chi_tiet_container')}>
            {activeTabIndex === 1 && (
              <div className={cx('x3_chi_tiet_content')}>
                <div className={cx('image-container')}>
                  <img src={x3_duoi_xe} alt="đuôi xe" />
                </div>
                <div className={cx('image-container')}>
                  <img src={x3_mam_xe} alt="mâm xe" />
                </div>
                <div className={cx('image-container')}>
                  <img src={x3_dau_xe} alt="đầu xe" />
                </div>
                <div className={cx('image-container')}>
                  <img src={x3_noi_that} alt="nội thất" />
                </div>
                <div className={cx('image-container')}>
                  <img src={x3_vo_lang} alt="vô lăng" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <X3_Design />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default X3_Detail;

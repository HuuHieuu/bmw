import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faInfoCircle, faCar, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import bmw_logo from '~/assets/image/bmw_logo.png';
import logo from '~/assets/image/logo/logo1-removebg-preview.png';
import { useState, useEffect } from 'react';
import Carousel from '../Carousel';

const cx = classNames.bind(styles);

function DefaultLayout() {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible); // Đảo ngược trạng thái menu
  };
  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = 'hidden'; // Ẩn thanh cuộn khi menu mở
    } else {
      document.body.style.overflow = 'auto'; // Cho phép thanh cuộn khi menu đóng
    }
  }, [menuVisible]);
  return (
    <>
      <div className={cx('header')}>
        <div className={cx('navbar')}>
          {/* logo */}
          <div className={cx('logo')}>
            <a href="/">
              <div className={cx('logo-b')}>
                <img src={bmw_logo} alt="logo-bmw" />
                <span>BMW Hà Nội</span>
              </div>
            </a>
          </div>
          {/* menu */}
          <div className={cx('nav-icon')}>
            <FontAwesomeIcon icon={faBars} size="xs" style={{ color: '#050505' }} onClick={handleMenuClick} />
          </div>
          <div className={cx('nav-menu', { 'menu-open': menuVisible })}>
            <div style={{ height: '100%' }}>
              <ul>
                <li>
                  <a href="/">
                    {/* <img src={bmw_logo} alt="logo-bmw" /> */}
                    <FontAwesomeIcon icon={faHome} className={cx('icon-menu-open')} />
                    Trang chủ
                  </a>
                </li>

                <li>
                  <a href="/pages/mau-xe">
                    {/* <img src={bmw_logo} alt="logo-bmw" /> */}
                    <FontAwesomeIcon icon={faCar} className={cx('icon-menu-open')} />
                    Mẫu xe
                  </a>
                </li>

                <li>
                  <a href="/pages/contact">
                    {/* <img src={bmw_logo} alt="logo-bmw" /> */}
                    <FontAwesomeIcon icon={faPhone} className={cx('icon-menu-open')} />
                    Liên lạc
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* carousel */}
      <Carousel />
    </>
  );
}

export default DefaultLayout;

import facebook from '~/assets/image/Facebook_Logo_(2019).png';
import bmw_logo from '~/assets/image/bmw_logo.png';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('container')}>
      <div className={cx('content')}>
        <div>
          <img className={cx('content-logo')} height={'65%'} src={bmw_logo} alt="bmw_logo" />
        </div>
        <div className={cx('contact')}>
          <h2 className={cx('contact-hotline')} style={{ color: '#333' }}>
            HOTLINE
          </h2>
          <h2 className={cx('contact-phone')}>0588.262.666</h2>
          <div className={cx('fanpage')}>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              href="https://www.facebook.com/profile.php?id=61552984529011&locale=vi_VN"
              title="Follow on Facebook"
            >
              <div style={{ marginTop: '7px' }}>
                <img className={cx('fb-logo')} height={'40px'} src={facebook} />
              </div>
              <h3 style={{ marginLeft: '18px', color: '#333' }}>FANPAGE FACEBOOK</h3>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import facebook from '~/assets/image/Facebook_Logo_(2019).png';
import fb1 from '~/assets/image/logo/facebook.png';
import youtube from '~/assets/image/logo/youtube.png';
import tiktok from '~/assets/image/logo/tiktok.png';
import bmw_logo from '~/assets/image/bmw_logo.png';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('container')}>
      <div className={cx('content')}>
        <div className={cx('content-css')}>
          <div style={{ height: '100%' }}>
            <img className={cx('content-logo')} height={'100%'} src={bmw_logo} alt="bmw_logo" />
          </div>
          <div className={cx('contact')}>
            <h2 className={cx('contact-hotline')} style={{ color: '#333' }}>
              HOTLINE
            </h2>
            <h2 className={cx('contact-phone')}>0588.26.26.66</h2>
            {/* <div className={cx('fanpage')}>
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
            </div> */}
          </div>
        </div>
        <div className={cx('social-network')}>
          <div className={cx('social-content')}>
            <span style={{ fontSize: '24px', margin: '0 10px', fontWeight: 300 }}>Ghé thăm chúng tôi tại</span>
            <div className={cx('social-flex')}>
              <div className={cx('social-css')}>
                <a
                  style={{ display: 'flex', alignItems: 'center' }}
                  href="https://www.facebook.com/profile.php?id=61552984529011&locale=vi_VN"
                  title="Follow on Facebook"
                >
                  <div style={{ marginTop: '7px' }}>
                    <img className={cx('fb-logo')} height={'40px'} src={fb1} />
                  </div>
                </a>
              </div>

              <div className={cx('social-css')}>
                <a
                  style={{ display: 'flex', alignItems: 'center' }}
                  href="https://www.facebook.com/profile.php?id=61552984529011&locale=vi_VN"
                  title="Follow on Youtube"
                >
                  <div style={{ marginTop: '7px' }}>
                    <img className={cx('fb-logo')} height={'40px'} src={youtube} />
                  </div>
                </a>
              </div>

              <div className={cx('social-css')}>
                <a
                  style={{ display: 'flex', alignItems: 'center' }}
                  href="https://www.tiktok.com/@huuchung_bmw?_t=8iXA3PhAV2A&_r=1"
                  title="Follow on Tiktok"
                >
                  <div style={{ marginTop: '7px' }}>
                    <img className={cx('fb-logo')} height={'40px'} src={tiktok} />
                  </div>
                </a>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

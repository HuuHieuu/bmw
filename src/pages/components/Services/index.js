import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import styles from './Services.module.scss';
import classNames from 'classnames/bind';

import sv1 from '~/assets/image/sv1.jpg';
import sv2 from '~/assets/image/sv2.jpeg';
import sv3 from '~/assets/image/sv3.jpg';
import sv4 from '~/assets/image/sv4.jpg';

const cx = classNames.bind(styles);

function Services() {
  return (
    <div className={cx('general')}>
      <div className={cx('general-sv')}>
        {/* sv1 */}
        <div className={cx('sv-1')}>
          <div className={cx('sv-image')}>
            <img src={sv1} alt="sv1" />
          </div>
          <div className={cx('sv-title')}>
            <h2 style={{ fontWeight: '300' }}> DỊCH VỤ AN TOÀN </h2>
          </div>
          <ul style={{ position: 'absolute', bottom: '15px' }} className={cx('ul-hover-effect')}>
            <li>
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
              <a href="" className={cx('discover-link')} style={{ marginLeft: '10px', fontWeight: '400' }}>
                Khám phá thêm
              </a>
            </li>
          </ul>
        </div>
        {/* sv2 */}
        <div className={cx('sv-1')}>
          <div className={cx('sv-image')}>
            <img src={sv2} alt="sv2" />
          </div>
          <div className={cx('sv-title')}>
            <h2 style={{ fontWeight: '300' }}> DỊCH VỤ BẢO DƯỠNG ĐỊNH KỲ TRỌN GÓI </h2>
          </div>
          <ul style={{ position: 'absolute', bottom: '15px' }} className={cx('ul-hover-effect')}>
            <li>
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
              <a href="" className={cx('discover-link')} style={{ marginLeft: '10px', fontWeight: '400' }}>
                Khám phá thêm
              </a>
            </li>
          </ul>
        </div>
        {/* sv3 */}
        <div className={cx('sv-1')}>
          <div className={cx('sv-image')}>
            <img src={sv3} alt="sv3" />
          </div>
          <div className={cx('sv-title')}>
            <h2 style={{ fontWeight: '300' }}> HỖ TRỢ SỰ CỐ TRÊN ĐƯỜNG </h2>
          </div>
          <ul style={{ position: 'absolute', bottom: '15px' }} className={cx('ul-hover-effect')}>
            <li>
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
              <a href="" className={cx('discover-link')} style={{ marginLeft: '10px', fontWeight: '400' }}>
                Khám phá thêm
              </a>
            </li>
          </ul>
        </div>
        {/* sv4 */}
        <div className={cx('sv-1')}>
          <div className={cx('sv-image')}>
            <img src={sv4} alt="sv4" />
          </div>
          <div className={cx('sv-title')}>
            <h2 style={{ fontWeight: '300' }}> BẢO DƯỠNG LƯU ĐỘNG </h2>
          </div>
          <ul style={{ position: 'absolute', bottom: '15px' }} className={cx('ul-hover-effect')}>
            <li>
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
              <a href="" className={cx('discover-link')} style={{ marginLeft: '10px', fontWeight: '400' }}>
                Khám phá thêm
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;

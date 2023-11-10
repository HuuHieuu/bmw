import classNames from 'classnames/bind';
import styles from './General.module.scss';

const cx = classNames.bind(styles);

function General({ content, customCss }) {
  const screenWidth = document.documentElement.clientWidth;
  const shouldApplyCustomCss = screenWidth >= 1200;
  const contentStyle = shouldApplyCustomCss ? customCss : {};
  return (
    <div className={cx('design-container')}>
      <div className={cx('design-content')}>
        {content.map((item, index) => (
          <div key={index} className={cx('child')} style={contentStyle}>
            <div className={cx('design-picture')}>
              <img src={item.src} alt={item.alt} />
            </div>
            <div className={cx('design-text')}>
              <h4>{item.textHead}</h4>
              <p>{item.textBody}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default General;

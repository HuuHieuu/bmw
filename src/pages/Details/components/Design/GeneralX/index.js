import classNames from 'classnames/bind';
import styles from './General.module.scss';

const cx = classNames.bind(styles);

function GeneralX({ content, customCss, customCss2 }) {
  const screenWidth = document.documentElement.clientWidth;
  // const shouldApplyCustomCss = screenWidth >= 1200;
  // const contentStyle = shouldApplyCustomCss ? customCss : {};

  //2
  const shouldApplyCustomCss2 = screenWidth >= 1200;
  const contentStyle2 = shouldApplyCustomCss2 ? customCss2 : {};

  return (
    <div className={cx('design-container')}>
      <div className={cx('design-content')} style={contentStyle2}>
        {content.map((item, index) => (
          <div key={index} className={cx('child')} style={customCss}>
            <div className={cx('design-picture')}>
              <img src={item.src} alt={item.alt} preload="auto" />
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

export default GeneralX;

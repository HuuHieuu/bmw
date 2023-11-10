import classNames from 'classnames/bind';
import styles from './ContentFlex.module.scss';

const cx = classNames.bind(styles);

function ContentFlex({ ContentFlex, children, customCss }) {
  const screenWidth = document.documentElement.clientWidth;
  const shouldApplyCustomCss = screenWidth >= 1200;
  const contentStyle = shouldApplyCustomCss ? customCss : {};
  return (
    <>
      <div className={cx('container-flex')}>
        <div className={cx('content')} style={contentStyle}>
          <div className={cx('picture')}>
            <img src={ContentFlex.src} alt={ContentFlex.alt} />
          </div>
          <div className={cx('text')}>
            <h2>{ContentFlex.head}</h2>
            <p>{ContentFlex.body}</p>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentFlex;

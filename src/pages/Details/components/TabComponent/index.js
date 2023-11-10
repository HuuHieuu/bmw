import React from 'react';
import classNames from 'classnames/bind';
import styles from './TabComponent.module.scss';
const cx = classNames.bind(styles);

function TabComponent({
  activeTab,
  imgupper,
  tabItems,
  tabClass,
  handleTabClick,
  tabButtonStyle,
  imageLowerColor,
  selectedImage,
  setSelectedImage,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
  handleLowerContentClick,
}) {
  return (
    <div className={cx('tabs-content')}>
      <div className={cx('model-menu')}>
        <div className={cx('tab-content-upper')}>
          {/* {Array.isArray(imgupper[activeTab]) &&
            imgupper[activeTab].map((image, index) => (
              <div key={index} className={cx('upper-content', { active: activeTab === index })}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))} */}
          {activeTab === 0 && (
            <div className={cx('upper-content', { active: activeTab === 0 })}>
              <img src={imgupper[0].src} alt={imgupper[0].alt} />
            </div>
          )}
          {activeTab === 1 && (
            <div className={cx('upper-content', { active: activeTab === 1 })}>
              <img src={imgupper[1].src} alt={imgupper[1].alt} />
            </div>
          )}
          {activeTab === 2 && (
            <div className={cx('upper-content', { active: activeTab === 2 })}>
              <img src={imgupper[2].src} alt={imgupper[2].alt} />
            </div>
          )}
          {activeTab === 3 && (
            <div className={cx('upper-content', { active: activeTab === 3 })}>
              <img src={imgupper[3].src} alt={imgupper[3].alt} />
            </div>
          )}
        </div>

        <div style={{ overflowX: 'auto' }} className={cx('model-nav-holder', 'pad2')} tabIndex={0}>
          <nav className={cx('model-nav')}>
            <ul role="tablist" style={{ whiteSpace: 'nowrap' }}>
              {tabItems.map((item, tabIndex) => (
                <li
                  style={{ paddingRight: '5px' }}
                  className={cx(tabClass(tabIndex))}
                  role="tab"
                  tabIndex={activeTab === tabIndex ? 0 : -1}
                  aria-selected={activeTab === tabIndex}
                  onClick={() => {
                    handleTabClick(tabIndex);
                  }}
                >
                  <button aria-pressed={activeTab === tabIndex} style={tabButtonStyle(activeTab, tabIndex)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/*  */}
        <div className={cx('tab-content-lower')}>
          {activeTab === 0 && (
            <div className={cx('lower-content')}>
              {imageLowerColor.map((image, index) => (
                <img
                  key={index}
                  className={cx('lower-img', { selected: selectedImage === index })}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => selectedImage(index)}
                />
              ))}
            </div>
          )}
          {activeTab === 1 && (
            <div className={cx('lower-content')}>
              {imageLowerMamXe.map((image, index) => (
                <img
                  key={index}
                  className={cx('lower-img', { selected: selectedImage === index })}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
          {activeTab === 2 && (
            <div className={cx('lower-content')}>
              {imageLowerChatLieuGhe.map((image, index) => (
                <img
                  key={index}
                  className={cx('lower-img', { selected: selectedImage === index })}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
          {activeTab === 3 && (
            <div className={cx('lower-content')}>
              {imageLowerTrangTri.map((image, index) => (
                <img
                  key={index}
                  className={cx('lower-img', { selected: selectedImage === index })}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabComponent;

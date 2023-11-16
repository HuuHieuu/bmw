import React from 'react';
import classNames from 'classnames/bind';
import styles from './TabComponent.module.scss';
import { sassTrue } from 'sass';
const cx = classNames.bind(styles);

function TabComponent({
  activeTab,
  activeTabIndex,
  activeTabClg,
  activeTabOtt,
  imgEx,
  imgMamxe,
  imgClg,
  imgTrangtri,
  displayText,
  tabItems,
  tabClass,
  handleTabClick,
  tabButtonStyle,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
  handleImageClick,
  handleImageClickClg,
  handleImageClickOtt,
  handleImageClickMamXe,
}) {
  return (
    <div className={cx('tabs-content')}>
      <div className={cx('model-menu')}>
        <div className={cx('tab-content-upper')}>
          {activeTab === 0 && (
            <div className={cx('upper-content')}>
              <img
                key={activeTabIndex}
                className={cx('upper-img', { active: activeTab === 0 })}
                src={imgEx[activeTabIndex].src}
                alt={imgEx[activeTabIndex].alt}
              />
            </div>
          )}

          {activeTab === 1 && (
            <div className={cx('upper-content')}>
              <img
                key={activeTabIndex}
                className={cx('upper-img', { active: activeTab === 1 })}
                src={imgMamxe[activeTabIndex].src}
                alt={imgMamxe[activeTabIndex].alt}
              />
            </div>
          )}
          {activeTab === 2 && (
            <div className={cx('upper-content')}>
              <img
                key={activeTabIndex}
                className={cx('upper-img', { active: activeTab === 2 })}
                src={imgClg[activeTabClg].src}
                alt={imgClg[activeTabClg].alt}
              />
            </div>
          )}
          {activeTab === 3 && (
            <div className={cx('upper-content')}>
              <img
                key={activeTabIndex}
                className={cx('upper-img', { active: activeTab === 3 })}
                src={imgTrangtri[activeTabOtt].src}
                alt={imgTrangtri[activeTabOtt].alt}
              />
            </div>
          )}
        </div>
        {/*  */}
        <div className={cx('model-nav-holder', 'pad2')} tabIndex={0}>
          <nav style={{ overflowX: 'auto' }} className={cx('model-nav')}>
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
                <div className={cx('content-image')}>
                  <img
                    key={index}
                    className={cx('lower-img', { selected: activeTabIndex === index })}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className={cx('lower-content')}>
              {imageLowerMamXe.map((image, index) => (
                <div className={cx('content-image')}>
                  <img
                    key={index}
                    className={cx('lower-img', { selected: true })}
                    src={image.src}
                    alt={image.alt}
                    // onClick={() => handleImageClickMamXe(index)}
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className={cx('lower-content')}>
              {imageLowerChatLieuGhe.map((image, index) => (
                <div className={cx('content-image')}>
                  <img
                    key={index}
                    className={cx('lower-img', { selected: activeTabClg === index })}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => handleImageClickClg(index)}
                  />
                </div>
              ))}
            </div>
          )}
          {activeTab === 3 && (
            <div className={cx('lower-content')}>
              {imageLowerTrangTri.map((image, index) => (
                <div className={cx('content-image')}>
                  <img
                    key={index}
                    className={cx('lower-img', { selected: activeTabOtt === index })}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => handleImageClickOtt(index)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* sup-desc */}
        <div className={cx('sup-lower')}>
          {activeTab === 0 && (
            <div className={cx('sup-desc-color')}>
              <h4>{imageLowerColor[activeTabIndex].text}</h4>
            </div>
          )}
          {activeTab === 1 && (
            <div className={cx('sup-desc-color')}>
              <h4>{displayText}</h4>
            </div>
          )}
          {activeTab === 2 && (
            <div className={cx('sup-desc-color')}>
              <h4>{imageLowerChatLieuGhe[activeTabClg].text}</h4>
            </div>
          )}
          {activeTab === 3 && (
            <div className={cx('sup-desc-color')}>
              <h4>{imageLowerTrangTri[activeTabOtt].text}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabComponent;

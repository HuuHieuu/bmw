import styles from './Tabs.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';

import ALL_CAR from './components/ALL_CAR';
import BMW_I from './components/BMW_I';
import BMW_X from './components/BMW_X';
import BMW_3 from './components/BMW_3';
import BMW_4 from './components/BMW_4';
import BMW_5 from './components/BMW_5';
import BMW_7 from './components/BMW_7';
import BMW_8 from './components/BMW_8';
import BMW_Z4 from './components/BMW_Z4';
import BMW_XM from './components/BMW_XM';
// 2
import Sedan from './components/KieuLoai/Sedan';
import SportActivityVehicle from './components/KieuLoai/SportActivityVehicle';
import SportActivityCoupe from './components/KieuLoai/SportActivityCoupe';
import Convertible from './components/KieuLoai/Convertible';
import GranCoupe from './components/KieuLoai/GranCoupe';

const cx = classNames.bind(styles);

const tabItems = [
  // { label: 'Tất cả' },
  { label: 'BMW i' },
  { label: 'X' },
  { label: 'M' },
  { label: '3' },
  { label: '4' },
  { label: '5' },
  { label: '7' },
  { label: '8' },
  { label: 'Z4' },
];

const tabItems2 = [
  { label: 'BMW i' },
  { label: 'Sedan' },
  { label: 'Sports Activity Vehicle' },
  { label: 'Sports Activity Coupé' },
  { label: 'Convertible' },
  { label: 'Gran Coupé' },
];

function Tabs() {
  const screenWidth = document.documentElement.clientWidth;

  const tabListRef = useRef(null);

  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [activeTab3, setActiveTab3] = useState(0);
  const [prevTab, setPrevTab] = useState(null);
  const [prevTab2, setPrevTab2] = useState(null);
  const [prevTab3, setPrevTab3] = useState(null);

  const [isPad2Visible, setIsPad2Visible] = useState(true); // Ban đầu, hiển thị "pad2"
  const [isPad3Visible, setIsPad3Visible] = useState(false);

  const handleTabClick = (tabIndex) => {
    if (activeTab !== tabIndex) {
      setPrevTab(activeTab);
      setActiveTab(tabIndex);

      if (tabIndex === 0) {
        setIsPad2Visible(true);
        setIsPad3Visible(false);
      } else if (tabIndex === 1) {
        setIsPad2Visible(false);
        setIsPad3Visible(true);
      }
    }
  };

  const handleTabClick2 = (tabIndex) => {
    if (activeTab2 !== tabIndex) {
      setPrevTab2(activeTab2);
      setActiveTab2(tabIndex);
    }
  };

  const handleTabClick3 = (tabIndex) => {
    if (activeTab3 !== tabIndex) {
      setPrevTab3(activeTab3);
      setActiveTab3(tabIndex);
    }
  };

  // CSS class để làm cho chữ trở nên đậm
  const tabClass = (tabIndex) => {
    return tabIndex === activeTab ? 'active' : '';
  };
  const tabClass2 = (tabIndex) => {
    return tabIndex === activeTab2 ? 'active' : '';
  };
  const tabClass3 = (tabIndex) => {
    return tabIndex === activeTab3 ? 'active' : '';
  };

  // Sử dụng inline style để điều chỉnh vị trí của <span>
  const spanStyle = {
    left: activeTab === 0 ? '0' : '95.59px', // Điều chỉnh vị trí tùy theo tab được chọn
    width: activeTab === 0 ? '95.59px' : '113.35px',
  };

  const spanStyleMobile = {
    left: activeTab === 0 ? '0' : '80.86px',
    width: activeTab === 0 ? '80.86px' : '90.52px',
  };

  const spanStyleTablet = {
    left: activeTab === 0 ? '0' : '96.52px',
    width: activeTab === 0 ? '96.52px' : '102.52px',
  };

  const spanStyleToUse = screenWidth < 768 ? spanStyleMobile : screenWidth < 1024 ? spanStyleTablet : spanStyle;

  const tabButtonStyle = (activeTab2, tabIndex) => {
    return {
      fontWeight: activeTab2 === tabIndex ? 'bold' : 'normal',
      fontSize: activeTab2 === tabIndex ? '27px' : '20px',
    };
  };

  const tabButtonStyleMobile = (activeTab2, tabIndex) => {
    return {
      fontWeight: activeTab2 === tabIndex ? 'bold' : 'normal',
      fontSize: activeTab2 === tabIndex ? '17px' : '15px',
    };
  };

  const tabButtonStyleTablet = (activeTab2, tabIndex) => {
    return {
      fontWeight: activeTab2 === tabIndex ? 'bold' : 'normal',
      fontSize: activeTab2 === tabIndex ? '19px' : '17px',
    };
  };

  const tabButtonToUse =
    screenWidth < 768 ? tabButtonStyleMobile : screenWidth < 1024 ? tabButtonStyleTablet : tabButtonStyle;

  return (
    <div className={cx('tabs-content')}>
      <div className={cx('model-menu')}>
        {/* tab1 */}
        <div className={cx('model-nav-holder', 'pad1')} tabIndex={0}>
          <nav className={cx('model-nav')}>
            <ul role="tablist">
              <li
                className={cx(tabClass(0))}
                role="tab"
                tabIndex={activeTab === 0 ? 0 : -1}
                aria-selected={activeTab === 0}
                onClick={() => handleTabClick(0)}
              >
                <button aria-pressed={activeTab === 0} style={{ fontWeight: activeTab === 0 ? 'bold' : 'normal' }}>
                  Mẫu xe
                </button>
              </li>
              <li
                className={cx(tabClass(1))}
                role="tab"
                tabIndex={activeTab === 1 ? 0 : -1}
                aria-selected={activeTab === 1}
                onClick={() => handleTabClick(1)}
              >
                <button aria-pressed={activeTab === 1} style={{ fontWeight: activeTab === 1 ? 'bold' : 'normal' }}>
                  Kiểu loại
                </button>
              </li>
            </ul>
            <span className={cx('pad')} style={spanStyleToUse}></span>
          </nav>
        </div>

        {/* tab2 */}
        <div
          style={{ overflowX: 'auto' }}
          className={cx('model-nav-holder', 'pad2', { hidden: !isPad2Visible })}
          tabIndex={0}
        >
          <nav className={cx('model-nav')}>
            <ul role="tablist" style={{ whiteSpace: 'nowrap' }}>
              {tabItems.map((item, tabIndex) => (
                <li
                  style={{ paddingRight: '5px' }}
                  className={cx(tabClass2(tabIndex))}
                  role="tab"
                  tabIndex={activeTab2 === tabIndex ? 0 : -1}
                  aria-selected={activeTab2 === tabIndex}
                  onClick={() => handleTabClick2(tabIndex)}
                >
                  <button aria-pressed={activeTab2 === tabIndex} style={tabButtonToUse(activeTab2, tabIndex)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* tab 3 */}
        <div
          style={{ overflowX: 'auto' }}
          className={cx('model-nav-holder', 'pad3', { hidden: !isPad3Visible })}
          tabIndex={0}
        >
          <nav className={cx('model-nav')}>
            <ul role="tablist" style={{ whiteSpace: 'nowrap' }}>
              {tabItems2.map((item, tabIndex) => (
                <li
                  style={{ paddingRight: '5px' }}
                  className={cx(tabClass3(tabIndex))}
                  role="tab"
                  tabIndex={activeTab3 === tabIndex ? 0 : -1}
                  aria-selected={activeTab3 === tabIndex}
                  onClick={() => handleTabClick3(tabIndex)}
                >
                  <button aria-pressed={activeTab3 === tabIndex} style={tabButtonToUse(activeTab3, tabIndex)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* content */}
        <div className={cx('tab-content')}>
          {/* Tab1Contents */}
          {/* {activeTab2 === 0 && activeTab === 0 && <ALL_CAR />} */}
          {activeTab2 === 0 && activeTab === 0 && <BMW_I />}
          {activeTab2 === 1 && activeTab === 0 && <BMW_X />}
          {activeTab2 === 2 && activeTab === 0 && <BMW_XM />}
          {activeTab2 === 3 && activeTab === 0 && <BMW_3 />}
          {activeTab2 === 4 && activeTab === 0 && <BMW_4 />}
          {activeTab2 === 5 && activeTab === 0 && <BMW_5 />}
          {activeTab2 === 6 && activeTab === 0 && <BMW_7 />}
          {activeTab2 === 7 && activeTab === 0 && <BMW_8 />}
          {activeTab2 === 8 && activeTab === 0 && <BMW_Z4 />}

          {/* Tab2Contents */}
          {activeTab3 === 0 && activeTab === 1 && <BMW_I />}
          {activeTab3 === 1 && activeTab === 1 && <Sedan />}
          {activeTab3 === 2 && activeTab === 1 && <SportActivityVehicle />}
          {activeTab3 === 3 && activeTab === 1 && <SportActivityCoupe />}
          {activeTab3 === 4 && activeTab === 1 && <Convertible />}
          {activeTab3 === 5 && activeTab === 1 && <GranCoupe />}
        </div>
      </div>
    </div>
  );
}

export default Tabs;

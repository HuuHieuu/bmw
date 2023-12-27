import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '~/pages/Details/components/TabComponent/TabComponent.module.scss';
import ChinhHang from '../5TabData/ChinhHang';
import MPerform from '../5TabData/MPerform';
const cx = classNames.bind(styles);

const tabItems = [{ label: 'Phụ kiện BMW chính hãng' }, { label: 'Phụ tùng BMW M Performance' }];

function Bmw5Tab() {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(null);
  const handleTabClick = (tabIndex) => {
    if (activeTab !== tabIndex) {
      setPrevTab(activeTab);
      setActiveTab(tabIndex);
    }
  };
  const tabClass = (tabIndex) => {
    return tabIndex === activeTab ? 'active' : '';
  };
  const tabButtonStyle = (activeTab, tabIndex) => {
    return {
      fontWeight: activeTab === tabIndex ? 'bold' : 'normal',
      fontSize: activeTab === tabIndex ? '20px' : '18px',
    };
  };
  return (
    <>
      <div className={cx('tabs-content')}>
        <div className={cx('model-menu')}>
          <div style={{ overflowX: 'auto' }} className={cx('model-nav-holder', 'pad3')} tabIndex={0}>
            <nav className={cx('model-nav')}>
              <ul role="tablist" style={{ whiteSpace: 'nowrap' }}>
                {tabItems.map((item, tabIndex) => (
                  <li
                    style={{ paddingRight: '5px' }}
                    className={cx(tabClass(tabIndex))}
                    role="tab"
                    tabIndex={activeTab === tabIndex ? 0 : -1}
                    aria-selected={activeTab === tabIndex}
                    onClick={() => handleTabClick(tabIndex)}
                  >
                    <button aria-pressed={activeTab === tabIndex} style={tabButtonStyle(activeTab, tabIndex)}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* content */}
      <div className={cx('tab-content')}>
        {activeTab === 0 && <ChinhHang />}
        {activeTab === 1 && <MPerform />}
      </div>
    </>
  );
}

export default Bmw5Tab;

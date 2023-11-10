import React, { useState } from 'react';
import TabComponent from '../TabComponent';
import {
  tabItems,
  imgupper,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
} from '../Data/I7Data';

function TabFurI7() {
  const [selectedImage, setSelectedImage] = useState(0);
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
    <TabComponent
      activeTab={activeTab}
      imgupper={imgupper}
      tabItems={tabItems}
      tabClass={tabClass}
      handleTabClick={handleTabClick}
      tabButtonStyle={tabButtonStyle}
      imageLowerColor={imageLowerColor}
      selectedImage={selectedImage}
      setSelectedImage={setSelectedImage}
      imageLowerMamXe={imageLowerMamXe}
      imageLowerChatLieuGhe={imageLowerChatLieuGhe}
      imageLowerTrangTri={imageLowerTrangTri}
    />
  );
}
export default TabFurI7;

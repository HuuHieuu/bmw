import React, { useState, useEffect } from 'react';
import TabComponent from '../TabComponent';
import {
  tabItems,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
  x3_imgEx,
} from '../Data/X3Data';

function TabFurX3() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabClg, setActiveTabClg] = useState(0);
  const [activeTabOtt, setActiveTabOtt] = useState(0);

  const [prevTab, setPrevTab] = useState(null);

  const handleImageClickClg = (index) => {
    setActiveTabClg(index);
  };
  const handleImageClickOtt = (index) => {
    setActiveTabOtt(index);
  };

  const handleImageClick = (index) => {
    setActiveTabIndex(index); // Cập nhật activeTab1 khi người dùng nhấn vào hình ảnh trong lower-content
  };

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
      <TabComponent
        activeTab={activeTab}
        prevTab={prevTab}
        activeTabIndex={activeTabIndex}
        tabItems={tabItems}
        imgEx={x3_imgEx}
        tabClass={tabClass}
        handleTabClick={handleTabClick}
        tabButtonStyle={tabButtonStyle}
        imageLowerColor={imageLowerColor}
        activeTabClg={activeTabClg}
        activeTabOtt={activeTabOtt}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        imageLowerMamXe={imageLowerMamXe}
        imageLowerChatLieuGhe={imageLowerChatLieuGhe}
        imageLowerTrangTri={imageLowerTrangTri}
        handleImageClick={handleImageClick}
        handleImageClickClg={handleImageClickClg}
        handleImageClickOtt={handleImageClickOtt}
      />
    </>
  );
}
export default TabFurX3;

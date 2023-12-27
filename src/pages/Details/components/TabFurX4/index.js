import React, { useState, useEffect } from 'react';
import TabComponentX from '../TabComponentX';
import {
  tabItems,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
  x4_imgEx,
  x4_imgMamXe,
  x4_imgClg,
  x4_imgtt,
} from '../Data/X4Data';

function TabFurX4() {
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
      <TabComponentX
        activeTab={activeTab}
        prevTab={prevTab}
        activeTabIndex={activeTabIndex}
        tabItems={tabItems}
        imgEx={x4_imgEx}
        imgMamxe={x4_imgMamXe}
        imgClg={x4_imgClg}
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
export default TabFurX4;

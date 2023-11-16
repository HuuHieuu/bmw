import React, { useState } from 'react';
import TabComponent from '../TabComponent';
import {
  tabItems,
  i7_imgEx,
  i7_imgMamXe,
  i7_imgClg,
  i7_imgTrangtri,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
} from '../Data/I7Data';

function TabFurI7() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabClg, setActiveTabClg] = useState(0);
  const [activeTabOtt, setActiveTabOtt] = useState(0);

  const [prevTab, setPrevTab] = useState(null);
  const displayText =
    imageLowerMamXe[activeTabIndex]?.text || 'Mâm khí động học kích thước 21-inch, kiểu 910 BMW Individual';

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
    <TabComponent
      activeTab={activeTab}
      imgEx={i7_imgEx}
      imgMamxe={i7_imgMamXe}
      imgClg={i7_imgClg}
      imgTrangtri={i7_imgTrangtri}
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
      handleImageClick={handleImageClick}
      handleImageClickClg={handleImageClickClg}
      handleImageClickOtt={handleImageClickOtt}
      activeTabIndex={activeTabIndex}
      activeTabClg={activeTabClg}
      activeTabOtt={activeTabOtt}
      displayText={displayText}
    />
  );
}
export default TabFurI7;

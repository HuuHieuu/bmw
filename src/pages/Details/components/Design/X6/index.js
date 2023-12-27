import { contentData } from '../../Data/X6Data';
import General from '../General';
import ThongSoX6 from '~/pages/Details/components/Design/components/ThongSo/ThongSoX6';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import ContentFlex from '../components/contentFlex';

import X6Tab from '../components/X6Tab/index';
import X6Tabx from '../components/X6Tab/indexx';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function X6() {
  return (
    <>
      {/* <div className={cx('tech')} style={{ marginTop: '50px' }}></div> */}
      {/* <p>&nbsp;</p> */}

      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>NHỮNG ĐIỂM NỔI BẬT VỀ THIẾT KẾ CỦA BMW X6.</h1>
        {/* <General content={contentData} /> */}
      </div>

      <p>&nbsp;</p>
      <div>
        <X6Tab />
      </div>

      <p>&nbsp;</p>
      <div>
        <X6Tabx />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>CÁC DỊCH VỤ KỸ THUẬT SỐ VÀ HỆ THỐNG HỖ TRỢ NGƯỜI LÁI TRÊN CHIẾC BMW X6.</h1>
        <p className={cx('nt-p')}>
          Ngoài tất cả các công nghệ và chức năng như Chức năng hiển thị thông tin trên kính chắn gió (BMW Head-Up
          Display), BMW X6 mới vẫn có đủ không gian cho nhiều chức năng hỗ trợ và dịch vụ khác.
        </p>
        <General content={contentData} />
      </div>

      <div className={cx('thong-so')} style={{ marginTop: '50px' }}>
        <h1>THÔNG SỐ KỸ THUẬT BMW X6</h1>
      </div>
      <ThongSoX6 css={{ width: '80%' }} />
    </>
  );
}

export default X6;

import { contentData } from '../../Data/4GranData';
import { contentData2 } from '../../Data/4MuiTranData';
import General from '../General';
import ThongSo4Gran from '~/pages/Details/components/Design/components/ThongSo/ThongSo4Gran';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import Gran4Tab from '../components/4Grantab';

import tk1 from '~/assets/image/4MuiTran/tk1.jpg';
import tk2 from '~/assets/image/4MuiTran/tk2.jpg';
import tk3 from '~/assets/image/4MuiTran/tk3.jpg';
import tk4 from '~/assets/image/4MuiTran/tk4.jpg';
import tk5 from '~/assets/image/4MuiTran/tk5.jpg';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function Bmw4MuiTran() {
  return (
    <>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div className={cx('ngoai-that2')} style={{ marginTop: '0px' }}>
        <h1>BMW 4 SERIES GRAN COUPÉ VỚI CÁC ĐẶC TÍNH LÁI XE NĂNG ĐỘNG ĐẶC TRƯNG.</h1>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={contentData} />
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>THIẾT KẾ MANG TÍNH THẨM MỸ CỦA CHIẾC BMW 4 SERIES GRAN COUPÉ.</h1>
        <p className={cx('nt-p')}>
          BMW 4 Series Gran Coupé mang đậm nét mui trần trang nhã và ngôn ngữ thiết kế tiên tiến. Lưới tản nhiệt phát
          sáng hình quả thận với kết cấu lưới hình lục giác đem lại dáng vẻ mạnh mẽ cho phần phía trước. Kết hợp với đèn
          pha bằng và các khe hút gió lớn, lưới tản nhiệt là điểm nhấn nổi bật của Gran Coupé.
        </p>
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>THIẾT KẾ MANG TÍNH THẨM MỸ CỦA CHIẾC BMW 4 SERIES GRAN COUPÉ.</h1>
        <p className={cx('nt-p')}>
          BMW 4 Series Gran Coupé mang đậm nét mui trần trang nhã và ngôn ngữ thiết kế tiên tiến. Lưới tản nhiệt phát
          sáng hình quả thận với kết cấu lưới hình lục giác đem lại dáng vẻ mạnh mẽ cho phần phía trước. Kết hợp với đèn
          pha bằng và các khe hút gió lớn, lưới tản nhiệt là điểm nhấn nổi bật của Gran Coupé.
        </p>
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>NỘI THẤT RỘNG RÃI CỦA CHIẾC BMW 4 SERIES GRAN COUPÉ.</h1>
        <p className={cx('nt-p')}>
          Trong nội thất rộng rãi của chiếc BMW 4 Series Gran Coupé, bạn sẽ bắt gặp không chỉ là ghế ngồi đủ cỡ mà còn
          không gian hành lý ấn tượng với dung tích lên tới 1.290 lít nhờ băng ghế sau đa chức năng.
        </p>
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '5%' }}>
        <h1>BMW 4 SERIES GRAN COUPÉ ĐEM LẠI SỰ THOẢI MÁI HƠN VỚI CÁC TÍNH NĂNG THÔNG MINH.</h1>
        <General content={contentData2} customCss={{ width: '700px' }} />
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>PHỤ KIỆN VÀ PHỤ TÙNG BMW M PERFORMANCE CỦA BMW 4 SERIES GRAN COUPÉ.</h1>
        <p className={cx('nt-p')}>
          Phụ kiện chính hãng BMW hoàn toàn phù hợp với xe về mặt chất lượng, thiết kế và cho phép bạn tùy chỉnh chiếc
          BMW 4 Series Gran Coupé theo sở thích của mình. Ngoài ra, các tùy chọn thiết kế độc đáo từ Phụ tùng BMW M
          Performance đem lại trình độ đặc tính đua xe mạnh mẽ nhất cho ngoại thất và nội thất.
        </p>
      </div>
      <p>&nbsp;</p>
      <div>
        <Gran4Tab />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>THÔNG SỐ KỸ THUẬT BMW 4 SERIES GRAN COUPÉ</h1>
      </div>
      <ThongSo4Gran />
    </>
  );
}

export default Bmw4MuiTran;

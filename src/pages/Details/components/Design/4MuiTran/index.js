import { contentData, contentData2, phukien } from '../../Data/4MuiTranData';
import General from '../General';
import ThongSo4MT from '~/pages/Details/components/Design/components/ThongSo/ThongSo4MT';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import MT4Tab from '../components/4MTTab';

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

      <div
        className={cx('noi-that')}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <h1>Thiết kế của chiếc BMW 4 Series Mui Trần.</h1>
        <div className={cx('khong-gian-nt')}>
          <img className={cx('kg-nt-1')} src={tk1} alt="thiết kế" />
          <img className={cx('kg-nt-2')} src={tk2} alt="thiết kế" />
          <img className={cx('kg-nt-1')} src={tk4} alt="thiết kế" />
          <img className={cx('kg-nt-4')} src={tk3} alt="thiết kế" />
          <img className={cx('kg-nt-5')} src={tk5} alt="thiết kế" />
        </div>
      </div>

      <div style={{ marginTop: '25%' }}></div>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>KHẢ NĂNG ĐIỀU KHIỂN CHIẾC BMW 4 SERIES MUI TRẦN.</h1>
        <p className={cx('nt-p')}>
          Khả năng bám đường thể thao, khả năng xử lý tối ưu và tính linh hoạt cao: về hiệu suất và động lực lái, BMW 4
          Series Mui Trần mang đến những cảm giác lái thú vị. Với động cơ BMW TwinPower Turbo mạnh mẽ và các thành phần
          hệ thống treo phù hợp hoàn hảo, chiếc xe mui trần vượt trội này luôn sẵn sàng cho mọi thử thách.
        </p>
        <General content={contentData} />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '5%' }}>
        <h1>CÔNG NGHỆ TIÊN TIẾN CỦA BMW 4 SERIES MUI TRẦN.</h1>
        <General content={contentData2} customCss={{ width: '700px' }} />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>THÔNG SỐ KỸ THUẬT BMW 4 SERIES MUI TRẦN</h1>
      </div>
      <ThongSo4MT />

      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>PHỤ KIỆN BMW CHÍNH HÃNG DÀNH CHO CHIẾC BMW 4 SERIES MUI TRẦN.</h1>
        <p className={cx('nt-p')}>
          Với BMW 4 Series Mui Trần, niềm vui khi lái xe sẽ được đảm bảo. Phụ kiện BMW chính hãng ra đời để đáp ứng mong
          muốn đặc biệt của bạn. Chúng tôi cung cấp nhiều lựa chọn bổ sung và tính năng bổ sung riêng lẻ hoàn toàn phù
          hợp với BMW 4 Series Mui Trần về chất lượng, thiết kế và hiệu suất, sẵn sàng đáp ứng bất cứ điều gì bạn mong
          chờ.
        </p>
        <General content={phukien} />
      </div>

      <p>&nbsp;</p>
      <div className={cx('ngoai-that2')} style={{ marginTop: '50px' }}>
        <h1>CÁC PHỤ TÙNG BMW M PERFORMANCE DÀNH CHO XE MUI TRẦN BMW 4 SERIES.</h1>
        <p className={cx('nt-p')}>
          BMW 4 Series Mui Trần nổi bật giữa đám đông với thiết kế tinh giản: Các phụ kiện chất lượng cao từ BMW M
          Performance Parts nhấn mạnh đặc tính năng động của chiếc xe mui trần thời thượng này.
        </p>
      </div>
      <div>
        <MT4Tab />
      </div>
    </>
  );
}

export default Bmw4MuiTran;

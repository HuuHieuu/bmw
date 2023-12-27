import { contentData, contentData2, contentFlex, contentFlex2, phukien, performance } from '../../Data/X4Data';
import General from '../General';
import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import Ix3Tab from '../components/Ix3Tab';
import ThongSoIx3 from '../components/ThongSo/ThongSoIx3';
import ContentFlex from '../components/contentFlex';

const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function X4() {
  return (
    <>
      <div className={cx('tech')} style={{ marginTop: '50px' }}></div>
      <ContentFlex ContentFlex={contentFlex} />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <ContentFlex ContentFlex={contentFlex2} customCss={{ flexDirection: 'row-reverse' }} />

      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>CƠ CẤU TRUYỀN ĐỘNG VÀ CÁC THÀNH PHẦN KHUNG CỦA BMW X4.</h1>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={contentData} />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>DỊCH VỤ KỸ THUẬT SỐ VÀ HỆ THỐNG HỖ TRỢ CỦA BMW X4</h1>
        <p className={cx('nt-p')}>
          Các công nghệ tiên tiến như tích hợp điện thoại thông minh, BMW Maps và BMW News, cũng như các hệ thống hỗ trợ
          lái xe cực kỳ hiện đại như Driving Assistant Professional nâng cao hơn nữa trải nghiệm lái xe và sự an toàn ở
          BMW X4.
        </p>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={contentData2} />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>PHỤ KIỆN BAN ĐẦU BMW CHO BMWX4</h1>
        <p className={cx('nt-p')}>
          Với BMW X4, đảm bảo sự thoải mái khi lái xe Phụ kiện BMW chính hãng ra đời để đáp ứng mong muốn đặc biệt của
          bạn. Chúng tôi cung cấp nhiều lựa chọn bổ sung và tính năng bổ sung hoàn toàn phù hợp với BMW X4 liên quan đến
          chất lượng, thiết kế và hiệu suất, mang đến cho bạn giá trị gia tăng tối đa - bất cứ điều gì mà khách hàng có
          thể hình dung được.
        </p>
        <General content={phukien} />
      </div>

      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>BMW M PERFORMANCE PARTS CHOTHE BMW X4.</h1>
        <p className={cx('nt-p')}>
          BMW X4 tự tin nổi bật giữa đám đông nhờ thiết kế nổi bật: Với các phụ kiện chất lượng cao từ BMW M Performance
          Parts, bạn có thể tôn vinh đặc tính thể thao của chiếc Sports Activity Coupé đặc biệt này.
        </p>
        <General content={performance} />
      </div>

      {/* chính sách bảo hành */}
      <div className={cx('policy')}>
        <h1>Mức tiêu thụ nhiên liệu và lượng khí thải CO2.</h1>
        <div className={cx('policy-content')}>
          <p style={{ fontWeight: 100 }}>
            DỊCH VỤ CỦA BMW DÀNH RIÊNG CHO BMW X4.
            <br></br>
            #bất kể mọi chuyện xảy ra. Gói dịch vụ du lịch toàn diện: gói này sẽ cung cấp cho bạn sự minh bạch 100% và
            thuận tiện lập kế hoạch khác nhau cho thời gian hoặc quãng đường đã chọn của bạn.
          </p>
          <br></br>
          <p style={{ fontWeight: 100 }}>
            Chi tiết các gói dịch vụ:
            <br></br>
            <ul style={{ marginLeft: '16px' }}>
              <li style={{ listStyleType: 'disc' }}>Dịch vụ thay dầu động cơ</li>
              <li style={{ listStyleType: 'disc' }}>Dịch vụ kiểm tra xe theo hướng dẫn của BMW</li>
              <li style={{ listStyleType: 'disc' }}>Bảo dưỡng thay lọc gió động cơ.</li>
              <li style={{ listStyleType: 'disc' }}>Bảo dưỡng thay lọc gió động cơ (cho động cơ diesel)</li>
              <li style={{ listStyleType: 'disc' }}>Bảo dưỡng thay lọc gió điều hòa.</li>
              <li style={{ listStyleType: 'disc' }}>Bảo dưỡng thay bugi (cho động cơ xăng)</li>
              <li style={{ listStyleType: 'disc' }}>Bảo dưỡng thay dầu phanh.</li>
            </ul>
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default X4;

import { contentData, contentData2, huongdentuonglai, khamPhaCNMoi } from '../../Data/X3Data';
import General from '../General';

import classNames from 'classnames/bind';
import style from '../I7/I7.module.scss';
import Ix3Tab from '../components/Ix3Tab';
import ThongSoIx3 from '../components/ThongSo/ThongSoIx3';
const cx = classNames.bind(style);

const styles = {
  disc: {
    listStyleType: 'disc',
    fontWeight: '100',
  },
};

function X3() {
  return (
    <>
      {/* công suất ấn tượng*/}
      <div className={cx('ngoai-that')} style={{ marginTop: '85px' }}>
        <h1>CÔNG SUẤT ẤN TƯỢNG.</h1>
        <h3>Động cơ của BMW X3</h3>
        <p className={cx('nt-p')}>
          BMW X3 thể hiện kiểu dáng thể thao và năng động Nhờ có cấu trúc nhẹ thông minh và các tính năng khí động học
          kết hợp, mẫu xe này mang đến sự linh hoạt vượt bật và phản lực mô-men xoắn cao trong mọi tình huống Kiểm soát
          thông gió của lưới tản nhiệt hình quả thận theo phương thức luồng khí chủ động là một phương pháp độc đáo -
          nếu nhu cầu làm mát thấp, một lỗ thông gió sẽ tự động đóng lại, do đó sẽ có sự tăng cường hơn nữa trong khí
          động học.
        </p>
        <General content={contentData} />;
      </div>
      {/* ổn định hướng bằng nút bấm */}
      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>ỔN ĐỊNH HƯỚNG BẰNG NÚT BẤM.</h1>
        <h3>Hệ thống trợ lái của BMW X3</h3>
        <p className={cx('nt-p')}>
          Hệ thống trợ lái tiên tiến giúp nâng cao trải nghiệm lái xe BMW X3 Hệ thống vận hành được nâng cấp với hướng
          dẫn người dùng trực quan và các tính năng kỹ thuật số thực tế - tập trung tối đa vào nhu cầu và hướng đến khả
          năng điều khiển xe tự chủ.
        </p>
        <General content={contentData2} />
      </div>

      {/* kết nối liên tục */}
      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>KẾT NỐI LIÊN TỤC.</h1>
        <h3>Dịch vụ số của BMW X3</h3>
        <p className={cx('nt-p')}>
          Có thể kết nối với bạn bè và mọi người trong khi đi du lịch, sử dụng các dịch vụ độc quyền và ứng dụng thông
          minh, gọi điện, gửi e-mail hoặc lướt Internet qua Wifi - BMW X3 tạo ra một định nghĩa riêng về khả năng kết
          nối và sự tiện nghi.
        </p>
        <General content={khamPhaCNMoi} />
      </div>

      {/* hướng đến tương lai */}
      <div className={cx('ngoai-that')} style={{ marginTop: '85px' }}>
        <h1>HƯỚNG ĐẾN TƯƠNG LAI.</h1>
        <h3>BMW X3 xDrive30e.</h3>
        <p className={cx('nt-p')}>
          Mẫu xe BMW X3 xDrive30e kết hợp hai yếu tố tối ưu: động lực học và hiệu suất của động cơ điện với phạm vi hoạt
          động và sự thoải mái tiện lợi của động cơ khí đốt, Động cơ lai sạc điện như mẫu xe SUV cùng với các công nghệ
          kỹ thuật thông minh và gia tốc động mang đến trải nghiệm lái xe linh hoạt.
        </p>
        <General content={huongdentuonglai} />;
      </div>

      {/* Thông số kĩ thuật */}

      {/* chính sách bảo hành */}
      <div className={cx('policy')}>
        <h1>Mức tiêu thụ nhiên liệu và lượng khí thải CO2.</h1>
        <div className={cx('policy-content')}>
          <p style={{ fontWeight: 100 }}>
            BMW X3 xDrive20i (R18):
            <br></br>
            Mức tiêu thụ nhiên liệu kết hợp (l/100 km): 8.6
            <br></br>
            Mức tiêu thụ nhiên liệu trong đô thị (l/100 km): 10.86
            <br></br>
            Mức tiêu thụ nhiên liệu ngoài đô thị (l/100 km): 7.32
            <br></br>
            Số giấy chứng nhận: 20KDN/000124
          </p>
          <br></br>
          <p style={{ fontWeight: 100 }}>
            BMW X3 xDrive20i (R19):
            <br></br>
            Mức tiêu thụ nhiên liệu kết hợp (l/100 km): 8.54
            <br></br>
            Mức tiêu thụ nhiên liệu trong đô thị (l/100 km): 10.79
            <br></br>
            Mức tiêu thụ nhiên liệu ngoài đô thị (l/100 km): 7.27
            <br></br>
            Số giấy chứng nhận: 20KDN/000123
          </p>
          <br></br>
          <p style={{ fontWeight: 100 }}>
            BMW X3 xDrive30i:
            <br></br>
            Mức tiêu thụ nhiên liệu kết hợp (l/100 km): 8.73
            <br></br>
            Mức tiêu thụ nhiên liệu trong đô thị (l/100 km): 11.13
            <br></br>
            Mức tiêu thụ nhiên liệu ngoài đô thị (l/100 km): 7.34
            <br></br>
            Số giấy chứng nhận: 20KDN/000127
          </p>
        </div>
      </div>
    </>
  );
}

export default X3;

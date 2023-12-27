import { contentData, contentData2, thietBiSac, khamPhaCNMoi } from '../../Data/Ix3Data';
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

function iX3() {
  return (
    <>
      {/* Ngoai that */}
      <div className={cx('ngoai-that')} style={{ marginTop: '85px' }}>
        <h1>THIẾT KẾ MỚI THỂ THAO VÀ ĐỘC ĐÁO CỦA BMW iX3</h1>
        <h3>BMW iX3 THUẦN ĐIỆN - CHIẾC XE MANG ĐẾN THIẾT KẾ THỂ THAO VÀ ĐIỆN ĐỘC ĐÁO</h3>
        <p className={cx('nt-p')}>
          Với những đường nét sắc sảo ở những đường viền, BMW iX3 đã tạo ấn tượng mạnh mẽ và khó quên. Các chi tiết màu
          xanh lam trên thân xe làm nổi bật bản chất điện thuần túy, cùng với đèn pha LED thích ứng hiệu ứng âm thanh
          nổi 3D mới mang lại ánh nhìn sắc và sâu. Bánh xe khí động học siêu lớn 20inch giúp tối ưu hóa luồng khí và
          năng lượng, tất cả khiến cho BMW iX3 thuần điện vừa khỏe khoắn vừa tôn dáng, thể hiện trọn vẹn cá tính tự do
          của bạn.
        </p>
        <General content={contentData} />;
      </div>
      {/* Ngoại thất p2 */}
      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>NGOẠI THẤT NỔI BẬT CỦA BMW iX3</h1>
        <h3>BMW iX3: NỘI THẤT SANG TRỌNG VÀ ĐỔI MỚI</h3>
        <p className={cx('nt-p')}>
          BMW iX3 là sự kế thừa và phát triển của một thế kỷ lịch sử thiết kế nội thất của BMW. Với phong cách đặc trưng
          của BMW i, BMW iX3 mang đến cho bạn một không gian khoang lái đẳng cấp và tiện nghi. Trang trí kim loại tinh
          xảo và hiện đại tạo nên sự tương phản và hài hòa cho nội thất xe, khẳng định sự đổi mới và tinh tế của thương
          hiệu.
        </p>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={contentData2} />
      </div>

      {/* Khám phá công nghệ lái */}
      <div className={cx('ngoai-that2')} style={{ marginTop: '85px' }}>
        <h1>KHÁM PHÁ CÔNG NGHỆ LÁI ĐỈNH CAO TRÊN BMW iX3</h1>
        <p className={cx('nt-p')}>
          KHÁM PHÁ CÔNG NGHỆ LÁI ĐỈNH CAO TRÊN BMW IX3 Năng động, hiệu quả và sáng tạo hơn bao giờ hết với công nghệ BMW
          eDrive thế hệ thứ năm được trang bị trên BMW iX3. Kết hợp với pin điện áp cao mới được phát triển và hệ thống
          treo thích ứng, nó cho phép chiếc SAV này mang lại hiệu suất lái điện tử và khả năng tăng tốc ấn tượng trên
          mọi cung đường.
        </p>
        <General customCss2={{ width: '88%', flexWrap: 'nowrap' }} content={khamPhaCNMoi} />
      </div>

      <p>&nbsp;</p>
      <div>
        <Ix3Tab />
      </div>

      {/* Thiết bị sạc điện */}
      <div className={cx('tb-sac')} style={{ marginTop: '50px' }}>
        <h1>NHỮNG THIẾT BỊ SẠC ĐIỆN</h1>
      </div>
      <General content={thietBiSac} />

      {/* Thông số kĩ thuật */}
      <div className={cx('thong-so')} style={{ marginTop: '50px' }}>
        <h1>THÔNG SỐ KỸ THUẬT BMW ix3</h1>
      </div>
      <ThongSoIx3 />

      {/* chính sách bảo hành */}
      <div className={cx('policy')}>
        <h1>Chính sách bảo hành cho các dòng xe điện BMW i</h1>
        <div className={cx('policy-content')}>
          <p>Các dòng xe thuần điện BMW i có chính sách bảo hành khác biệt so với xe máy xăng, cụ thể:</p>
          <ul style={{ marginLeft: '20px', padding: '9px 0' }}>
            <li style={styles.disc}>Thời hạn bảo hành cho xe: 3 năm không giới hạn số km.</li>
            <li style={styles.disc}>Thời hạn bảo hành Pin cao áp: 8 năm/160,000 km tuỳ điều kiện nào đến trước. </li>
          </ul>
          <p>Chính sách bảo hành này được áp dụng chung cho BMW iX3, BMW i4 và BMW i7.</p>
        </div>
      </div>
    </>
  );
}

export default iX3;

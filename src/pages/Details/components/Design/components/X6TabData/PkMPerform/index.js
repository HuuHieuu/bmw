import luoitannhiet from '~/assets/image/bmw_x6/luoi_tan_nhiet.jpg';
import canhtannhiet from '~/assets/image/bmw_x6/canh_tan_nhiet.jpg';
import bohuonggio from '~/assets/image/bmw_x6/bo_huong_gio.jpg';
import decal from '~/assets/image/bmw_x6/decal_hong_xe.jpg';
import napguong from '~/assets/image/bmw_x6/nap_guong_ngoai.jpg';
import volang from '~/assets/image/bmw_x6/vo_lang.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: luoitannhiet,
    alt: '  Lưới tản nhiệt hình quả thận M Performance bằng sợi carbon. ',
    textHead: '  Lưới tản nhiệt hình quả thận M Performance bằng sợi carbon. ',
    textBody:
      'Thể hiện phong cách của bạn: Khung của lưới tản nhiệt hình quả thận M Performance được làm 100 phần trăm bằng sợi carbon cao cấp được tạo tác thủ công và các thanh trang trí bằng nhựa cực kỳ chắc chắn. Điểm nhấn trực quan ở phần đầu xe cho một cái nhìn đặc biệt thanh lịch, thể thao và cá tính.',
  },
  {
    src: canhtannhiet,
    alt: '  Các cánh tản nhiệt phía sau M Performance có màu đen bóng cao cấp.  ',
    textHead: '    Các cánh tản nhiệt phía sau M Performance có màu đen bóng cao cấp.  ',
    textBody:
      'Cho một diện mạo cực kỳ thể thao. Các cánh tản nhiệt phía sau M Performance nhấn mạnh vẻ trang nhã năng động của chiếc xe. Các chi tiết này càng làm tăng kiểu dáng thể thao năng động và dấu ấn cá nhân của chiếc xe.',
  },
  {
    src: bohuonggio,
    alt: ' Bộ hướng gió sau M được làm bằng sợi carbon.   ',
    textHead: '  Bộ hướng gió sau M được làm bằng sợi carbon.   ',
    textBody:
      'Thậm chí còn ấn tượng hơn nhiều: Cánh gió sau M Performance bằng sợi carbon nhấn mạnh chất lượng tối ưu, diện mạo năng động của xe. Vật liệu sợi carbon kỹ thuật cao giúp xe siêu nhẹ và đồng thời vô cùng chắc chắn. Bộ hướng gió được làm bằng sợi carbon chất lượng cao tạo tác tỉ mỉ bằng tay phù hợp hoàn hảo với kiểu dáng xe và hài hòa với các bộ phận ngoại thất khác được làm bằng sợi carbon.',
  },
  {
    src: napguong,
    alt: '   Nắp gương ngoài M Performance làm bằng sợi carbon.   ',
    textHead: '    Nắp gương ngoài M Performance làm bằng sợi carbon.   ',
    textBody:
      'Làm bằng sợi carbon được tạo tác tỉ mỉ bằng tay, nắp gương bên ngoài nổi bật cho công nghệ cao của xe. Thiết kế năng động đảm bảo đem lại dáng vẻ sang trọng bắt mắt và tô điểm thêm nét thể thao riêng.',
  },
  {
    src: decal,
    alt: '  Decal bên hông xe M Performance có màu đen bóng.    ',
    textHead: '   Decal bên hông xe M Performance có màu đen bóng.    ',
    textBody:
      'Thể thao sang trọng trên cabin: Lớp màng M Performance màu đen (màu đen/xám mờ) tạo nên dáng vẻ riêng vô cùng năng động cho chiếc xe. Vị trí lớp màng trên bệ cửa xe bên hông nhấn mạnh các đặc tính và tỷ lệ thiết kế đặc trưng của chiếc xe.',
  },
  {
    src: volang,
    alt: '  Vô lăng M Performance    ',
    textHead: '   Vô lăng M Performance    ',
    textBody:
      'Sự thật thú vị: Nhờ có khu vực tay lái được lót Alcantara, vô-lăng M Performance mang lại cảm giác và độ bám tuyệt vời – tạo nên cảm giác lái thể thao hơn. Thiết kế đặc biệt và dải trung tâm làm bằng da đỏ nhấn mạnh phong cách đua xe thể thao của chiếc xe.',
  },
];

function PkMPerform() {
  return (
    <>
      <div>
        <General content={content} />
      </div>
    </>
  );
}

export default PkMPerform;

import denvien from '~/assets/image/bmw_x6/denvien.jpg';
import kinhcraft from '~/assets/image/bmw_x6/kinhcraft.jpg';
import cuasotroitc from '~/assets/image/bmw_x6/cuasotroitc.jpg';

import General from '../../../General';

// const cx = classNames.bind(styles);
const content = [
  {
    src: denvien,
    alt: '  Đèn viền nội thất.  ',
    textHead: ' Đèn viền nội thất. ',
    textBody:
      'Đèn viền nội thất tiêu chuẩn, bao gồm đèn viền xung quanh ở cửa trước và cửa sau, tạo ra một bầu không khí với ánh sáng dịu nhẹ và ấm cúng trong nội thất. Đèn chào mừng Welcome light carpet chiếu sáng khu vực trước cửa xe khi ra vào. Hiện có sáu thiết kế ánh sáng có thể điều chỉnh độ sáng với các màu Trắng, Xanh lam, Cam, Đồng, Tử đinh hương và Xanh lục.',
  },
  {
    src: kinhcraft,
    alt: " Kính 'CraftsClarity' trong nội thất. ",
    textHead: "   Kính 'CraftsClarity' trong nội thất. ",
    textBody:
      "Kính 'CraftedClarity' được sử dụng trên BMW X6 bao gồm các thành phần bằng thủy tinh thủ công giúp cải thiện trải nghiệm nội thất trực quan sinh động. Các chi tiết của cần chọn số, BMW Controller và nút Start/Stop được làm bằng pha lê tinh xảo.",
  },
  {
    src: cuasotroitc,
    alt: ' Cửa sổ trời toàn cảnh Panorama Sky Lounge. ',
    textHead: '  Cửa sổ trời toàn cảnh Panorama Sky Lounge. ',
    textBody:
      'Cửa sổ trời toàn cảnh Panorama Sky Lounge tạo ra một không gian rộng rãi vào ban ngày. Vào ban đêm, tính năng này tạo ra một bầu không khí thoải mái với thiết kế ánh sáng bao gồm hơn 15.000 chi tiết. Ngoài ra, phía sau của hàng ghế trước có đèn viền không gian Thiết kế ánh sáng và ánh sáng ghế có thể được chuyển đổi giữa sáu màu đèn viền không gian.',
  },
];

function NoiThat() {
  return (
    <>
      <div>
        <General content={content} />
      </div>
    </>
  );
}

export default NoiThat;

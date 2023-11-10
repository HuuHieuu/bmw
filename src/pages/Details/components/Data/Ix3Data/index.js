// color-xe
import ix3_den from '~/assets/image/bmw_ix3/ix3_den.webp';
import ix3_bac from '~/assets/image/bmw_ix3/ix3_bac.webp';

// mâm
import ix3_mamxe_upper_black from '~/assets/image/bmw_ix3/ix3_mamxe_upper_black.webp';
import ix3_mamxe_upper_bac from '~/assets/image/bmw_ix3/ix3_mamxe_upper_bac.webp';

// clg-upper
import ix3_clg_black_up from '~/assets/image/bmw_ix3/ix3_clg_upper_black.webp';
import ix3_clg_mocha_up from '~/assets/image/bmw_ix3/ix3_clg_upper_mocha.webp';
import ix3_clg_oyster_up from '~/assets/image/bmw_ix3/ix3_clg_upper_oyster.webp';
// op tt
import ix3_optt_upper from '~/assets/image/bmw_ix3/ix3_optt_upper.webp';

// color-lower
import ix3_color_den from '~/assets/image/bmw_ix3/den_ix3.jpeg';
import ix3_color_bac from '~/assets/image/bmw_ix3/bac_ix3.jpeg';
// mâm xe
import ix3_mamxe from '~/assets/image/bmw_ix3/mamxe_ix3.jpeg';
// chất liệu ghế
import ix3_clg_black_low from '~/assets/image/bmw_ix3/clg_black.jpeg';
import ix3_clg_mocha_low from '~/assets/image/bmw_ix3/clg_mocha.jpeg';
import ix3_clg_oyster_low from '~/assets/image/bmw_ix3/clg_oyster.jpeg';
// ốp trang trí
import ix3_op_trangtri from '~/assets/image/bmw_ix3/ix3_op_trangtri.jpeg';

const tabItems = [
  { label: 'Màu ngoại thất' },
  { label: 'Mâm xe' },
  { label: 'Chất liệu ghế' },
  { label: 'Ốp trang trí nội thất' },
];

const imgupper = [
  [
    { src: ix3_den, alt: 'i3_maungoaithat_den' },
    { src: ix3_bac, alt: 'i3_maungoaithat_bac' },
  ],
  { src: ix3_mamxe_upper_black, alt: 'ix3_mâm_xe_black' },
  [
    { src: ix3_clg_black_up, alt: 'ix3_chất_liệu_ghế_black' },
    { src: ix3_clg_mocha_up, alt: 'ix3_chất_liệu_ghế_mocha' },
    { src: ix3_clg_oyster_up, alt: 'ix3_chất_liệu_ghế_oyster' },
  ],
  { src: ix3_optt_upper, alt: 'ix3_ốp_trang_trí' },
];

const imageLowerColor = [
  { src: ix3_color_den, alt: 'ix3_đen' },
  { src: ix3_color_bac, alt: 'ix3_bạc' },
];
const imageLowerMamXe = [{ src: ix3_mamxe, alt: 'ix3_mam_xe' }];
const imageLowerChatLieuGhe = [
  { src: ix3_clg_black_low, alt: 'ix3_chất_liệu_ghế_black' },
  { src: ix3_clg_mocha_low, alt: 'ix3_chất_liệu_ghế_mocha' },
  { src: ix3_clg_oyster_low, alt: 'ix3_chất_liệu_ghế_oyster' },
];
const imageLowerTrangTri = [{ src: ix3_op_trangtri, alt: 'ix3_ốp_trang_trí' }];

// map color
const colorToImageMap = {
  [ix3_color_den.src]: ix3_den,
  [ix3_color_bac.src]: ix3_bac,
  // Thêm các màu và hình ảnh tương ứng vào đây
};
const tabData = [
  {
    upperContent: ix3_den,
    lowerContent: ix3_color_den,
  },
  {
    upperContent: ix3_bac,
    lowerContent: ix3_color_bac,
  },
];

export {
  tabItems,
  imgupper,
  imageLowerColor,
  imageLowerMamXe,
  imageLowerChatLieuGhe,
  imageLowerTrangTri,
  colorToImageMap,
  tabData,
};

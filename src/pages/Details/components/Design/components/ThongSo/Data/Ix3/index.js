export function createData(key, value) {
  return { key, value };
}

const thongSoRows = [
  createData('Công suất động cơ tính bằng kW (hp):', '210(286)'),
  createData('Mô-men xoắn cực đại tính bằng Nm:', '400'),
  createData('Tăng tốc 0–100 km/h tính bằng s:', '6'),
  createData('Phạm vi điện tính bằng km (WLTP):', '483'),
  createData('Thời gian sạc AC (11 kW) 0-100%:', '8.25 giờ'),
];

const thongSoRowsX5 = [
  createData('Công suất cực đại kW (hp):', '280(381)'),
  createData('Tăng tốc từ 0-100 km/h trong giây:', '5.5'),
  createData('Vận tốc tối đa trong km/h:', '250'),
  createData('Dung tích bình xăng trong L:', '83'),
];

const thongSoRowsX6 = [
  createData('Sức mạnh động cơ kW (hp) tại 1/phút', '245–250 (333–340)/5.500–6.250 – 5.500–6.500'),
  createData('Tốc độ tối đa tính bằng km/h:', '246–250'),
  createData('Gia tốc 0-100 km/h trong giây:', '5,7–5,5'),
  createData('Mức tiêu thụ nhiên liệu trung bình tính bằng l/100 km kết hợp (WLTP):', '9,0'),
  createData('Mức khí xả CO2 tính bằng g/km kết hợp (WLTP):', '206'),
];

const thongSoRows4MT = [
  createData('Sức mạnh động cơ kW (hp) tại 1/phút', '190 (258)/5,500–6,500'),
  createData('Gia tốc 0-100 km/h trong giây:', '6.2'),
  createData('Mức tiêu thụ nhiên liệu hỗn hợp l/100 km:', '6.8'),
  createData('Khí thải hỗn hợp trong g/km', '155'),
];

const thongSoRows4Gran = [
  createData('Sức mạnh động cơ kW (hp) tại 1/phút', '180 (245)/4.500-6.500'),
  createData('Gia tốc 0-100 km/h trong giây:', '6.2'),
  createData('Mức tiêu thụ nhiên liệu hỗn hợp l/100 km:', '6.6'),
  createData('Khí thải hỗn hợp trong g/km', '151'),
];

const thongSoRows5 = [
  createData('Sức mạnh động cơ kW (hp) tại 1/phút', '120-135 (163-184)/5,000-6,500'),
  createData('Gia tốc 0-100 km/h trong giây:', '8.6-7.8'),
  createData('Mức tiêu thụ nhiên liệu hỗn hợp l/100 km:', '6.8'),
  createData('Khí thải hỗn hợp trong g/km', '156'),
];

const thongSoRowsXM = [
  createData('Công suất cực đại kW (hp):', '480 (653)'),
  createData('Tăng tốc từ 0-100 km/h trong giây:', '4.3'),
  createData('Vận tốc tối đa trong km/h:', '250'),
  createData('Dung tích bình xăng trong L:', '69'),
];

export { thongSoRows, thongSoRowsX5, thongSoRowsX6, thongSoRows4MT, thongSoRows4Gran, thongSoRows5, thongSoRowsXM };

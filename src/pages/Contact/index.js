import DefaultLayout from '~/layouts/DefaultLayout';
import Footer from '../components/Footer';
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';
import classNames from 'classnames/bind';
import React, { useState, useRef } from 'react';

import email from '~/assets/image/contact/email.png';
import phoneNumber from '~/assets/image/contact/phone.png';
import address from '~/assets/image/contact/diachi.png';

const cx = classNames.bind(styles);

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [hoTen, setHoTen] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  const handleNameChange = (e) => setHoTen(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Validate form fields
    if (!hoTen || !phone) {
      setIsLoading(false);
      // alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    // Send email using Email.js
    try {
      const templateParams = {
        senderName: hoTen,
        phone: phone,
        message: content,
      };

      const response = await emailjs.send('service_14ar2be', 'template_5v3m4nb', templateParams, 'vK5LcilCR4WZ4QLvd');

      if (response.status === 200) {
        setIsLoading(false);
        setSubmitStatus('success');
        // alert('Gửi thành công!');
        // Clear form fields
        setHoTen('');
        setPhone('');
        setContent('');
      } else {
        setIsLoading(false);
        // alert('Có lỗi xảy ra khi gửi. Vui lòng thử lại sau.');
        setSubmitStatus('error');
      }
    } catch (error) {
      setIsLoading(false);
      setSubmitStatus('error');

      console.error('Error sending email:', error);
      // alert('Có lỗi xảy ra khi gửi. Vui lòng thử lại sau.');
    }
  };

  return (
    <>
      <DefaultLayout />
      <div className={cx('contact-container')}>
        <div className={cx('contact')}>
          <div className={cx('contact-content')}>
            <div className={cx('content-left')}>
              <h3 style={{ marginBottom: '6%' }}>BMW HÀ NỘI</h3>
              <div className={cx('flex1')}>
                <div className={cx('con-email')}>
                  <div className={cx('icon')}>
                    <div className={cx('icon-inner')}>
                      <img src={email} alt="email" />
                    </div>
                  </div>
                </div>
                <div className={cx('con-lienhe')}>
                  <h5 style={{ color: '#039bea', lineHeight: '2' }}>
                    Email
                    <br></br>
                    <span style={{ color: 'black' }}>huuchung28111996@gmail.com</span>
                  </h5>
                </div>
              </div>
              <div style={{ padding: '3% 0' }}></div>

              {/*  */}
              <div className={cx('flex1')}>
                <div className={cx('con-email')}>
                  <div className={cx('icon')}>
                    <div className={cx('icon-inner')}>
                      <img src={phoneNumber} alt="phone" />
                    </div>
                  </div>
                </div>
                <div className={cx('con-lienhe')}>
                  <h5 style={{ color: '#039bea', lineHeight: '2' }}>
                    Số điện thoại
                    <br></br>
                    <span style={{ color: 'black' }}>0588.26.26.66</span>
                  </h5>
                </div>
              </div>
              <div style={{ padding: '3% 0' }}></div>
              {/*  */}
              <div className={cx('flex1')}>
                <div className={cx('con-email')}>
                  <div className={cx('icon')}>
                    <div className={cx('icon-inner')}>
                      <img src={address} alt="email" />
                    </div>
                  </div>
                </div>
                <div className={cx('con-lienhe')}>
                  <h5 style={{ color: '#039bea', lineHeight: '2' }}>
                    Địa chỉ
                    <br></br>
                    <span style={{ color: 'black' }}>68 Đ. Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className={cx('content-right')}>
              <h3>Liên hệ tư vấn miễn phí</h3>

              <div className={cx('flex')}>
                <div className={cx('name')}>
                  <input type="text" value={hoTen} onChange={handleNameChange} placeholder="Họ Tên" />
                </div>
                <div className={cx('phone')}>
                  <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="Điện thoại" />
                </div>
                <div className={cx('noidung')}>
                  <textarea value={content} onChange={handleContentChange} placeholder="Nội dung" />
                </div>
              </div>
              <button className={cx('btn-css')} onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Đang Gửi...' : 'Gửi'}
              </button>
              {submitStatus === 'success' && <div style={{ color: 'green' }}>Gửi thành công!</div>}
              {submitStatus === 'error' && (
                <div style={{ color: 'red' }}>Có lỗi xảy ra khi gửi. Vui lòng thử lại sau.</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15%' }}></div>
      <Footer />
    </>
  );
}

export default Contact;

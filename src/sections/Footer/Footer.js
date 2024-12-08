import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import logoFooter from '../../components/icons/Frame-1410138451.png';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('block-footer-top')}>
                <div className={cx('footer-top-left')}>
                    <img src={logoFooter} alt="" />
                    <div className={cx('footer-top-left-1')}>
                        <div className={cx('title')}>Đăng ký nhận thông tin từ Ami&M</div>
                        <div className={cx('block-input')}>
                            <input type="text" placeholder="Nhập Email của bạn" />
                            <div className={cx('input-btn')}>Đăng ký</div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-top-right')}>
                    <div className={cx('block-discovery')}>
                        <span className={cx('span19')}>KHÁM PHÁ</span>
                        <div className={cx('discovery-item')}>
                            <span className={cx('span20')}>Trang chủ</span>
                            <span className={cx('span20')}>Giới thiệu</span>
                            <span className={cx('span20')}>Từ điển Ami&M</span>
                            <span className={cx('span20')}>Tuyển dụng</span>
                            <span className={cx('span20')}>Tin tức</span>
                        </div>
                    </div>

                    <div className={cx('block-social')}>
                        <span className={cx('span19')}>MẠNG XÃ HỘI</span>
                        <div className={cx('social-item')}>
                            <span className={cx('span20')}>LinkedIn</span>
                            <span className={cx('span20')}>Facebook</span>
                            <span className={cx('span20')}>Youtube</span>
                        </div>
                    </div>

                    <div className={cx('block-contact')}>
                        <span className={cx('span19')}>Liên hệ</span>
                        <div className={cx('contact-item')}>
                            <div className={cx('contact')}>
                                <span className={cx('span21')}>Địa chỉ</span>
                                <span className={cx('span22')}>
                                    Số 14 phố Đỗ Hành, phường Nguyễn Du, quận Hai Bà Trưng, thành phố Hà Nội{' '}
                                </span>
                            </div>
                            <div className={cx('contact')}>
                                <span className={cx('span21')}>Điện thoại</span>
                                <span className={cx('span22')}>(+84) 243 201 2889</span>
                            </div>
                            <div className={cx('contact')}>
                                <span className={cx('span21')}>Email</span>
                                <span className={cx('span22')}>Info@amigroup.com.vn</span>
                            </div>
                            <div className={cx('contact')}>
                                <span className={cx('span21')}>Website</span>
                                <span className={cx('span22')}>amigroup.com.vn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('block-footer-bottom')}>
                <span className={cx('span18')}>Copyright 2024 ©Ami&M. All rights reserved.</span>
                <span className={cx('span18')}>Design by OKHUB Agency.</span>
            </div>
        </div>
    );
}

export default Footer;

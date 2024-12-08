import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import handLeaf from '../icons/hand-leaf.svg';
import customer from '../icons/customer.svg';
import shakeHand from '../icons/shake-hand.svg';
import aim from '../icons/aim.svg';
import React, { useRef, useEffect } from 'react';
import styles from './MiddleContent1.module.scss';
import classNames from 'classnames/bind';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const cx = classNames.bind(styles);
gsap.registerPlugin(ScrollTrigger);

function MiddleContent1() {
    const parentRef = useRef(null);
    //const imageRef = useRef(null);

    useEffect(() => {
        const parent = parentRef.current;
        //const child = imageRef.current;

        gsap.to(parent, {
            scrollTrigger: {
                trigger: parent,
                markers: true,
                start: 'top 20%',
                //end: () => 'bottom-' + child.offsetHeight + ' center',
                end: 'bottom 90%',
                pin: true,
                scrub: true,
                toggleActions: 'play none reverse none',
                pinSpacing: false,
                invalidateOnRefresh: true,
            },
        });
    }, []);

    return (
        <div className={cx('bg-middle-1')}>
            <div className={cx('block-middle-1')}>
                <div className={cx('block-title2')}>
                    <span className={cx('span1')}>
                        <FontAwesomeIcon icon={faCircle} className={cx('dot')} /> SỨ MỆNH{' '}
                        <FontAwesomeIcon icon={faCircle} className={cx('dot')} />
                    </span>
                    <span className={cx('span2')}>Mang lại cuộc sống tốt đẹp hơn cho những người đồng hành</span>
                </div>
            </div>
            <div className={cx('block-middle-2')}>
                <div className={cx('slide-info')}>
                    <div className={cx('info')}>
                        <div className={cx('inf')}>
                            <img src={handLeaf} alt="" className={cx('img')} />
                            <span className={cx('span3')}>với cán bộ nhân viên</span>
                            <p className={cx('p')}>
                                Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định
                                giá trị bản thân
                            </p>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('inf')}>
                            <img src={customer} alt="" className={cx('img')} />
                            <span className={cx('span3')}>với khách hàng</span>
                            <p className={cx('p')}>
                                Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng những
                                trải nghiệm tốt nhất
                            </p>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('inf')}>
                            <img src={shakeHand} alt="" className={cx('img')} />
                            <span className={cx('span3')}>Với đối tác</span>
                            <p className={cx('p')}>
                                Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới
                                những giá trị tốt đẹp
                            </p>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('inf')}>
                            <img src={aim} alt="" className={cx('img')} />
                            <span className={cx('span3')}>VỚI CỘNG ĐỒNG</span>
                            <p className={cx('p')}>
                                Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động
                                hướng về cộng đồng
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('block-slide-img')} ref={parentRef}>
                    <div className={cx('slide-img')}></div>
                </div>
            </div>
        </div>
    );
}

export default MiddleContent1;

import styles from './MiddleContent5.module.scss';
import classNames from 'classnames/bind';
import video from '../icons/video.mp4';
import imgCard from '../icons/Rectangle-34625454.png';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MiddleContent5() {
    const videoRef = useRef(null);
    useEffect(() => {
        const videoElement = videoRef.current;

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            videoElement.play();
                        } else {
                            videoElement.pause();
                        }
                    });
                },
                { threshold: 0.7 },
            );

            observer.observe(videoElement);
            return () => observer.disconnect();
        }
    }, []);
    return (
        <div className={cx('bg-middle-5')}>
            <div className={cx('block-middle-5-top')}>
                <video ref={videoRef} autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className={cx('block-middle-5-bottom')}>
                <div className={cx('sub-middle-5-bottom')}>
                    <div className={cx('middle-5-bottom-left')}>
                        <span>
                            <li>DANH SÁCH TIN TỨC</li>
                            Có gì mới tại Ami&M?
                        </span>
                        <p>
                            Ami&M, viết tắt của Amity and More Tình bằng hữu và hơn thế nữa chính là cái tên và cũng là
                            sự khẳng định cho tôn chỉ mà chúng tôi luôn tâm niệm.
                        </p>
                        <div className={cx('btn-1')}>
                            Xem chi tiết <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                    <div className={cx('middle-5-bottom-right')}>
                        <div className={cx('item-card')}>
                            <div className={cx('img-container')}>
                                <img src={imgCard} alt="" />
                            </div>
                            <div className={cx('group-span')}>
                                <span className={cx('span16')}>
                                    20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                                </span>
                                <span className={cx('span17')}>24/12/2023</span>
                            </div>
                            <div className={cx('sticky')}>Nổi bật</div>
                        </div>
                        <div className={cx('item-card')}>
                            <div className={cx('img-container')}>
                                <img src={imgCard} alt="" />
                            </div>
                            <div className={cx('group-span')}>
                                <span className={cx('span16')}>
                                    20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                                </span>
                                <span className={cx('span17')}>24/12/2023</span>
                            </div>
                            <div className={cx('sticky')}>Nổi bật</div>
                        </div>
                        <div className={cx('item-card')}>
                            <div className={cx('img-container')}>
                                <img src={imgCard} alt="" />
                            </div>
                            <div className={cx('group-span')}>
                                <span className={cx('span16')}>
                                    20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                                </span>
                                <span className={cx('span17')}>24/12/2023</span>
                            </div>
                            <div className={cx('sticky')}>Nổi bật</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiddleContent5;

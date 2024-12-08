import styles from './MiddleContent4.module.scss';
import classNames from 'classnames/bind';
import resource1 from '../icons/resource-1.png';
import resource2 from '../icons/resource-2.png';
import resource3 from '../icons/resource-3.png';
import resourceImage from '../icons/resource-image-1.PNG';
import timesGarden from '../icons/timesgarden.png';
import netZand from '../icons/netzand.png';
import daiNamUni from '../icons/dainamuni.png';
import nhatMinh from '../icons/nhatminh.png';
import haiQuan from '../icons/haiquan.png';
import { useRef, useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function MiddleContent4() {
    const containerRef = useRef(null);
    const [images, setImages] = useState([
        { id: 1, src: timesGarden, alt: 'Times Garden' },
        { id: 2, src: netZand, alt: 'Net Zand' },
        { id: 3, src: daiNamUni, alt: 'Dai Nam Uni' },
        { id: 4, src: nhatMinh, alt: 'Nhat Minh' },
        { id: 5, src: haiQuan, alt: 'Hai Quan' },
    ]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !container.children.length) return;

        const containerWidth = container.offsetWidth;
        const itemWidth = container.children[0].offsetWidth;

        if (itemWidth <= 0) return;

        const totalItems = Math.ceil(containerWidth / itemWidth);

        const repeatedImages = [];
        while (repeatedImages.length < totalItems) {
            repeatedImages.push(
                ...[
                    { id: 1, src: timesGarden, alt: 'Times Garden' },
                    { id: 2, src: netZand, alt: 'Net Zand' },
                    { id: 3, src: daiNamUni, alt: 'Dai Nam Uni' },
                    { id: 4, src: nhatMinh, alt: 'Nhat Minh' },
                    { id: 5, src: haiQuan, alt: 'Hai Quan' },
                ],
            );
        }

        setImages(repeatedImages.slice(0, totalItems));
    }, []);

    return (
        <div className={cx('bg-middle-4')}>
            <div className={cx('bg-middle-4-top')}>
                <div className={cx('middle-4-title')}>
                    <span className={cx('span11')}>
                        “Tình bằng hữu, sự chính trực và tinh thần tự nâng tầm hun đúc nên tinh thần của một tổ chức
                    </span>
                    <span className={cx('span12')}> không ngừng học tập để kiến tạo giá trị.”</span>
                </div>
            </div>
            <div className={cx('bg-middle-4-mid')}></div>
            <div className={cx('bg-middle-4-bottom')}>
                <div className={cx('block-middle-4-left')}>
                    <div className={cx('middle-4-left-1')}>
                        <li>HỢP TÁC VỮNG BỀN</li>
                    </div>
                    <div className={cx('middle-4-left-2')}>
                        Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ
                        giàu kinh nghiệm trong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong
                        muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.
                    </div>
                    <div className={cx('middle-4-left-3')}>TS. Đinh Thanh Vân</div>
                    <div className={cx('middle-4-left-4')}>
                        <div className={cx('dot-1')}>
                            <div className={cx('dot-1-1')}></div>
                            <div className={cx('dot-1-2')}></div>
                            <div className={cx('dot-1-3')}></div>
                        </div>
                        <span>Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội</span>
                        <div className={cx('dot-2')}>
                            <div className={cx('dot-1-3')}></div>
                            <div className={cx('dot-1-2')}></div>
                            <div className={cx('dot-1-1')}></div>
                        </div>
                    </div>
                    <div className={cx('middle-4-left-5')}>
                        <img src={resource1} alt="" className={cx('img-2', 'img-2-1')} loading="lazy" />
                        <img src={resource2} alt="" className={cx('img-2', 'img-2-2')} loading="lazy" />
                        <img src={resource3} alt="" className={cx('img-2', 'img-2-3')} loading="lazy" />
                    </div>
                </div>
                <div className={cx('block-middle-4-right')}>
                    <img src={resourceImage} alt="" className={cx('img-3')} loading="lazy" />
                </div>
                <div className={cx('block-middle-4-bottom')}>
                    <div className={cx('middle-4-bottom-1')}>
                        <li>ĐỐI TÁC TIÊU BIỂU</li>
                        <span className={cx('span13')}>ĐỒNG HÀNH CÙNG AMI&M</span>
                    </div>
                    <div className={cx('middle-4-bottom-2')} ref={containerRef}>
                        {images.map((image, index) => (
                            <img
                                key={`${image.id}-${index}`}
                                src={image.src}
                                alt={image.alt}
                                className={cx('img-4', `img-4-${image.id}`)}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiddleContent4;

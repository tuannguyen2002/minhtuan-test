import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import { faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MiddleContent1 from '../../components/MiddleContent1';
import MiddleContent2 from '../../components/MiddleContent2';
import MiddleContent3 from '../../components/MiddleContent3';
import MiddleContent4 from '../../components/MiddleContent4';
import MiddleContent5 from '../../components/MiddleContent5';

gsap.registerPlugin(ScrollTrigger);
const cx = classNames.bind(styles);

function Content() {
    // useEffect(() => {
    //     const image = imageRef.current;
    //     gsap.to(image, {
    //         scrollTrigger: {
    //             trigger: image,
    //             start: 'top center',
    //             end: 'bottom+=1955px center',
    //             pin: true,
    //             pinSpacing: false,
    //             scrub: true,
    //             onLeave: () => gsap.set(image, { position: 'absolute', top: 'auto', bottom: 0 }),
    //             onEnterBack: () => gsap.set(image, { position: 'fixed', top: '50%', transform: 'translateY(-50%)' }),
    //         },
    //         y: 0,
    //     });
    // }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('bg-top')}>
                <div className={cx('bg-image')}>
                    <div className={cx('block-title1')}>
                        <span className={cx('span1')}>
                            <FontAwesomeIcon icon={faCircle} className={cx('dot')} /> TẦM NHÌN{' '}
                            <FontAwesomeIcon icon={faCircle} className={cx('dot')} />
                        </span>
                        <p>
                            Ami&M xây dựng{' '}
                            <span className={cx('span2')}>hệ sinh thái đa ngành phát triển nhanh và bền vững</span> trên
                            hành trình kiến tạo sự thịnh vượng đích thực!
                        </p>
                    </div>
                </div>
            </div>

            <MiddleContent1 />
            <MiddleContent2 />
            <MiddleContent3 />
            <MiddleContent4 />
            <MiddleContent5 />

            <div className={cx('bg-bottom')}>
                <div className={cx('block-bottom-top')}>
                    <span className={cx('span1')}>
                        <FontAwesomeIcon icon={faCircle} className={cx('dot')} /> ĐỒNG HÀNH TIẾN BƯỚC{' '}
                        <FontAwesomeIcon icon={faCircle} className={cx('dot')} />
                    </span>
                    <div className={cx('bottom-top-1')}>
                        <span className={cx('span14')}>Chào đón bạn trở thành Người đồng hành tiếp theo!</span>
                        <span className={cx('span15')}>
                            Bạn thích một môi trường làm việc năng động, sáng tạo và gắn kết? Hãy ứng tuyển để trở thành
                            thành viên trong gia đình Ami&M!
                        </span>
                        <div className={cx('btn')}>
                            Cơ hội việc làm
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
                <div className={cx('block-bottom-bottom')}></div>
            </div>
        </div>
    );
}

export default Content;

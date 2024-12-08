import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Mission.module.scss';
import classNames from 'classnames/bind';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Mission() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('block-mission')}>
                <div className={cx('hero-block')}>
                    <div className={cx('mission')}>
                        <li>Công Ty Cổ Phần Tập Đoàn AMI&M Việt Nam</li>
                        <section className={cx('hero')}>
                            <h1>Khởi Nguồn Từ Tình Bằng Hữu</h1>
                            <p className={cx('p1')}>
                                Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí hướng chia sẻ những ý
                                tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M
                                chính thức đi vào hoạt động.
                            </p>
                            <p className={cx('p2')}>
                                Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó và kết nối cũng những
                                người bằng hữu mà chúng tôi gọi là ANH EM - AM, được bứt phá các giới hạn bản thân để
                                phát triển, thoả sức thử thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị
                                mà mình tin tưởng.
                            </p>
                        </section>
                    </div>
                    <div className={cx('mission-btn')}>
                        <span>
                            Hành Trình Của AMI&M <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;

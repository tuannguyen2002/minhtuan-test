import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './MiddleContent2.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MiddleContent2() {
    return (
        <div className={cx('bg-middle-2')}>
            <div className={cx('block-middle-2-left')}>
                <div className={cx('block-middle-2-left-1')}>
                    <li>LĨNH VỰC ĐẦU TƯ</li>
                    <span className={cx('span4')}>
                        Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao cấp và nâng tầm giáo dục trải
                        nghiệm.
                    </span>
                </div>
                <div className={cx('block-middle-2-left-2')}>
                    <span className={cx('span5')}>
                        Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh vượng đích thực cho những Người
                        đồng hành và tạo lập di sản xứng tầm cho thế hệ tương lai.{' '}
                    </span>
                </div>
            </div>
            <div className={cx('bg-middle-right')}>
                <div className={cx('logo')}></div>
                <div className={cx('title')}>
                    <span className={cx('span6')}>Cung cấp dịch vụ</span>
                    <span className={cx('span7')}>Quản lý & Khai thác Tài sản, Chuỗi cơ sở lưu trú.</span>
                </div>
                <div className={cx('more-btn')}>
                    Tìm hiểu thêm <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>
    );
}

export default MiddleContent2;

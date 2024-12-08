import moneyFlaticon from '../icons/Money-Flaticon.png';
import buildingFlaticon from '../icons/Building-Flaticon.svg';
import financingIcons from '../icons/Financing-Icons.svg';
import leafFlaticon from '../icons/leaf.svg';
import projectFlaticon from '../icons/Project-Flaticon.svg';
import styles from './MiddleContent3.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MiddleContent3() {
    return (
        <div className={cx('bg-middle-3')}>
            <div className={cx('middle-3-left')}>
                <div className={cx('middle-3-left-1')}>
                    <li>TỪNG BƯỚC PHÁT TRIỂN</li>
                    <span className={cx('span8')}>Dấu ấn Ami&M</span>
                </div>
                <div className={cx('middle-3-left-2')}>
                    <span className={cx('span9')}>
                        Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là những dấu ấn sâu đậm về sự đổi
                        mới, trách nhiệm xã hội và sự tin cậy từ những Người đồng hành.
                    </span>
                </div>
            </div>

            <div className={cx('middle-3-right')}>
                <div className={cx('middle-3-right-info')}>
                    <div className={cx('inf-3')}>
                        <div className={cx('circle')}>
                            <img src={moneyFlaticon} alt="" className={cx('img-3')} />
                        </div>
                        <div className={cx('data')}>
                            <span className={cx('span10')}>686 tỷ</span>
                            <p className={cx('p-0')}>Tổng tài sản và Vốn chủ sở hữu</p>
                        </div>
                    </div>
                </div>
                <div className={cx('middle-3-right-info')}>
                    <div className={cx('inf-3')}>
                        <div className={cx('circle')}>
                            <img src={leafFlaticon} alt="" className={cx('img-3')} />
                        </div>
                        <div className={cx('data')}>
                            <span className={cx('span10')}>93,9 tỷ</span>
                            <p className={cx('p-0')}>Doanh thu thuần</p>
                        </div>
                    </div>
                </div>
                <div className={cx('middle-3-right-info')}>
                    <div className={cx('inf-3')}>
                        <div className={cx('circle')}>
                            <img src={financingIcons} alt="" className={cx('img-3')} />
                        </div>
                        <div className={cx('data')}>
                            <span className={cx('span10')}>24,6 tỷ</span>
                            <p className={cx('p-0')}>Lợi nhuận gộp</p>
                        </div>
                    </div>
                </div>
                <div className={cx('middle-3-right-info')}>
                    <div className={cx('inf-3')}>
                        <div className={cx('circle')}>
                            <img src={projectFlaticon} alt="" className={cx('img-3')} />
                        </div>
                        <div className={cx('data')}>
                            <span className={cx('span10')}>20+ </span>
                            <p className={cx('p-0')}>Dự án trọng điểm</p>
                        </div>
                    </div>
                </div>
                <div className={cx('middle-3-right-info', 'middle-3-right-info-0')}>
                    <div className={cx('inf-3')}>
                        <div className={cx('circle')}>
                            <img src={buildingFlaticon} alt="" className={cx('img-3')} />
                        </div>
                        <div className={cx('data')}>
                            <span className={cx('span10')}>03 văn phòng</span>
                            <p className={cx('p-0')}>Trên các tỉnh thành</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiddleContent3;

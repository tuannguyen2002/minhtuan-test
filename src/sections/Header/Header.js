import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { gsap } from 'gsap';

const cx = classNames.bind(styles);

function Header() {
    const [isActive, setIsActive] = useState(false);
    const sloganRef = useRef(null);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const words = sloganRef.current.querySelectorAll('span');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const word = entry.target;
                        const index = Array.from(words).indexOf(word);
                        setTimeout(() => {
                            gsap.fromTo(
                                word,
                                { opacity: 0, y: 50 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.2,
                                },
                            );
                        }, 1000 + index * 200);
                        observer.unobserve(word);
                    }
                });
            },
            { threshold: 0.1 },
        ); // Kích hoạt khi 10% phần tử xuất hiện trong viewport

        words.forEach((word) => {
            observer.observe(word);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu', { active: isActive })} onClick={handleClick}>
                <div className={cx('block-logo')}>
                    <div className={cx('logo')}></div>
                </div>
                <div className={cx('block-menu')}>
                    <div className={cx('language')}>
                        <div className={cx('language-vi')}>
                            <span>VIE</span>
                        </div>
                        <div className={cx('language-en')}>
                            <span className={cx('active')}>ENG</span>
                        </div>
                    </div>
                    <div className={cx('menu-expand')}>
                        <span className={cx('active')}>MENU</span>
                        <div className={cx('menu-icon')}>
                            <div className={cx('icon')}></div>
                            <div className={cx('icon')}></div>
                            <div className={cx('icon')}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('slogan')} ref={sloganRef}>
                {' '}
                <div className={cx('line')}>
                    {' '}
                    {'ĐỒNG HÀNH'.split(' ').map((word, index) => (
                        <span key={index}>{word} </span>
                    ))}{' '}
                </div>{' '}
                <div className={cx('line')}>
                    {' '}
                    {'KHỞI THỊNH VƯỢNG!'.split(' ').map((word, index) => (
                        <span key={index}>{word} </span>
                    ))}{' '}
                </div>{' '}
            </div>
        </div>
    );
}

export default Header;

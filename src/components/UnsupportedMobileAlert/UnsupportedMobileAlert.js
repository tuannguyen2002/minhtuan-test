import React, { useEffect, useState } from 'react';

const UnsupportedMobileAlert = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        isMobile && (
            <div style={styles.overlay}>
                <div style={styles.messageBox}>
                    <h2>Unsupported Mobile Version</h2>
                    <h2>Vui lòng truy cập bằng máy tính.</h2>
                </div>
            </div>
        )
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    messageBox: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '10px',
    },
};

export default UnsupportedMobileAlert;

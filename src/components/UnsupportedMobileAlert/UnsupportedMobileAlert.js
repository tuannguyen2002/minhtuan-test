import React from 'react';
import { isMobile } from 'react-device-detect';

const UnsupportedMobile = () => {
    if (isMobile) {
        return (
            <div style={styles.overlay}>
                <div style={styles.messageBox}>
                    <h2>Unsupported Mobile Version</h2>
                    <h2>Vui lòng truy cập bằng máy tính.</h2>
                </div>
            </div>
        );
    }

    return null;
};

const styles = {
    overlay: {
        position: 'absoluted',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9000,
    },
    messageBox: {
        position: 'fixed',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '10px',
    },
};

export default UnsupportedMobile;

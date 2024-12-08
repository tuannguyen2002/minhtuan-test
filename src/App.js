import Content from './sections/Content';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Mission from './sections/Mission';
import React from 'react';
import { isMobile } from 'react-device-detect';

function App() {
    if (isMobile) {
        return (
            <div style={styles.overlay}>
                <div style={styles.messageBox}>
                    <h2>Sử dụng máy tính để truy cập!</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <Header />
            <Mission />
            <Content />
            <Footer />
        </div>
    );
}

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

export default App;

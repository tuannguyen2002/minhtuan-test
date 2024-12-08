import Content from './sections/Content';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Mission from './sections/Mission';
import UnsupportedMobileAlert from './components/UnsupportedMobileAlert';

function App() {
    return (
        <div className="App">
            <UnsupportedMobileAlert />
            <Header />
            <Mission />
            <Content />
            <Footer />
        </div>
    );
}

export default App;

import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;

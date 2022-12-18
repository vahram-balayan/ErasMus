import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import styles from "./Layout.module.scss";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main className={styles.container}>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;

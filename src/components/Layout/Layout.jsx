import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import styles from "./layout.module.scss";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;

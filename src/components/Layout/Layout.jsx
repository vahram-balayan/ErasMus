import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../../pages/Home/Home";

import {Link, Outlet} from "react-router-dom";

import styles from "./Layout.module.scss";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                    </ul>


            <div className={styles.container}>
                {children}
                <Outlet />
            </div>

            <Footer/>
        </>
    );
};

export default Layout;

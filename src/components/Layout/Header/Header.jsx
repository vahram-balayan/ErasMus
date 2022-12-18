import { Routes, Route, Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={`flex align-center ${styles.header}`}>
            <div className={`container`}>
                <div className={`flex align-center ${styles.header_wrapper}`}>
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
                </div>
            </div>
        </header>
    );
};

export default Header;

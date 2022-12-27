import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={`flex align-center ${styles.header}`}>
            <div className={`container`}>
                <div className={`flex align-center ${styles.header_wrapper}`}>
                    <ul className={`flex align-center`}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/News">News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/participants">Creative Participants</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={`${styles.brand_img_wrapper}`}>
            <NavLink to="/">
              <img
                src="http://creativeyouth.am/static/media/logo.7fd48853.PNG"
                alt="Craetive Youth"
              />
            </NavLink>
          </div>
          <ul className={`flex align-center subheading-2`}>
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

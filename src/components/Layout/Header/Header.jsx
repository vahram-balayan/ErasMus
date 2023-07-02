import Nav from "./Nav/Nav";

import logoImg from "../../../assets/images/logo.png";

import { PAGES } from "constants";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={`${styles.brand_img_wrapper}`}>
            <a href={PAGES.HOME.href}>
              <img src={logoImg} alt="creative youth" />
            </a>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;

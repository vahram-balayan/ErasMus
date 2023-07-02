import { NavLink } from "react-router-dom";

import { PAGES } from "constants";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.nav_list}>
        {Object.values(PAGES).map((page) => {
          return (
            <li key={page.href} className={styles.nav_item}>
              <NavLink to={page.href} className={styles.nav_link}>{page.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

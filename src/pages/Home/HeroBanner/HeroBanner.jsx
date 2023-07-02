import heroImg from "../../../assets/images/hero.jpg";

import styles from "./HeroBanner.module.scss";

const HeroBanner = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_titles}>
        <h1>ERASMUS+ PROJECTS</h1>
        <h2>CREATIVE YOUTH</h2>
      </div>
      <img src={heroImg} alt="hero" />
    </div>
  );
};

export default HeroBanner;

import React from "react";
import NoResults from "../assets/notfound.webp";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
        <div className={styles.Title}>NOT FOUND</div>
        <div className={styles.SubTitle}>Sorry, the page you're looking for doesn't exist</div>
      <Asset
        src={NoResults}
      />
    </div>
  );
};

export default NotFound;
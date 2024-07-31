import React from "react";
import NoResults from "../assets/notfound.webp";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
        <h1>NOT FOUND</h1>
        <h4>Sorry, the page you're looking for doesn't exist</h4>
      <Asset
        src={NoResults}
      />
    </div>
  );
};

export default NotFound;
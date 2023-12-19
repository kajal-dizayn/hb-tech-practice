import React from "react";
import Image from "next/image";
import cx from "classnames";
import styles from "./HomeSlide6ImageContent.module.scss";

const HomeSlide6ImageContent = ({ title, description, image, link }) => {
  return (
    <div className={styles.HomeSlide6ImageContent}>
      <div className={styles.left}>
        <h3 className={cx(styles.title)}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={link} target="_blank">
          button
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image src={image} alt="" />
      </div>
    </div>
  );
};

export default HomeSlide6ImageContent;

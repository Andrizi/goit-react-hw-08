import React from "react";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Phonebook App!</h1>
    </div>
  );
}

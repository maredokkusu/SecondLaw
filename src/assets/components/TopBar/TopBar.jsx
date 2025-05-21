import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";
import { useState } from "react";
import "/home/leonardo-conde/Documentos/Portfolio/Proyecto 1/src/i18n.js";
import { useTranslation } from "react-i18next";
export default function TopBar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("EN");
  const togglelanguage = () => {
    const newlang = language === "EN" ? "ES" : "EN";
    setLanguage(newlang);
    i18n.changeLanguage(newlang.toLowerCase());
  };
  return (
    <header className={styles.Header}>
      <h1 className={styles.Title}>Second Law Training</h1>
      {
        <nav className={styles.Change}>
          <Link className={styles.TopButt} href="">
            Soon...
          </Link>
          <button className={styles.TopButt} onClick={togglelanguage}>
            {language}
          </button>
        </nav>
      }
    </header>
  );
}

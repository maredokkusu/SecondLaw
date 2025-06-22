import styles from "./TopBar.module.css";
import { useState } from "react";
import "/src/i18n.js";
import { useTranslation } from "react-i18next";
export default function TopBar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("EN");
  const currentflag = language === "EN" ? "  🇺🇸" : "  🇲🇽";
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
          <button className={styles.TopButt} onClick={togglelanguage}>
            {language}
            {currentflag}
          </button>
        </nav>
      }
    </header>
  );
}

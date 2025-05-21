import styles from "./Strength.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Strength() {
  const { t } = useTranslation();
  return (
    <div className={styles.Container}>
      <section className={styles.Description}>
        <h2 className={styles.ItsYours}>{t("Strength.Strength.up")}</h2>
      </section>

      <section className={styles.Things}>
        <Link className={styles.Divisions} to={"/"}>
          {t("Strength.Strength.calc")}
        </Link>
        <Link className={styles.Divisions} to={"/nutrition"}>
          {t("Strength.Strength.nutri")}
        </Link>
        <Link className={styles.Divisions} to={"/about"}>
          {t("Strength.Strength.about")}
        </Link>
      </section>
    </div>
  );
}

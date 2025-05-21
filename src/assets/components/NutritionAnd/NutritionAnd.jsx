import styles from "./NutritionAnd.module.css";
import { useTranslation } from "react-i18next";
export default function NutritionAnd() {
  const { t } = useTranslation();
  return (
    <div className={styles.NutritionAnd}>
      <article className={styles.NutritionContainer}>
        <h2 className={styles.Title}>{t("Nutrition.First")}</h2>
        <p className={styles.ParagraphOne}>{t("Nutrition.Second")}</p>
        <p className={styles.ParagraphOne}>{t("Nutrition.Third")}</p>
        <p className={styles.ParagraphOne}>
          <strong>{t("Nutrition.Fourth")}</strong>
        </p>
      </article>
      <article className={styles.TipsForMeals}>
        <h2 className={styles.Tips}>{t("Nutrition.Fifth")}</h2>
        <p className={styles.ParagraphTwo}>
          {t("Nutrition.Sixth")}
          <strong>{t("Nutrition.Seventh")}</strong>
          {t("Nutrition.Eighth")}
          <strong> {t("Nutrition.Ninth")}</strong>
          {t("Nutrition.Tenth")}
        </p>
        <p className={styles.ParagraphTwo}>
          {t("Nutrition.Eleventh")}
          <strong> {t("Nutrition.Twelfth")}</strong> {t("Nutrition.Thirteenth")}
        </p>
        <p className={styles.ParagraphTwo}>
          {t("Nutrition.Fourteenth")}
        </p>
      </article>
      <article className={styles.TrainingTips}>
        <h2 className={styles.TrainingTitle}>{t("Nutrition.Fifteenth")}</h2>
        <p className={styles.ParagraphOne}>{t("Nutrition.Sixteenth")}
          </p>
        <p className={styles.ParagraphOne}>
         {t("Nutrition.Focus")}<strong>{t("Nutrition.Compound")}</strong> {t("Nutrition.Like")}
        </p>
        <p className={styles.ParagraphOne}>
          {t("Nutrition.Priorizite")} <strong>{t("Nutrition.Progressive")}</strong>{t("Nutrition.Increase")}
        </p>
        <p className={styles.ParagraphOne}>
         {t("Nutrition.Remember")}<strong>{t("Nutrition.Enough")}</strong>. 
        {t("Nutrition.Muscles")}</p>
        <p className={styles.ParagraphOne}>
          {t("Nutrition.Lastly")}<strong>{t("Nutrition.Consistency")}</strong>{t("Nutrition.Stick")}
        </p>
      </article>
    </div>
  );
}

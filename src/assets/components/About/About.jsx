import styles from "./About.module.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.Container}>
      <section className={styles.About}>
        <h2 className={styles.AboutThis}>{t("About.title")}</h2>
        <p className={styles.Paragraph}>{t("About.description1")}</p>
        <p className={styles.Paragraph}>{t("About.description2")}</p>
        <ul className={styles.List}>
          <li>{t("About.list1")}</li>
          <li>{t("About.list2")}</li>
          <li>{t("About.list3")}</li>
        </ul>
        <p className={styles.Paragraph}>{t("About.description3")}</p>
      </section>

      <section className={styles.Creator}>
        <h2 className={styles.Message}>{t("About.creatorTitle")}</h2>
        <p className={styles.ParagraphOne}>{t("About.creator1")}</p>
        <p className={styles.ParagraphOne}>{t("About.creator2")}</p>
        <p className={styles.ParagraphOne}>{t("About.creator3")}</p>

        <section className={styles.ParagraphOnce}>
          <a
            href="https://www.linkedin.com/in/leonardo-yael-conde-flores-562b64315/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              title="Creator LinkedIn"
              className={styles.Links}
              src="src/assets/components/About/ImgAbout/LinkedinIcon.svg"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/maredokkusu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              title="Creator Github"
              className={styles.Links}
              src="src/assets/components/About/ImgAbout/github-mark.svg"
              alt="GitHub"
            />
          </a>
          <a
            href="https://tusitio.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              title="Creator Page"
              className={styles.Links}
              src="src/assets/components/About/ImgAbout/Avatar.svg"
              alt="Creator Page"
            />
          </a>
        </section>
      </section>
    </div>
  );
}

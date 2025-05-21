import { useState } from "react";
import styles from "./Form.module.css";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [formula, setFormula] = useState("epley");
  const [res, setRes] = useState(null);
  const [unit, setUnit] = useState("Kg");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const CalculateRm = () => {
    const r = parseFloat(reps);
    const w = parseFloat(weight);
    if (r > 500 || w > 500) {
      alert("No es posible ingresar un numero tan grande");
      return;
    }
    let result = 0;
    switch (formula) {
      case "epley":
        result = r === 1 ? w : w * (1 + r / 30);
        break;
      case "brzycki":
        result = r === 1 ? w : (w * 36) / (37 - r);
        break;
      case "lombardi":
        result = r === 1 ? w : w * Math.pow(r, 0.1);
        break;
      case "o'conner":
        result = r === 1 ? w : w * (1 + 0.025 * r);
        break;
      default:
        result = 0;
    }
    setRes(result);
  };
  return (
    <div className={styles.Container}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <h2 className={styles.SubtitlesOne}>{t("Form.Data")}</h2>
        <section className={styles.Rowbox}>
          <label htmlFor="Gender">{t("Form.Inputs.Gender")}</label>
          <select className={styles.Input} name="Genero" id="Genero">
            <option value="Hombre">{t("Form.Inputs.Male")}</option>
            <option value="Mujer">{t("Form.Inputs.Female")}</option>
          </select>
        </section>
        <section className={styles.Rowbox}>
          <label htmlFor="Exercise">{t("Form.Inputs.Exercise")}</label>
          <select className={styles.Input} name="excercise" id="excesice">
            <option value="Bench Press">{t("Form.Inputs.BenchPress")}</option>
            <option value="Squat">{t("Form.Inputs.Squat")}</option>
            <option value="Deadlift">{t("Form.Inputs.Deadlift")}</option>
          </select>
        </section>
        <section className={styles.Rowbox}>
          <label htmlFor="weight">{t("Form.Inputs.Weight")}</label>
          <input
            className={styles.Input}
            type="number"
            placeholder="Weight. . ."
            max={"500"}
            min={"0"}
            onChange={(e) => {
              if (e.target.value <= 500) {
                setWeight(parseFloat(e.target.value));
              }
            }}
          />
          <select
            onChange={(e) => {
              setUnit(e.target.value);
            }}
            className={styles.Input}
            name="Kind of Weight"
            id="Kind of Weight"
          >
            <option value="Kg">Kg</option>
            <option value="Lb">Lb</option>
          </select>
        </section>
        <section className={styles.Rowbox}>
          <label htmlFor="reps">{t("Form.Inputs.Repetitions")}</label>
          <input
            className={styles.Input}
            onChange={(e) => {
              setReps(parseFloat(e.target.value));
            }}
            type="number"
            placeholder="Reps. . ."
            min={"0"}
            max={" 500"}
          />
        </section>
        <section className={styles.Rowbox}>
          <label htmlFor="Select Formula">{t("Form.Inputs.Formula")}</label>
          <select
            className={styles.Input}
            onChange={(e) => {
              setFormula(e.target.value);
            }}
          >
            <option value="epley">Epley</option>
            <option value="brzycki">Brzycki</option>
            <option value="lombardi">Lombardi</option>
            <option value="o'conner">O'Conner</option>
          </select>
        </section>
        <section className={styles.Calculate}>
          <button className={styles.Input} type="button" onClick={CalculateRm}>
            {t("Form.Inputs.Calculate")}
          </button>
          {(weight >= 500 || reps >= 500) && (
            <p>la cantidad es maxima o superior</p>
          )}
          {res !== null && (
            <p className={styles.Rm}>
              {t("Form.Inputs.RM")}
              {res.toFixed(1)} {unit}
            </p>
          )}
        </section>
      </form>
      <aside className={styles.Formules}>
        <h2 className={styles.Subtitles}>{t("How.How")} </h2>

        <ol className={styles.Paragraph}>
          <li>{t("How.First")}</li>
          <li>{t("How.Second")}</li>
          <li>{t("How.Third")}</li>
          <li>{t("How.Fourth")}</li>
          <li>{t("How.Fifth")}</li>
        </ol>

        <p className={styles.Paragraph}>{t("How.Sixth")}</p>
        <p className={styles.Paragraph}>
         {t("How.Seventh")}
        </p>
      </aside>
    </div>
  );
}

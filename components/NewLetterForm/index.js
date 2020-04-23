import React from "react";
import styles from "./styles.scss";
import CgButton from "../CgButton";

const NewLetterForm = ({ t }) => {
  return (
    <form className={styles.newLetterForm}>
      <div className={styles.halfSize}>
        <div className="_field-wrapper">
          <input
            type="text"
            name="firstname"
            placeholder={t("firstName")}
            required=""
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.halfSize}>
        <div className="_field-wrapper">
          <input
            type="text"
            name="lastname"
            placeholder={t("lastName")}
            required=""
            className={styles.input}
          />
        </div>
      </div>

      <div className="_field-wrapper">
        <input
          type="text"
          name="email"
          placeholder={t("emailAddress")}
          required=""
          className={styles.input}
        />
      </div>

      <div className={styles.labelWrap}>
        <label className={styles.formLabel}>{t("receiveEmail")}</label>
        <div className={styles.checkboxRadio}>
          <input
            type="radio"
            value="Newsletters, Conferences and Events"
            className={styles.inputRadio}
            name="newletterRadio"
          />
          <span>
            <label className={styles.label}>
              {t("optConferencesAndEvent")}
            </label>
          </span>
        </div>

        <div className={styles.checkboxRadio}>
          <input
            type="radio"
            value="Newsletters Only"
            className={styles.inputRadio}
            name="newletterRadio"
          />
          <span>
            <label className={styles.label}>{t("optOnly")}</label>
          </span>
        </div>
      </div>

      <div className={styles.buttonWrap}>
        <CgButton type="submit">{t("submit")}</CgButton>
      </div>
    </form>
  );
};

export default NewLetterForm;

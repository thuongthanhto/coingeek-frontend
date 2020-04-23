import React from "react";
import classNames from "classnames";
import NewLetterForm from "../NewLetterForm";
import styles from "./styles.scss";
import { cg_SOCIALS } from "../../constants/common";
import { parseHtmlString } from "../../utils/functions";

const FooterHome = ({ footerData, t }) => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row align-items-start justify-content-between my-3">
          {parseHtmlString(footerData)}
          <div className="col-12 col-md-6 col-lg-4">
            <div className={styles.footerSocial}>
              <h3 className={classNames(styles.h3, styles.textRight)}>
                {t("followUs")}
              </h3>
              <ul className="nav justify-content-end">
                {cg_SOCIALS.map((item) => {
                  return (
                    <li className={styles.socialItem} key={item.type}>
                      <a
                        href={item.url}
                        className="nav-link text-dark"
                        target="_blank"
                      >
                        {item.component}
                      </a>
                      {item.tooltip && (
                        <div className={styles.tooltip}>{item.tooltip}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="footer__newsletters">
              <NewLetterForm t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;

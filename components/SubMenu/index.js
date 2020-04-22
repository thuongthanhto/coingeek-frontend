import React from "react";
import classname from "classnames";
import CgLink from "../CgLink";
import styles from "./styles.scss";

const SubMenu = ({ items, isActive, activedItem, className, lang }) => {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <ul
      className={classname(styles.subMenu, className, {
        [styles.actived]: isActive,
      })}
    >
      {items.map((item) => {
        const { title, url, children, key } = item;
        const itemClasses = classname(styles.subMenuItem, {
          [styles.hasChildren]: children && children.length > 0,
          [styles.actived]: activedItem && activedItem.url === item.url,
        });
        let menuLv2 = url;
        if (lang === "zh-hans") {
          menuLv2 = `/${lang}${url}`;
        }
        return (
          <li className={itemClasses} key={title}>
            <CgLink href={menuLv2} title={title} />
            {children && children.length > 0 && (
              <ul className={styles.children}>
                {children.map((child) => {
                  let menuLv3 = `/${child.key}`;
                  if (lang === "zh-hans") {
                    menuLv3 = `/${lang}/${child.key}`;
                  }
                  return (
                    <li className={styles.child} key={child.key}>
                      <CgLink href={`${menuLv3}`} title={child.title} />
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(SubMenu);

import classname from "classnames";
import styles from "./styles.scss";

const ArticleMeta = (props) => {
  const { category, datetime, isLarge } = props;
  const articleMetaClasses = classname(styles.articleMeta, {
    [styles.isLarge]: isLarge,
  });

  return (
    <div className={articleMetaClasses}>
      <span className={styles.category}>{category}</span>
      <span className={styles.date}>{datetime}</span>
    </div>
  );
};

export default ArticleMeta;

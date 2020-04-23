import PropTypes from "prop-types";
import classname from "classnames";
import styles from "./styles.scss";
import { parseHtmlString } from "../../utils/functions";

const FullWidthHeaderPassString = (props) => {
  const { content, isPaddingTop, color, bgImage } = props;
  const headerClasses = classname(styles.fullWidthHeader, "pt-3", {
    "pt-md-5": isPaddingTop,
    [styles.isPaddingTop]: isPaddingTop,
    [styles.purple]: color === "purple",
  });
  const rowClasses = classname(
    "row align-items-start justify-content-between",
    {
      "mt-5 mt-md-5": isPaddingTop,
    }
  );
  const customStyles = bgImage
    ? {
        background: `url(${bgImage}) no-repeat center center`,
        backgroundSize: "cover",
      }
    : {};

  return (
    <header className="page-header">
      <div className={headerClasses} style={customStyles}>
        <div className="container" tabIndex="-1">
          <div className={rowClasses}>
            <div className="col-12">{parseHtmlString(content)}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

FullWidthHeaderPassString.propTypes = {
  isPaddingTop: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
FullWidthHeaderPassString.defaultProps = {
  isPaddingTop: true,
};

export default React.memo(FullWidthHeaderPassString);

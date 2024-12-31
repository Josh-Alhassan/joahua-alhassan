import React from "react";
import PropTypes from "prop-types";

import style from "./PrimaryHeader.module.css";

function PrimaryHeader({
  fontWeight,
  textTransform,
  children,
  tag: Tag = "h1",
}) {
  return (
    <Tag
      className={style.primaryHeader}
      style={{
        fontWeight: fontWeight,
        textTransform: textTransform,
        fontFamily: "Montserrat, serif",
      }}
    >
      {children}
    </Tag>
  );
}

PrimaryHeader.propTypes = {
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textTransform: PropTypes.string,
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
};

export default PrimaryHeader;

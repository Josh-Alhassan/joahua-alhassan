import React from "react";
import PropTypes from "prop-types";

import style from "./SocialList.module.css";

function SocialList({ icon, description }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      <div>{icon}</div>
      <figcaption className={style.description} style={{ display: "block" }}>
        {description}
      </figcaption>
    </div>
  );
}

SocialList.propTypes = {
  icon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default SocialList;

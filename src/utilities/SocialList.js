import React from "react";
import PropTypes from "prop-types";

function SocialList({ icon, description }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      <div>{icon}</div>
      <figcaption style={{ display: "block" }}>{description}</figcaption>
    </div>
  );
}

SocialList.propTypes = {
  icon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default SocialList;

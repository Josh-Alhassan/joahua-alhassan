import React from "react";
import PropTypes from "prop-types";

import style from "./Accordion.module.css";

const Accordion = ({ title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
    >
      <h3 style={styles.title} className={style.accordionTitle}>
        {title}
      </h3>
      <div style={styles.content}>
        <p className={style.description}>{description}</p>
        <div>
          <box-icon
            type="solid"
            name="right-top-arrow-circle"
            style={styles.icon}
          ></box-icon>
        </div>
      </div>
    </a>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const styles = {
  container: {
    border: "1px solid #ddd",
    backgroundColor: "#FAFAFA",
    width: "100%",
    marginBottom: "15px",
    padding: "20px",
    color: "#000",
    textDecoration: "none",
    borderRadius: "8px",
    transition: "box-shadow 0.3s ease, transform 0.2s ease",
    display: "block",
  },
  title: {
    fontWeight: "500",
    marginBottom: "22px",
  },
  content: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  icon: {
    fontSize: "24px",
    color: "#555",
  },
};

export default Accordion;

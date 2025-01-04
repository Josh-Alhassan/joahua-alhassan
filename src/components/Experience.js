import React from "react";
import SecondaryHeading from "../utilities/SecondaryHeading";
import SubHeading from "../utilities/SubHeading";
import Article from "../utilities/Article";

function Experience({ title, role, duration, achievements, description }) {
  return (
    <div>
      <SecondaryHeading>{title}</SecondaryHeading>
      <SubHeading>{`${role}, ${duration}`}</SubHeading>

      {description.map((paragraph, index) => (
        <Article key={index}>{paragraph}</Article>
      ))}

      <ul style={{ fontSize: "22px", lineHeight: "1.5" }}>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;

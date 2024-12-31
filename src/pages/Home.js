import React from "react";
import PrimaryHeader from "../utilities/PrimaryHeader";

import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.homePage}>
      <PrimaryHeader fontWeight="400">Hey, I'm Joshua 👋</PrimaryHeader>

      <article className={style.article}>
        I am a frontend Developer, Developer Advocate and Community Manager with
        5+ years of experience building developer communities.
      </article>
    </div>
  );
}

export default Home;

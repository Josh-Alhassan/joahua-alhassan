import React from "react";
import PrimaryHeader from "../utilities/PrimaryHeader";
import Article from "../utilities/Article";
import Navigation from "../components/Navigation";
import WorkExperience from "../components/WorkExperience";

function Work() {
  return (
    <div>
      {/* <Navigation /> */}
      <PrimaryHeader>My Work</PrimaryHeader>
      <Article>
        I am a passionate community manager and program leader with extensive
        experience in fostering developer communities and facilitating impactful
        training programs. I am the Community Manager for{" "}
        <a href="https://edustipend.org/" target="_blank">
          Edustipend
        </a>{" "}
        ,{" "}
        <a href="https://www.nexascale.org/" target="_blank">
          NexaScale
        </a>{" "}
        , and Financial Service Innovators, as well as the Lead Manager for{" "}
        <a href="https://beerjs.tech/about/" target="_blank">
          BeerJS
        </a>{" "}
        Lokoja—the first JavaScript community of its kind in Africa. I am also a
        Developer Advocate graduate from the{" "}
        <a href="https://dxmentorship.com/" target="_blank">
          Dx-Mentorship
        </a>{" "}
        Bootcamp.
      </Article>
      <WorkExperience />
    </div>
  );
}

export default Work;

import React from "react";
import PrimaryHeader from "../utilities/PrimaryHeader";
import Article from "../utilities/Article";
import Navigation from "../components/Navigation";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";

function Work() {
  return (
    <div>
      <Navigation />
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

      <Article>
        These experiences have enriched my skills and provided me with platforms
        to contribute to the developer community.
      </Article>

      <Article>
        Overall, my journey across these roles has been marked by a consistent
        drive to enhance community engagement, encourage collaboration, and
        deliver impactful contributions.
      </Article>

      <Footer />
    </div>
  );
}

export default Work;

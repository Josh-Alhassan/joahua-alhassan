import React from "react";
import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import PrimaryHeader from "../utilities/PrimaryHeader";
import SubHeading from "../utilities/SubHeading";

import style from "./Video.module.css";
import Footer from "../components/Footer";

function Video() {
  const videoList = [
    {
      id: 1,
      title: "Fast Look up with Hash Tables",
      url: "https://drive.google.com/file/d/10wEyayUKJ99H2MB-ZQTXUIIXku5lr27l/view?usp=sharing",
    },
    {
      id: 2,
      title: "Building the Developer Portfolio",
      url: "https://www.youtube.com/watch?v=zzIwA7Uzf2g",
    },
    {
      id: 3,
      title: "Building Chrome Extensions with Okeowo Aderemi",
      url: "#",
    },
    {
      id: 4,
      title: "JavaScript Callbacks and Higher Order Functions",
      url: "#",
    },
    {
      id: 5,
      title: "Oh Yes! Big O Notation",
      url: "#",
    },
    {
      id: 6,
      title: "Optimizing Algorithms for Optimistic Scenarios",
      url: "#",
    },
    {
      id: 7,
      title: "Optimizing Code with or Without Big O Notation",
      url: "#",
    },
    {
      id: 8,
      title: "Why Algorithms Matter",
      url: "#",
    },
  ];
  return (
    <div>
      <Navigation />
      <PrimaryHeader>Videos</PrimaryHeader>
      <SubHeading style={{ marginBottom: "40px" }}>
        Here's a list of virtual events, workshops, and webinars I have hosted
      </SubHeading>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {videoList.map((video) => (
          <li key={video.id} style={{ marginBottom: "15px" }}>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className={style.videoLink}
            >
              {video.title}
            </a>
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}

Video.propTypes = {
  videoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Video;

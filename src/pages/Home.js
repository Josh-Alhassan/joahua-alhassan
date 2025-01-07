import React from "react";
import PrimaryHeader from "../utilities/PrimaryHeader";
import Profile from "../components/Profile";
import Article from "../utilities/Article";
import Accordion from "../components/Accordion";
import SocialBlock from "../utilities/SocialBlock";

import style from "./Home.module.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import { articles, socialLinks } from "../data/data";

const Home = () => {
  return (
    <div className={style.homePage}>
      <Navigation />
      <PrimaryHeader>Hey, I'm Joshua 👋</PrimaryHeader>
      <Article>
        I am a frontend Developer, Developer Advocate, and Community Manager
        with 5+ years of experience building developer communities.
      </Article>
      <Profile />
      <Article>
        I create educational content around web development, JavaScript, React,
        and Data Structure & Algorithm.
      </Article>
      <Article>
        I love to write technical articles and share my learnings. Here are some
        of them:
      </Article>
      {articles.map(({ title, description, link }, index) => (
        <Accordion
          key={index}
          title={title}
          description={description}
          link={link}
        />
      ))}
      <div className={style.socialBlock}>
        {socialLinks.map((iconProps, index) => (
          <SocialBlock key={index}>
            <a
              key={index}
              href={iconProps.url}
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialLink}
            >
              <box-icon size="sm" {...iconProps}></box-icon>
            </a>
          </SocialBlock>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

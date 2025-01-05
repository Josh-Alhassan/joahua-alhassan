import React from "react";
import PrimaryHeader from "../utilities/PrimaryHeader";
import Profile from "../components/Profile";
import Article from "../utilities/Article";
import Accordion from "../components/Accordion";
import SocialBlock from "../utilities/SocialBlock";

import style from "./Home.module.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const articles = [
  {
    title: "State Update Batching in React Made Simple",
    description:
      "Learn State update batching and how to improve app performance while keeping your code clean and efficient. By batching updates, React minimizes unnecessary re-renders and ensures your app remains fast.",
    link: "https://alhassanjoshua.hashnode.dev/state-update-batching-in-react-made-simple",
  },
  {
    title: "Understanding the useEffect Hook in React: A Comprehensive Guide",
    description:
      "Learn how to use the React useEffect hook to manage side effects in your app. This guide covers everything you need to know about useEffect, including how to use it to fetch data, manage subscriptions, and more.",
    link: "https://alhassanjoshua.hashnode.dev/state-update-batching-in-react-made-simple",
  },
  {
    title:
      "Understanding Render Logic, Event Handlers, and Side Effects in React",
    description:
      "Render logic, event handlers, and side effects are essential concepts in React. Learn how to use them to build dynamic, interactive apps that respond to user input and update in real-time.",
    link: "https://alhassanjoshua.hashnode.dev/understanding-render-logic-event-handlers-and-side-effects-in-react",
  },
];

const socialLinks = [
  { type: "logo", name: "github" },
  { type: "logo", name: "twitter" },
  { name: "hash", color: "#000" },
  { type: "logo", name: "linkedin", color: "#000" },
];

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
            <box-icon size="sm" {...iconProps}></box-icon>
          </SocialBlock>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

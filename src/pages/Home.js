import React from "react";
import PrimaryHeader from "../utilities/PrimaryHeader";

import style from "./Home.module.css";
import Profile from "../components/Profile";
import Article from "../utilities/Article";
import Accordion from "../components/Accordion";

function Home() {
  return (
    <div className={style.homePage}>
      <PrimaryHeader fontWeight="400">Hey, I'm Joshua 👋</PrimaryHeader>
      <Article>
        I am a frontend Developer, Developer Advocate and Community Manager with
        5+ years of experience building developer communities.
      </Article>
      <Profile />
      <Article>
        I create educational content around web development, JavaScript, React,
        and Data Structure & Algorithm.
      </Article>

      <Article>
        I love to write Technical articles and share about my learnings, Here
        are some of them:
      </Article>
      <Accordion
        title="State Update Batching in React Made Simple"
        description="Learn State update batching and how to improve app performance while keeping your code clean and efficient. By batching updates, React minimizes unnecessary re-renders and ensures your app remains fast."
        link="https://alhassanjoshua.hashnode.dev/state-update-batching-in-react-made-simple"
      />
      <Accordion
        title="Understanding the useEffect Hook in React: A Comprehensive Guide"
        description="Learn how to create a Discord bot with NodeJS, add functionalities, and automate tasks for your server"
        link="https://alhassanjoshua.hashnode.dev/state-update-batching-in-react-made-simple"
      />
      <Accordion
        title="Understanding Render Logic, Event Handlers, and Side Effects in React"
        description="Learn to build a CRUD app using Prisma ORM, Node.js, and PostgreSQL with this comprehensive guide"
        link="https://alhassanjoshua.hashnode.dev/understanding-render-logic-event-handlers-and-side-effects-in-react"
      />
    </div>
  );
}

export default Home;

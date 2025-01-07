import React from "react";
import Navigation from "../components/Navigation";
import PrimaryHeader from "../utilities/PrimaryHeader";
import Article from "../utilities/Article";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navigation />
      <PrimaryHeader fontWeight="500">Work With Me</PrimaryHeader>

      <Article padding="0 0">I'm open to full-time opportunities.</Article>
      <Article padding="0 0">
        You can reach out to me at{" "}
        <span style={{ fontWeight: "500" }}>thealhassanjoshua@gmail.com</span>
      </Article>

      <Footer />
    </div>
  );
}

export default Contact;

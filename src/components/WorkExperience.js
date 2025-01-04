import React from "react";
import Experience from "./Experience";

function WorkExperience() {
  const experiences = [
    {
      title: "Nexascale",
      role: "Community Manager (Volunteer)",
      duration: "2023 - Present",
      description: [
        `A social enterprise committed to fostering the growth and development of the next generation of tech professionals. Providing resources and opportunities for learning and skill building, helping individuals achieve their full potential and contribute to the growth of the tech industry. In addition to providing training and educational resources such as workshops, webinars, and online courses, NexaScale create a supportive community where members can connect, collaborate, and grow together.`,
      ],
      achievements: [
        "Host office hours, conduct workshops and fireside chats, and developed growth initiatives for members.",
        "Grew the Data Structure community from less than 300 to 1892 people at present.",
      ],
    },
    {
      title: "EDUSTIPEND",
      role: "Community Manager (Volunteer)",
      duration: "2023 - Present",
      description: [
        `Edustipend is a transformative initiative dedicated to empowering learners by providing access to education, mentorship, and financial support. Our mission is to bridge the gap in education by ensuring that learners, regardless of their background, can acquire the skills and knowledge they need to succeed in their academic and professional journeys.`,

        `Through innovative programs like the Support a Learner campaign, we focus on creating opportunities for underserved communities, fostering growth, and inspiring change`,

        `Edustipend has successfully maintained a close-to-zero gender disparity in disbursing stipends? 48.5% of our beneficiaries in the past year are females, ensuring that for every male beneficiary, there has been a female beneficiary. And our laptop stipends have been equally shared between male and female beneficiaries. Everyone has a place here at Edustipend.
`,
      ],
      achievements: [
        "Developed programs and initiatives to grow the engagement level of the internal Edustipend community.",
        "Grew the community to over 600 people (beneficiaries)",
        "Helped raise the sum of 5 million for the “Support a learner” campaign.",
        "Generated user insights from engagement with the internal community and feed that into the design and engineering of the edustipend.org product.",
      ],
    },
    {
      title: "BeerJs Lokoja",
      role: "Community Lead",
      duration: "2023 - Present",
      description: [
        `BeerJS is a community of JavaScript developers who meet to discuss and share knowledge about JavaScript and related technologies. The community is open to developers of all skill levels, from beginners to experts, and provides a welcoming and inclusive environment for learning and networking. BeerJS Lokoja is the first BeerJS community in Africa and is dedicated to fostering the growth and development of the local tech community in Lokoja, Nigeria.`,

        `The community hosts regular meetups, workshops, and events to help developers connect, learn, and grow together. BeerJS Lokoja is committed to promoting diversity and inclusion in the tech industry and creating opportunities for underrepresented groups to succeed in tech.`,
      ],
      achievements: [
        "Host in-person Javascript workshops (last Saturday of every month).",
        "Grew the community to a total of 139 people.",
        "Hosted the first-ever JavaScript conference in Lokoja, Nigeria.",
      ],
    },
    {
      title: "Google Developer Student Club (GDSC) Federal University Lokoja",
      role: "Co-organizer",
      duration: "2020 - 2022",
      description: [
        `GDSC Federal University Lokoja is a student-led community that aims to inspire students to grow their knowledge in Google's technology and use it to solve real-world problems. The community hosts workshops, study jams, and other events to help students learn new skills and connect with other developers.`,
      ],
      achievements: [
        "Lead the web development team.",
        "Gave technical talks.",
        "Hosted workshops and conferences",
      ],
    },
    {
      title: "Facebook Developer Circle (DevC) Lokoja",
      role: "Co-organizer",
      duration: "2019 - 2022",
      description: [
        `DevC Lokoja is part of the larger Facebook Developer Circles program, which is a global community of developers who are dedicated to learning, sharing, and collaborating on projects that have a positive impact on society.`,

        `DevC Lokoja is committed to promoting diversity and inclusion in the tech industry and creating opportunities for underrepresented groups to succeed in tech.`,
      ],
      achievements: [
        "Hosted workshops, Learnkathons, and meetups",
        "Gave technical talks.",
        "Onboarded a total of 292 community members at the launch of the communityHosted workshops and conferences",
      ],
    },
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </div>
  );
}

export default WorkExperience;

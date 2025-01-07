import React from "react";

import style from "./Profile.module.css";

import profile from "../assets/alhassan.jpg";
import SocialList from "../utilities/SocialList";

function Profile() {
  const data = [
    {
      icon: <box-icon type="logo" name="twitter"></box-icon>,
      description: "6k+ tweets all time",
    },
    {
      icon: <box-icon name="trending-up" color="#000"></box-icon>,
      description: "37+ blog posts all time",
    },
    {
      icon: <box-icon name="hash" color="#000"></box-icon>,
      description: "1,735k+ blog views all time",
    },
  ];

  return (
    <div className={style.profileContainer}>
      <div className={style.imageWrapper}>
        <img
          className={style.profileImage}
          src={profile}
          alt="Profile of Abel Joshua"
        />
      </div>

      <div className={style.profileCard}>
        {data.map((item, index) => (
          <SocialList
            key={index}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;

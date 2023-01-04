import ProfilePic from "./../../assets/images/profile.jpeg";
import "./Profile.css";

import {
  About,
  ExtraDetails,
  HappyMoment,
  Interests,
  Languages,
  Learn,
  WorkStyle,
} from "..";
import { ReactComponent as IconEditCard } from "../../assets/icons/icon-edit-card.svg";
import { WorkPreferences } from "./WorkPreferences/WorkPreferences";

export function Profile() {
  return (
    <div className="Profile">
      <div>
        <img
          className="rounded-circle profile-pic"
          src={ProfilePic}
          alt="sadlkf"
        />
        <br></br>
        <h1 className="profile-name">&lt;firstName&gt; &lt;lastName&gt; </h1>
        <button type="button" className="edit-button">
          <IconEditCard />
        </button>
        <p>&lt;jobTitle&gt; </p>
      </div>
      <div className="flex-vertical">
        <div className="flex-box">
          <About />
          <ExtraDetails />
        </div>
        <div className="flex-box">
          <Interests />
          <Languages />
        </div>
        <div className="flex-box">
          <HappyMoment />
          <Learn />
        </div>
        <div className="flex-box">
          <WorkPreferences />
          <WorkStyle />
        </div>
      </div>
    </div>
  );
}

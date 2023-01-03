import ProfilePic from "./../../assets/images/profile.jpeg";
import "./Profile.css";

import { ReactComponent as IconEditCard } from "../../assets/icons/icon-edit-card.svg";

export function Profile() {
  return (
    <div className="Profile">
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
  );
}

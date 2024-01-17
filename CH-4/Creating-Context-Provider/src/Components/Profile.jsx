import React from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = React.useContext(UserContext);

  if (!user) {
    return <h2>Please Login</h2>;
  }
  return (
    <>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </>
  );
}

export default Profile;

import { useEffect, useState } from "react";

const ReadCookiePage = () => {
  const [userPreference, setUserPreference] = useState("");

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userPreference"))
      .split("=")[1];
    setUserPreference(cookieValue);
  }, []);

  return (
    <div>
      <p>User Preference: {userPreference}</p>
    </div>
  );
};

export default ReadCookiePage;

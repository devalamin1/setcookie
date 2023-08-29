import { useEffect } from "react";

const SetCookiePage = () => {
  const setUserPreferenceCookie = () => {
    document.cookie = "userPreference=theme:dark; path=/";
    // You can add more logic here to set user preferences
  };

  useEffect(() => {
    setUserPreferenceCookie();
  }, []);

  return (
    <div>
      <p>Cookie set successfully!</p>
    </div>
  );
};

export default SetCookiePage;

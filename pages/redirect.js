import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/"); // Redirect to the homepage after 2 seconds
    }, 2000);
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default RedirectPage;

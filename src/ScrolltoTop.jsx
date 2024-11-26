import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrolltoTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Trigger whenever the route changes

  return null; // This component does not render anything
}

export default ScrolltoTop;
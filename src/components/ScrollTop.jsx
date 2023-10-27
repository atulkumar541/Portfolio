import { useState, useEffect } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
export const ScrollTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div>
      {Math.floor(scrollPosition) ? (
        <a href="#" class="back-to-top">
          <i>
            <BsChevronDoubleUp />
          </i>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

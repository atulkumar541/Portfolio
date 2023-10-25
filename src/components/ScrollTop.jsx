import { useState } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
export const ScrollTop = () => {
  const [isScroll, setIsScroll] = useState(true);

  return (
    <div>
      {isScroll ? (
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

import { useEffect, useState } from "react";
import Image from "next/image";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <Image
          alt="icon"
          width={30}
          height={30}
          className="icon"
          src="/svg/arrow.svg"
        />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
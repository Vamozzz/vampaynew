// // ScrollToTopButton.js

// import { useState, useEffect } from 'react';

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);

//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//     };
//   }, []);

//   return (
//     <div>
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none"
//         >
//           Scroll to Top
//         </button>
//       )}
//     </div>
//   );
// };

// export default ScrollToTopButton;

// ScrollToTopButton.js
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollDownVisible, setIsScrollDownVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      setIsScrollDownVisible(false);
    } else {
      setIsVisible(false);
      setIsScrollDownVisible(true);
    }
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.pageYOffset + window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isScrollDownVisible && (
        <button
          onClick={scrollDown}
          className="fixed bottom-5 right-5 shadow-lg text-white p-2 rounded-full  focus:outline-none"
        >
          <Image
            src={"/SCROLLDOWN.svg"}
            alt="Scroll Down"
            height={30}
            width={30}
          />
        </button>
      )}

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 shadow-lg text-white p-2 rounded-full focus:outline-none"
        >
          <Image
            src={"/SCROLLUP.svg"}
            alt="Scroll to Top"
            height={30}
            width={30}
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

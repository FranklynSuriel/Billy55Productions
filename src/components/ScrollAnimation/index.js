import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children }) => {
  // State to track whether the element is visible in the viewport
  const [isVisible, setIsVisible] = useState(false);

  // Create a ref to the target element
  const targetRef = useRef(null);

  // Function to handle the scroll event
  const handleScroll = () => {
    // Check if the target element exists in the DOM
    if (targetRef.current) {
      // Get the top position of the target element relative to the viewport
      const elementTop = targetRef.current.getBoundingClientRect().top;

      // Get the height of the viewport
      const windowHeight = window.innerHeight;

      // Adjust the threshold based on when you want the animation to trigger
      if (elementTop < windowHeight * 0.8) {
        // If the element is 80% or more visible, set isVisible to true
        setIsVisible(true);
      }
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures the event listener is added only once

  return (
    // The div with a ref that targets the animated element
    <div ref={targetRef} className={`scroll-animation ${isVisible ? 'animate' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;

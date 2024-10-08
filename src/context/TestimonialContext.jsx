import { createContext, useContext, useState } from "react";
import whatTheySayAboutUsArr from "../utils/whatTheySayAboutUsArr";
//NOTE: SUMMARY
//Create Context
//Provide Context Value
// use Context Value

// FIX: add auto scroll to the carousel
//NOTE: make sure at least 2 items are there in the array (whatTheySayAboutUsArr) !

// 1) CREATING THE CONTEXT
export const TestimonialContext = createContext();

// 2) CREATING A CONTEXT PROVIDER IN WHICH WE WILL SPECIFY VALUES THAT SHOULD BE GLOBALLY AVAILABLE

// 2) WE WILL WRAP OUR APPLICATION WITH THIS PROVIDER ( by application i mean App.jsx)

export const TestimonialProvider = ({ children }) => {
  const [currIndex, setCurrIndex] = useState(0);

  function nextSlide() {
    console.log("nextSlide", currIndex);
    setCurrIndex((prevIndex) => (prevIndex + 1) % whatTheySayAboutUsArr.length);
  }

  function prevSlide() {
    console.log("prevSlide", currIndex);
    setCurrIndex(
      (prevIndex) =>
        (prevIndex - 1 + whatTheySayAboutUsArr.length) %
        whatTheySayAboutUsArr.length
    );
  }
  //   console.log(currIndex, " from context provider -> currIndex");
  return (
    <TestimonialContext.Provider value={{ currIndex, nextSlide, prevSlide }}>
      {children}
    </TestimonialContext.Provider>
  );
};

import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
   
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    // if (currentPage === 'Testimonial') {
    //   return <Testimonial />;
    // }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Testimonial />      
    </div>
  );
}

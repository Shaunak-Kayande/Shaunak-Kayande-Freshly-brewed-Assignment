import { useState } from "react";
import "./App.css";
import Home from "./sections/home/Home";
import Welcome from "./sections/welcome/Welcome";
import Services from "./sections/services/Services";
import FeaturedCourses from "./sections/featured-courses/FeaturedCourses";
import Testimonial from "./sections/testimonial/Testimonial";
import Insights from "./sections/insights/Insights";
import Subscribe from "./sections/subscribe/Subscribe";
import Footer from "./sections/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Home />
      <Welcome />
      <Services />
      <FeaturedCourses />
      <Testimonial />
      <Insights />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

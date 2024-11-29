import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Companies,
} from "./components";

const App = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {videoError ? (
          // Fallback Background
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
        ) : (
          // Video Background
          <div className="relative w-full h-screen">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/introvid.mp4"
              autoPlay
              loop
              muted
              playsInline
              onError={() => setVideoError(true)} // Set error state on video load failure
            />
            <div className="relative z-10">
              <Navbar />
              <Hero />
            </div>
          </div>
        )}

        <About />
        <Companies />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

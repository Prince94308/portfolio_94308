import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Experience, Tech, Works, Contact, Education, Certifications, Footer, FootballCursor, ClickSound, SmoothScroll, SimpleLoader } from "./components";

const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SmoothScroll>
          <ClickSound />
          <FootballCursor />
          <div className="relative z-0 bg-primary transition-colors duration-300">
            <div className="dark:bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Education />
            <Tech />
            <Works />
            <Certifications />
            {/* Feedbacks */}
            <div className="relative z-0">
              <Contact />
              <Suspense fallback={<SimpleLoader />}>
                <StarsCanvas />
              </Suspense>
            </div>
            <Footer />
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

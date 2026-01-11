import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar, Hero, About, Experience, Tech, Works, Contact, Education, Certifications, Footer, FootballCursor, ClickSound, SmoothScroll, SimpleLoader, ProjectDetails } from "./components";

const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <SmoothScroll>
          <ClickSound />
          <FootballCursor />
          <Suspense fallback={<SimpleLoader />}>
            <StarsCanvas />
          </Suspense>
          <div className="relative z-0 bg-transparent transition-colors duration-300">
            <Routes>
              <Route path="/" element={
                <div className="bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <Hero />
                  <About />
                  <Experience />
                  <Education />
                  <Tech />
                  <Works />
                  <Certifications />
                  <div className="relative z-0">
                    <Contact />
                  </div>
                  <Footer />
                </div>
              } />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </div>
        </SmoothScroll>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;

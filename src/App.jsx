import {
  Background3D,
  ErrorBoundary,
  Footer,
  Loading,
  Navbar,
} from "@/components/index";
import { useSEO } from "@/hooks/useSEO";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomeLayout = lazy(() => import("./pages/HomeLayout"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AppLayout() {
  useSEO();
  useVisitorTracking();

  return (
    <div className="min-h-screen flex flex-col">
      {/* <ErrorBoundary fallback={null}>
        <Background3D />
      </ErrorBoundary> */}
      <Navbar />
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;

import Gallery from "./Gallery/Gallery";
import News from "./News/News";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Team from "./Ourteam/Team";
import Landing from "./Landingpage/Landing";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Edutech from "./Edutech/Edutech";
import About from "./About/About";
import NewsDetail from "./News/NewsDetail";
import ScrollToTop from "./ScrolltoTop";
import NotFound from "./NotFound";
import LoadingScreen from "./LoadingScreen";
import { useState } from "react";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
  ) : (
    <>
      <ScrollToTop /> {/* This ensures scrolling to the top on route changes */}
      <Outlet /> {/* Outlet renders the current route's component */}
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      element: <Layout />, // Wrap all routes with the Layout
      children: [
        { path: "/", element: <Landing /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/news", element: <News /> },
        { path: "/projects", element: <Projects /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/edutech", element: <Edutech /> },
        { path: "/news/:id", element: <NewsDetail /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

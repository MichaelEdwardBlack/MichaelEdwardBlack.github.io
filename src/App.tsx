import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationBar } from "./components/NavigationBar";
import { AnimatePresence } from "framer-motion";
import { Portfolio } from "./pages/portfolio/Portfolio";
import React from "react";

export const App = () => {
  const queryClient = new QueryClient();
  const theme = useRecoilValue(themeState);
  const location = useLocation();
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/portfolio", element: <Portfolio /> },
  ])

  return (
    <div className={theme}>
      <div className="h-screen text-black bg-gray-100 dark:bg-gray-800 dark:text-white">
        <QueryClientProvider client={queryClient}>
          <NavigationBar />
          <AnimatePresence mode="wait">
            {React.cloneElement(element ?? <div>Not found!</div>, { key: location.pathname })}
            {/* <Route path="/portfolio" element={Portfolio} />
            <Route path="/portfolio/picolabs" element={Picolabs} />
            <Route path="/portfolio/trinsic" element={Trinsic} />
            <Route path="/blog" element={Blog} />
          <Route path="/blog/:id" element={BlogPost} /> */}
          </AnimatePresence>
        </QueryClientProvider>
      </div>
    </div>
  );
};

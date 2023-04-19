import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationBar } from "./components/NavigationBar";
import { Resume } from "./pages/resume/Resume";
import { Footer } from "./components/Footer";

export const App = () => {
  const queryClient = new QueryClient();
  const theme = useRecoilValue(themeState);

  return (
    <div className={theme}>
      <div className="flex flex-col min-h-screen gap-8 text-black bg-gray-100 dark:bg-gray-800 dark:text-white">
        <QueryClientProvider client={queryClient}>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<div>Not Found!</div>} />
          </Routes>
          <Footer />
        </QueryClientProvider>
      </div>
    </div>
  );
};

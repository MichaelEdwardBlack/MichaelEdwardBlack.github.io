import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationBar } from "./components/NavigationBar";

export const App = () => {
  const queryClient = new QueryClient();
  const theme = useRecoilValue(themeState);

  return (
    <div className={theme}>
      <div className="w-full h-screen text-black bg-gray-100 dark:bg-black dark:text-white">
        <QueryClientProvider client={queryClient}>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/portfolio" element={Portfolio} />
            <Route path="/portfolio/picolabs" element={Picolabs} />
            <Route path="/portfolio/trinsic" element={Trinsic} />
            <Route path="/blog" element={Blog} />
            <Route path="/blog/:id" element={BlogPost} /> */}
          </Routes>
        </QueryClientProvider>
      </div>
    </div>
  );
};

"use client";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import { NavigationBar } from "@/components/NavigationBar";
import { ToastProvider } from "@/components/Toast";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const Root = ({ children }: React.PropsWithChildren) => {
  return (
    <RecoilRoot>
      <ToastProvider>
        <body className={inter.className}>
          <NavigationBar />
          {children}
          <Footer />
        </body>
      </ToastProvider>
    </RecoilRoot>
  );
};

"use client";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import { Navbar } from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const Root = ({ children }: React.PropsWithChildren) => {
  return (
    <RecoilRoot>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </RecoilRoot>
  );
};

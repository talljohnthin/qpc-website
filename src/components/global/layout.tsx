import { ReactNode } from "react";
import Navbar from "./Navbar";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";

const semiCondense = localFont({
  variable: "--font-acumin-sc",
  src: [
    {
      path: "../../assets/fonts/AcuminVariableConcept-CnMdium.woff",
      weight: "500",
      style: "normal",
    },
  ],
});

const regular = localFont({
  variable: "--font-acumin-reg",
  src: [
    {
      path: "../../assets/fonts/AcuminVariableConcept.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar classes={regular.variable} />
      <main
        className={`${semiCondense.variable} ${regular.variable} ${playfair.variable}`}
      >
        {children}
      </main>
    </>
  );
}

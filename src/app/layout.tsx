import "./globals.css";
import { Inter } from "next/font/google";
import "./navbar";
import NavBar from "./navbar";

export const metadata = {
  title: {
    template: "%s | ilyasofficial1617",
    default: "ilyasofficial1617",
  },
  description: "ilyas' portofolio and resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

import localFont from "next/font/local";

import "./globals.css";
import Layout from "./components/layout";

const Trap = localFont({
  src: [
    {
      path: "./fonts/Trap-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/Trap-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/Trap-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-primary",
});

export const metadata = {
  title: "The Home Of Markerting | EEZY 360",
  description:
    "Access to an entire marketing department, for the price of an apprentice. Only at EEZY360",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Trap.variable} font-sans bg-black text-white`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

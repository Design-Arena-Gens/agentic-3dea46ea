import "@/app/globals.css";
import { Montserrat, Lato } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading"
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body"
});

export const metadata = {
  title: "$100 Crumbl Gift Card Survey",
  description:
    "Review your favorite Crumbl cookie flavors, complete quick offers, and earn a $100 Crumbl gift card."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}

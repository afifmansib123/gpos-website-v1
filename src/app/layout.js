import "./globals.scss";
import NavBar from "@/components/navbar/NavBar";

export const metadata = {
  title: "GPOS",
  description: "A Smart POS System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

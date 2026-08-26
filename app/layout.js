// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Travel Unbounded",
  description: "Explore destinations worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

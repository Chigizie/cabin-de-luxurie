import { RangeProvider, UserProvider } from "./context/RangeContext";
import Header from "./_components/Header";
import "./_styles/global.css";

// This is the root layout for the application
// It wraps all pages and components in a consistent layout
// and provides global styles and metadata.

import React from "react";
export const metadata = {
  title: {
    template: "%s | Cabin de Luxurie",
    default: "Cabin de Luxurie", // a default is required when creating a template
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-300 antialiased">
        <Header />

        <main className="flex min-h-screen flex-col  justify-between  ">
          <RangeProvider>{children}</RangeProvider>
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./(home)/_components/Navbar/Navbar";
import theme from "../theme";

import "./globals.css";
import { CssBaseline } from "@mui/material";


export const metadata: Metadata = {
  title: "Jhoer Perez - jho3r",
  description: "Jhoer Perez's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

"use client";
import useRouteMatch from "@/hooks/useRouteMatch";
import { Tab, Tabs } from "@mui/material";
import Link from "next/link";

import styles from "./Navbar.module.css";

const UNKNOWN_PATH = "/unknown";
const PATHS = ["/", "/portfolio", "/blog", "/contact"];

export default function Navbar() {
  const routeMatch = useRouteMatch(PATHS);
  const value = routeMatch?.path ?? UNKNOWN_PATH;

  console.log("value", value);

  return (
    <nav className={value === UNKNOWN_PATH ? styles.hidden : styles.navbar}>
      <Tabs role="navigation" value={value} aria-label="Navbar" centered>
        <Tab label="Home" component={Link} href="/" value="/" />
        <Tab
          label="Portfolio"
          component={Link}
          href="/portfolio"
          value="/portfolio"
        />
        <Tab label="Blog" component={Link} href="/blog" value="/blog" />
        <Tab
          label="Contact"
          component={Link}
          href="/contact"
          value="/contact"
        />
      </Tabs>
    </nav>
  );
}

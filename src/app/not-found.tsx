import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.css"; // For scoped CSS
import { Button } from "@mui/material";

import astronaut from "../assets/astronaut.png";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Whoops! Lost in Hyperspace?</h1>
      <p>The page you requested could not be found.</p>
      <div className={styles.astronaut}>
        <div className={styles.helmet}>
          <Image src={astronaut} alt="Astronaut" className={styles.image} />
        </div>
      </div>
      <Link href="/">
        <Button variant="contained" color="primary">
          Take me Home
        </Button>
      </Link>
    </div>
  );
}

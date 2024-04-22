import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.css"; // For scoped CSS
import { Button, Typography } from "@mui/material";

import astronaut from "../assets/astronaut.png";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Typography variant="h3" gutterBottom>Whoops! Lost in Hyperspace?</Typography>
      <Typography variant="body1">
        The page you requested could not be found.
      </Typography>
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
import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import { Dancing_Script } from "next/font/google";
import { purple } from "@mui/material/colors";

const dancingScript = Dancing_Script({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function NotFound() {
  return (
    <Stack marginTop={10} alignItems="center" justifyContent="center">
      <Typography
        variant="h1"
        component="h1"
        className={dancingScript.className}
      >
        404
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        className={dancingScript.className}
      >
        Not Found Page
      </Typography>
      <Typography variant="p" component="p" className={dancingScript.className}>
        Could not find requested resource
      </Typography>
      <Link
        className={dancingScript.className}
        style={{ color: purple[500], fontWeight: "bold", marginTop: "20px" }}
        href="/"
      >
        Return Home
      </Link>
    </Stack>
  );
}

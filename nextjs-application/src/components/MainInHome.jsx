"use client";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

import { Card, CardContent, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";

export default function MainInHome() {
  const router = useRouter();
  return (
    <Grid container spacing={2} marginX={2} marginY={2} textAlign={"center"}>
      <Grid item size={{ xs: 12 }}>
        <Card onClick={() => router.push("/users")}>
          <CardContent sx={{ backgroundColor: blue[200] }}>
            <Typography
              variant="h4"
              component="h2"
              className={dancingScript.className}
            >
              Users
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item size={{ xs: 12 }}>
        <Card onClick={() => router.push("/posts")}>
          <CardContent sx={{ backgroundColor: blue[200] }}>
            <Typography
              variant="h4"
              component="h2"
              className={dancingScript.className}
            >
              Posts
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item size={{ xs: 12 }}>
        <Card onClick={() => router.push("/recipes")}>
          <CardContent sx={{ backgroundColor: blue[200] }}>
            <Typography
              variant="h4"
              component="h2"
              className={dancingScript.className}
            >
              Recipes
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

import UsersCard from "@/components/Card";
import getData from "@/utils/getData";
import { Suspense } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import { indigo } from "@mui/material/colors";

export const metadata = {
  title: "Posts",
  description: "This is the Posts page",
};

export default async function posts() {
  const data = await getData("https://dummyjson.com/posts");
  return (
    <Suspense fallback={<p>Please be patient😎<br />Posts are loading..</p>}>
      <Container maxWidth="lg">
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        marginTop={2}
        container
        spacing={2}
      >
        {data.posts.map((el) => (
          <UsersCard
            key={el.id}
            propPath={`/posts/${el.id}`}
            propFullName={el.title}
            propColor={indigo[300]}
            propColor2={indigo[100]}
          />
        ))}
      </Grid>
      </Container>
    </Suspense>
  );
}

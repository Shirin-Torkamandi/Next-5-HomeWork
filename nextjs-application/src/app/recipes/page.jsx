import UsersCard from "@/components/Card";
import getData from "@/utils/getData";
import { Suspense } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import { purple } from "@mui/material/colors";

export const metadata = {
  title: "Recipes",
  description: "This is the Recipes page",
};

export default async function recipes() {
  const data = await getData("https://dummyjson.com/recipes");
  return (
    <Suspense fallback={<p>Are you hungry?🍖🍗<br />Foods are loading..</p>}>
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
        {data.recipes.map((el) => (
          <UsersCard
            key={el.id}
            propPath={`/recipes/${el.id}`}
            propImage={el.image}
            propFullName={el.name}
            propColor="#d50000"
            propColor2={purple[50]}
          />
        ))}
      </Grid>
      </Container>
    </Suspense>
  );
}

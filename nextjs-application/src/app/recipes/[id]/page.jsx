import getData from "@/utils/getData";
import { Container } from "@mui/material";

export async function generateMetadata({ params }) {
  return {
    title: `Recipe ${params.id}`,
    description: `This page is for the Recipe ${params.id}`,
  };
}

export default async function recipesId({ params }) {
  const data = await getData("https://dummyjson.com/recipes");
  const recipesFind = data.recipes.find((el) => el.id == params.id);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Container maxWidth="lg">
        <img src={recipesFind.image} style={{ maxWidth: "40%" }} />
        <h1>{recipesFind.name}</h1>
        <p>Instructions: {recipesFind.instructions}</p>
        <p>
          Time needed:{" "}
          {recipesFind.prepTimeMinutes + recipesFind.cookTimeMinutes} min
        </p>
        <p>It is served for {recipesFind.mealType}</p>
      </Container>
    </div>
  );
}

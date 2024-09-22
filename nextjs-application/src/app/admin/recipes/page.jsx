import AnchorTemporaryDrawer from "@/components/DrawerForAdmin";
import FormForRecipe from "@/components/FormForRecipe";
import RecipesList from "@/components/RecipesList";

export const metadata = {
  title: "Admin Recipes",
  description: "This is the Admin Recipes page",
};

export default async function AdminRecipe() {
  const res = await fetch("http://localhost:3000/api/v1/recipes", {
    next: { tags: ["recipe"] },
  });
  const recipes = await res.json();
  return (
    <>
      <AnchorTemporaryDrawer />
      <FormForRecipe />
      <RecipesList recipes={recipes} />
    </>
  );
}

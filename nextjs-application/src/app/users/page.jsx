import UsersCard from "@/components/Card";
import getData from "@/utils/getData";
import { Suspense } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";

export const metadata = {
  title: "Users",
  description: "This is the Users page",
};

export default async function users() {
  const data = await getData("https://dummyjson.com/users");
  return (
    <Suspense fallback={<p>Please be patient😉😄<br />We are loading..</p>}>
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
        {data.users.map((el) => (
          <UsersCard
            key={el.id}
            propPath={`/users/${el.id}`}
            propImage={el.image}
            propFullName={el.firstName + " " + el.lastName}
          />
        ))}
      </Grid>
      </Container>
    </Suspense>
  );
}

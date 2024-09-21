import getData from "@/utils/getData";

export async function generateMetadata({ params }) {
  return {
    title: `User ${params.id}`,
    description: `This page is for the User ${params.id}`,
  };
}

export default async function usersId({ params }) {
  const data = await getData("https://dummyjson.com/users");
  const userFind = data.users.find((el) => el.id == params.id);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img src={userFind.image} />
      <h1>{userFind.firstName + " " + userFind.lastName}</h1>
      <p>{userFind.age} years</p>
      <p>Born in {userFind.birthDate}</p>
      <p>{userFind.gender}</p>
      <p>Email: {userFind.email}</p>
      <p>Phone: {userFind.phone}</p>
      <p>Studied in {userFind.university}</p>
      <p>Role is "{userFind.role}"</p>
    </div>
  );
}

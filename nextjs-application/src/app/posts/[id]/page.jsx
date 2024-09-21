import getData from "@/utils/getData";
import { Container } from "@mui/material";

export async function generateMetadata({ params }) {
  return {
    title: `Post ${params.id}`,
    description: `This page is for the Post ${params.id}`,
  };
}

export default async function postsId({ params }) {
  const data = await getData("https://dummyjson.com/posts");
  const postFind = data.posts.find((el) => el.id == params.id);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Container maxWidth="lg">
        <h1>{postFind.title}</h1>
        <p>{postFind.body}</p>
        <p>likes: {postFind.reactions.likes}</p>
        <p>dislikes: {postFind.reactions.dislikes}</p>
        <p>views: {postFind.views}</p>
      </Container>
    </div>
  );
}

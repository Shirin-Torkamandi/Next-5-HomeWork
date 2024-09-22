import AnchorTemporaryDrawer from "@/components/DrawerForAdmin";
import FormForPost from "@/components/Form";
import PostsList from "@/components/PostsList";

export const metadata = {
  title: "Admin Posts",
  description: "This is the Admin Posts page",
};

export default async function AdminPost() {
  const res = await fetch("http://localhost:3000/api/v1/posts", {
    next: { tags: ["post"] },
  });
  const posts = await res.json();
  return (
    <>
      <AnchorTemporaryDrawer />
      <FormForPost />
      <PostsList posts={posts} />
    </>
  );
}

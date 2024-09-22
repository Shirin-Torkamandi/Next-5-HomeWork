import AnchorTemporaryDrawer from "@/components/DrawerForAdmin";
import FormForUser from "@/components/FormForUser";
import UsersList from "@/components/UsersList";

export const metadata = {
  title: "Admin Users",
  description: "This is the Admin Users page",
};

export default async function AdminUser() {
  const res = await fetch("http://localhost:3000/api/v1/users", {
    next: { tags: ["user"] },
  });
  const users = await res.json();
  return (
    <>
      <AnchorTemporaryDrawer />
      <FormForUser />
      <UsersList users={users} />
    </>
  );
}

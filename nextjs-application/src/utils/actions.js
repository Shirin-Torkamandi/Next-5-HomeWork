"use server";

import { revalidateTag } from "next/cache";

export async function addPost(postTitle) {
  await fetch("http://localhost:3000/api/v1/posts", {
    method: "POST",
    body: JSON.stringify({ title: postTitle }),
  });
  revalidateTag("post");
}

export async function editPost(id, postTitle) {
  await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title: postTitle }),
  });
  revalidateTag("post");
}
export async function deletePost(id) {
  await fetch(`http://localhost:3000/api/v1/posts/${id}`, { method: "DELETE" });
  revalidateTag("post");
}

export async function addRecipe(recipeTitle) {
  await fetch("http://localhost:3000/api/v1/recipes", {
    method: "POST",
    body: JSON.stringify({ title: recipeTitle }),
  });
  revalidateTag("recipe");
}

export async function editRecipe(id, recipeTitle) {
  await fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title: recipeTitle }),
  });
  revalidateTag("recipe");
}
export async function deleteRecipe(id) {
  await fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    method: "DELETE",
  });
  revalidateTag("recipe");
}

export async function addUser(userTitle) {
  await fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    body: JSON.stringify({ title: userTitle }),
  });
  revalidateTag("user");
}

export async function editUser(id, userTitle) {
  await fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title: userTitle }),
  });
  revalidateTag("user");
}
export async function deleteUser(id) {
  await fetch(`http://localhost:3000/api/v1/users/${id}`, { method: "DELETE" });
  revalidateTag("user");
}

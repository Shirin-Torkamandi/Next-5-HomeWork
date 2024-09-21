import { data } from "../route";

export async function GET(req, { params }) {
  const res = data.find((data) => data.id === params.id);
  return Response.json(res);
}

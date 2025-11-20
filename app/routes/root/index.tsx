import { redirect } from "react-router";

export async function loader() {
  return redirect("/sign-in");
}

const RootRedirect = () => null;
export default RootRedirect;

import Navigation from "../_components/Navigation";
import { auth } from "../_lib/auth";

async function page() {
  const session = await auth();

  return (
    <div className=" text-lg mt-2">
      <p>Welcome, {session?.user?.name || "Guest"}!</p>
      <p>Email: {session?.user?.email || "Not provided"}</p>
      <p>Status: {session ? "Logged in" : "Not logged in"}</p>
    </div>
  );
}

export default page;

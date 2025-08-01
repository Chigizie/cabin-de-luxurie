import Navigation from "../_components/Navigation";
import { auth } from "../../auth";

async function page() {
  const session = await auth();

  return (
    <div className=" text-lg mt-2">
      <p>Welcome, {session?.user?.name || "Guest"}!</p>
    </div>
  );
}

export default page;

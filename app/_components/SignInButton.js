import Image from "next/image";
import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button
        type="submit"
        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <div className="relative aspect-square h-6 w-6">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/800px-Google_Favicon_2025.svg.png
"
            fill
            alt="Google Icon"
            className="inline mr-2"
          />
        </div>
        Sign In with Google
      </button>
    </form>
  );
}

export default SignInButton;

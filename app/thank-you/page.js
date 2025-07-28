import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
function page() {
  return (
    <div className="grid justify-center items-center h-[15rem]">
      <h3 className="font-bold text-lg text-gray-200">
        Thank you for reserving...
      </h3>
      <p>
        <Link
          href="/account/reservations"
          className="text-blue-800 hover:text-blue-600 border rounded-lg p-2 border-gray-600"
        >
          Check out your reservations
        </Link>
      </p>
    </div>
  );
}

export default page;

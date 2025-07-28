import Link from "next/link";
import { HiOutlinePencil } from "react-icons/hi2";

async function EditReservation({ id }) {
  return (
    <Link
      href={`/account/reservations/edit/${id}`}
      className=" text-white px-4 py-2 rounded hover:bg-green-200 bg-green-500 flex items-center justify-center"
    >
      <HiOutlinePencil />
      Edit
    </Link>
  );
}

export default EditReservation;

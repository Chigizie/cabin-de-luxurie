"use client";

import { useTransition } from "react";
import { deleteBookins } from "../_lib/actions";
import { HiOutlineTrash, HiTrash } from "react-icons/hi2";

function Deletereservation({ id }) {
  const [isPending, startTransition] = useTransition();
  function handleDelete() {
    startTransition(() => deleteBookins(id));
  }
  return (
    <button
      onClick={handleDelete}
      className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 disabled:cursor-not-allowed disabled:bg-gray-500 "
      disabled={isPending}
    >
      <HiOutlineTrash /> {isPending ? "Deleting" : "Delete"}
    </button>
  );
}

export default Deletereservation;

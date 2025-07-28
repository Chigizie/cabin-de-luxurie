"use client";

import { useActionState } from "react";
import { updateBooking } from "@/app/_lib/actions";

function EditReservationForm({ booking, optionEl, reservationID }) {
  const [state, updateBookin, pending] = useActionState(updateBooking, null);

  return (
    <form className=" grid gap-6" action={updateBookin}>
      <div className="mb-4">
        <label htmlFor="numGuests">Number of guests:</label>
        <select
          type="text"
          id="numGuests"
          name="numGuests"
          defaultValue={booking?.numGuests}
          className="border border-gray-300 rounded p-2 w-full bg-gray-800 "
        >
          {optionEl}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="startDate">Observations:</label>
        <input
          type="textarea"
          id="observations"
          name="observations"
          defaultValue={booking?.observations}
          className="border border-gray-300 rounded p-2 w-full bg-gray-800"
        />
        <input type="hidden" value={reservationID} name="reservationId" />
      </div>

      <button
        disabled={pending}
        type="submit"
        className="bg-blue-500 text-white p-2 rounded disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        Update Reservation
      </button>
    </form>
  );
}

export default EditReservationForm;

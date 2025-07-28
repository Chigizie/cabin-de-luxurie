"use client";

import { differenceInDays } from "date-fns";
import { createBooking } from "../_lib/actions";
import { useRange } from "../context/RangeContext";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useActionState } from "react";

function ReservationForm({ cabin, guestId, session }) {
  const { range, reset } = useRange();
  const { maxCapacity, discount, regularPrice, id } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * regularPrice - discount;

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
    guestId,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
    totalPrice: cabinPrice,
  };

  const createWithBookingData = createBooking.bind(null, bookingData);

  const [state, formAction, pending] = useActionState(
    createWithBookingData,
    null
  );
  const optionEl = Array.from({ length: maxCapacity }, (_, i) => (
    <option key={i}>{i + 1}</option>
  ));
  if (!session)
    return (
      <h2 className="h-[15rem] grid justify-center items-center text-orange-300 text-lg ml-4 ">
        Please to reserve this Cabin{" "}
        <Link
          href="/login"
          className="text-blue-800 hover:text-blue-600 border border-gray-400 rounded-md font-bold text-lg p-2"
        >
          login here
        </Link>
      </h2>
    );

  return (
    <div>
      <p className="bg-slate-300 text-gray-600 rounded-md  text-lg font-bold  ml-3 p-3 mb-2">
        Logged in as {session?.user?.name}
      </p>
      <form
        className="grid h-[20rem] gap-4  bg-gray-800 ml-3 p-3"
        action={(data) => {
          return formAction(data), reset();
        }}
      >
        <div className="font-bold mb-4 text-lg">
          <label htmlFor="numGuests" className="mr-3">
            How many guests
          </label>

          <select
            name="numGuests"
            id="numGuests"
            className="transition-all duration-300 ease-in-out bg-slate-300 focus:ring-2 focus:ring-orange-400 focus:outline-none px-2 py-1 rounded text-gray-800"
          >
            {optionEl}
          </select>
        </div>
        <div className="text-lg font-semibold ">
          <label htmlFor="observations" className="mr-4">
            Is there anything we should know
          </label>

          <input
            type="text"
            name="observations"
            id="observations"
            className="transition-all bg-slate-300 duration-300 ease-in-out focus:ring-2 focus:ring-orange-400 focus:outline-none px-2 py-1 rounded text-gray-800"
          />
        </div>
        {range?.from && range?.to ? (
          <div className="grid grid-cols-[1fr_4rem] items-center gap-2 p-3">
            <button
              disabled={pending}
              type="submit"
              className="bg-orange-400  font-bold min-w-[4rem] hover:text-lg transition-all disabled:cursor-not-allowed disabled:bg-orange-200 p-3 rounded-md"
            >
              {pending ? "Reserving..." : `Reserve now`}
            </button>
            {pending && (
              <span className="ml-2 animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-orange-400"></span>
            )}
          </div>
        ) : (
          <h2 className="text-lg text-orange-300">
            Start by selecting your dates
          </h2>
        )}
      </form>
    </div>
  );
}

export default ReservationForm;

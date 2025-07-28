import Link from "next/link";
import Deletereservation from "./Deletereservation";
import EditReservation from "./EditReservation";

import { differenceInDays, isPast } from "date-fns";

function ReservationsList({ reservations }) {
  if (reservations.length < 1)
    return (
      <h2 className="h-screen flex justify-center items-center gap-2 ">
        You have no reservations yet. Check out our
        <Link href="/cabins" className="text-orange-300">
          luxury cabins
        </Link>
      </h2>
    );
  return (
    <div>
      <ul className="">
        {reservations.map((reservation) => (
          <li
            key={reservation.id}
            className="border border-gray-200 py-4 mb-1 p-3 rounded-lg"
          >
            <div>
              <h2 className="font-bold text-orange-500">{`Cabin ${reservation.cabinId}`}</h2>
            </div>
            <div className="text-gray-600 flex justify-between items-center">
              <div>
                <p>{`Check-in: ${new Date(
                  reservation.startDate
                ).toLocaleDateString()}`}</p>
                <p>{`Check-out: ${new Date(
                  reservation.endDate
                ).toLocaleDateString()}`}</p>
                <div className="flex justify-between gap-4 font-medium text-lg">
                  <p>
                    Days in the cabin:{" "}
                    {differenceInDays(
                      new Date(reservation.endDate),
                      new Date(reservation.startDate)
                    )}
                  </p>
                  <p>
                    {reservation.numGuests > 1
                      ? `${reservation.numGuests} Guests`
                      : `${reservation.numGuests} Guest`}
                  </p>
                  <p>
                    Cost:{" "}
                    {reservation.numGuests * reservation.cabinPrice +
                      reservation.extrasPrice}
                  </p>
                </div>
              </div>
              {!isPast(new Date(reservation.endDate)) ? (
                <div className="flex gap-2 justify-center items-center">
                  <Deletereservation id={reservation.id} />
                  <EditReservation id={reservation.id} />
                </div>
              ) : (
                <span>this reservation has passed</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationsList;

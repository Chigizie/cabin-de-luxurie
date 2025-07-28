import EditReservationForm from "@/app/_components/EditReservationForm";

import { getBookingsById, getCabinById } from "@/app/_lib/data-services";

async function page({ params }) {
  const { reservationID } = await params;

  const booking = await getBookingsById(reservationID);

  const cabin = await getCabinById(booking.cabinId);

  const { maxCapacity } = cabin;

  const optionEl = Array.from({ length: maxCapacity }, (_, i) => (
    <option key={i}>{i + 1}</option>
  ));

  return (
    <div>
      <h1 className="text-center font-bold my-3 text-lg">
        Edit reservation {reservationID}
      </h1>
      <EditReservationForm
        booking={booking}
        optionEl={optionEl}
        reservationID={reservationID}
      />
    </div>
  );
}

export default page;

import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { auth } from "@/app/_lib/auth";
import { getBookingsByCabinId, getCabinById } from "@/app/_lib/data-services";

import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  const { cabinsId } = await params;

  const cabin = await getCabinById(cabinsId);

  return {
    title: cabin.name,
  };
}

async function Cabin({ params }) {
  const { cabinsId } = await params;
  const bookedDates = await getBookingsByCabinId(cabinsId);

  const session = await auth();
  const guestId = session?.user.guestId;
  const cabin = await getCabinById(cabinsId);

  const { image, name, id, maxCapacity } = cabin;

  return (
    <div className="grid  items-center justify-center  p-4 h-screen gap-6  ">
      <div>
        <h1 className="text-4xl font-bold">Cabin Details</h1>
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="mt-2 text-lg">Cabin ID: {id}</p>
        <p className="mt-2 text-lg">Max Capacity: {maxCapacity}</p>
        <div className="relative  mt-4 aspect-square">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>
      <div className="flex justify-between">
        <DateSelector bookedDates={bookedDates} />

        <ReservationForm
          maxCapacity={maxCapacity}
          cabin={cabin}
          guestId={guestId}
          session={session}
        />
      </div>
    </div>
  );
}

export default Cabin;

import ReservationsList from "@/app/_components/ReservationsList";
import { auth } from "@/auth";
import { getBookingByGuestId } from "@/app/_lib/data-services";

export const metadata = {
  title: "reservations",
};

async function page() {
  const session = await auth();

  const reservations = await getBookingByGuestId(session.user.guestId);
  if (!reservations) {
    return <div>No reservations found.</div>;
  }
  return (
    <div>
      reservations page
      <ReservationsList reservations={reservations} />
    </div>
  );
}

export default page;

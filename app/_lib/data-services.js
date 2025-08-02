import supabase from "@/app/supabase";
import { eachDayOfInterval } from "date-fns";

export default async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error("Error fetching cabins:", error);
  return cabins;
}

export async function getCabinById(cabinsId) {
  let { data: cabin, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", cabinsId)
    .single();
  if (error) throw new Error("Error fetching cabin:", error);
  return cabin;
}

export async function getBookings() {
  let { data: bookings, error } = await supabase.from("bookings").select("*");
  if (error) throw new Error("Error fetching bookings:", error);
  return bookings;
}

export async function getBookingByGuestId(guestId) {
  let { data: booking, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("guestId", guestId);

  if (error) throw new Error("Error fetching booking:", error);
  return booking;
}

export async function getBookingsById(id) {
  const { error, data } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw new Error("there is an error getting this booking");

  return data;
}

export async function getBookingDatesByCabinId(id) {
  const { error, data } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", id);
  // .limit(1)
  // .single();
  console.log(data);

  if (error) throw new Error(`could not get booking by id ${error.message}`);

  if (data.length < 1) return;

  const bookedDates = data
    .map((date) => {
      return eachDayOfInterval({
        start: new Date(date.startDate),
        end: new Date(date.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getGuest(email) {
  const { error, data } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .limit(1)
    .single();
  if (error) throw new Error("could not get guest");
  return data;
}

export async function createGuest(guestData) {
  const { error, data } = await supabase
    .from("guests")
    .insert([guestData])
    .select();

  if (error) throw new Error("could not create guest");
}

export async function createBookings(bookingData) {
  const { error } = await supabase
    .from("bookings")
    .insert([bookingData])
    .select();

  if (error) throw new Error(`booking couldn't be created${error.message}`);
}

// export async function createGuest(newGuest) {
//   const { data, error } = await supabase.from("guests").insert([newGuest]);

//   if (error) {
//     console.error(error);
//     throw new Error("Guest could not be created");
//   }

//   return data;
// }

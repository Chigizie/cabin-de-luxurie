"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn } from "./auth";
import { signOut } from "./auth";
import { createBookings } from "./data-services";
import { redirect } from "next/navigation";
import supabase from "../supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createBooking(bookingData, currentState, formdata) {
  const session = await auth();
  if (!session)
    throw new Error("you must be logged in to perform this operation");
  const numGuests = Number(formdata?.get("numGuests"));
  const observations = formdata?.get("observations");

  if (!bookingData.startDate || !bookingData.endDate)
    throw new Error("choose your start and end date to book this cabin");
  // alternative to writting formData.get("")
  const object = Object.fromEntries(formdata);

  await createBookings({ ...bookingData, numGuests, observations });
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/thank-you");
}

export async function deleteBookins(id) {
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in to perform this operation");

  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) throw new Error(`cabins couldn't be deleted ${error.message}`);

  revalidatePath("/account/reservations");
}

export async function updateBooking(state, formData) {
  // const updateData = Object.fromEntries(
  //   [...formData.entries()].filter(([key]) => !key.startsWith("$ACTION_ID_"))
  // );

  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations");
  const reservationId = Number(formData.get("reservationId"));

  const updateData = { numGuests, observations };

  const session = await auth();
  if (!session)
    throw new Error("You must be logged in to perform this operation");

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", reservationId)
    .select();

  if (error) throw new Error(`Booking could not be updated ${error.message}`);

  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}

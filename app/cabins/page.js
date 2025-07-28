import CabinLIst from "../_components/CabinLIst";

import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import { Suspense } from "react";
export const metadata = {
  title: "cabins",
};
async function page({ searchParams }) {
  const filter = await searchParams;

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold">Welcome to our Cabins</h1>
        <p className="my-4 text-lg ">
          Escape to comfort and tranquility in our beautiful cabins, nestled in
          scenic surroundings. Each cabin blends rustic charm with modern
          amenities, offering a relaxing retreat for couples, families, or solo
          travelers. Enjoy cozy interiors, fully equipped kitchens, and private
          bathrooms, all designed for your convenience. Large windows showcase
          stunning views, while private decks invite you to unwind outdoors.
          Whether you seek adventure or peaceful relaxation, our cabins are
          close to hiking trails, fishing spots, and outdoor activities. Inside,
          high-speed internet and entertainment options keep you connected. Our
          friendly team ensures a seamless booking experience and maintains high
          standards of cleanliness and safety. Discover the perfect getaway—book
          your cabin today and create lasting memories in nature’s embrace!
        </p>
      </div>
      <Filter filter={filter} />
      <Suspense fallback={<Spinner filter={filter} />}>
        <CabinLIst filter={filter} />
      </Suspense>
    </div>
  );
}

export default page;

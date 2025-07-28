import Image from "next/image";
import Link from "next/link";
import getCabins from "../_lib/data-services";

async function CabinLIst({ filter }) {
  const cabins = (await getCabins()) || [];
  const { id } = cabins;

  let displayCabins;

  if (filter?.size === "medium") {
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity <= 5
    );
  }
  if (filter?.size === "small") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
  }
  if (filter?.size === "large") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 6);
  }
  if (!filter?.size || filter?.size === "all") {
    displayCabins = cabins;
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
      {displayCabins.map((cabin) => {
        return (
          <li key={cabin.id}>
            <Link href={`/cabins/${cabin.id}`}>
              <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="relative  aspect-square">
                  <Image
                    src={cabin.image}
                    alt={cabin.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className=" object-cover rounded-md"
                  />
                </div>
                <h2 className="text-xl font-semibold mt-2">{cabin.name}</h2>
                <p className="text-gray-600">Capacity: {cabin.maxCapacity}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CabinLIst;

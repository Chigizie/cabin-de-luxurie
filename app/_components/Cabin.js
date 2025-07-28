import { getCabinById } from "../_lib/data-services";

async function Cabin({ params }) {
  const { cabinId } = params;

  const { image, name, id, maxCapacity } = await getCabinById(cabinId);

  return (
    <div>
      <h1 className="text-4xl font-bold">{name}</h1>
      <p className="mt-2 text-lg">Cabin ID: {id}</p>
      <p className="mt-2 text-lg">Max Capacity: {maxCapacity}</p>
      <img src={image} alt={name} className="w-64 h-64 object-cover mt-4" />
      <p className="mt-4 text-lg">
        Explore more about this cabin and its features.
      </p>
    </div>
  );
}

export default Cabin;

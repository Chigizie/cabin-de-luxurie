import { getCountries } from "../_lib/services";

async function SelectCountry() {
  const countries = await getCountries();
  return (
    <div className="mb-4">
      <select
        id="country"
        name="country"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-400 "
      >
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCountry;

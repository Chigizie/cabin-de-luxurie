export async function getCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  const countries = await response.json();
  return countries;
}

async function getCountriesWithFlag(params) {
  const countries = await getCountries();
  return countries.map((country) => {
    return country.name.common
      ? `${country.name.common}%${country.flags.svg}`
      : `${country.name.official}%(${country.flags.svg})`;
  });
}

export function dateTimeFormat(date) {
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

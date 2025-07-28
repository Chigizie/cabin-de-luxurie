"use client ";

import { usePathname, useSearchParams } from "next/navigation";

function FilterButton({ handleFilter, filter, children }) {
  const pathname = usePathname();
  const params = useSearchParams();
  const url = ` ${pathname}?${params.toString()}`;
  const isActive = url.includes(children.toLowerCase());
  return (
    <button
      onClick={() => handleFilter(children.toLowerCase())}
      className={`text-blue-700 font-bold ${
        isActive ? "underline text-blue-500" : " "
      } hover:text-blue-500`}
    >
      {children}
    </button>
  );
}

export default FilterButton;

"use client";

import { usePathname, useRouter } from "next/navigation";
import FilterButton from "./FilterButton";

function Filter({ filter }) {
  const pathname = usePathname();
  const searchParams = new URLSearchParams();
  const router = useRouter();

  const handleFilter = (filter) => {
    searchParams.set("size", filter);

    router.replace(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex justify-end gap-4 border-b-2 border-gray-400 mb-3">
      filter
      <FilterButton handleFilter={handleFilter} filter={filter}>
        All
      </FilterButton>
      <FilterButton handleFilter={handleFilter}>Large</FilterButton>
      <FilterButton handleFilter={handleFilter}>Medium</FilterButton>
      <FilterButton handleFilter={handleFilter}>Small</FilterButton>
    </div>
  );
}

export default Filter;

import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex  p-24 bg-[url('/cabin-image/cabin-001.jpg')] bg-cover bg-center h-screen justify-center items-center ">
      <Link href="/cabins" className="text-4xl font-bold ">
        Explore our Cabins
      </Link>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2  hover:bg-gray-600 transition-colors"
    >
      <div className="relative h-12 w-12 aspect-square rounded-full overflow-hidden">
        <Image src="/cabin-image/cabin-001.jpg" alt="logo-img" fill />
      </div>
    </Link>
  );
}

export default Logo;

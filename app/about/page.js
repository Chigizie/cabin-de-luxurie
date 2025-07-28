import Image from "next/image";

export const metadata = {
  title: "About ",
};

function page() {
  return (
    <div className="p-3">
      <h1 className="text-4xl font-bold">About Us</h1>
      <div className="relative aspect-square mt-6 mb-6 w-full max-w-2xl rounded shadow-lg">
        {" "}
        <Image
          fill
          src="/cabin-image/cabin-003.jpg"
          alt="Luxury Cabin"
          className=""
        />
      </div>
      <p className="text-lg leading-relaxed ">
        Welcome to Cabin de Luxurie, your premier destination for luxury cabin
        experiences. Nestled in breathtaking natural landscapes, our company is
        dedicated to providing guests with unforgettable stays that blend
        comfort, elegance, and adventure. Whether you are seeking a peaceful
        retreat, a romantic getaway, or a family vacation, our luxury cabins
        offer the perfect setting to relax, recharge, and reconnect with nature.
        At Cabin de Luxurie, we believe that every guest deserves an exceptional
        experience. Our cabins are thoughtfully designed with high-end
        amenities, stylish interiors, and panoramic views to ensure your stay is
        both comfortable and inspiring. From cozy fireplaces and private hot
        tubs to spacious decks and gourmet kitchens, each cabin is equipped to
        meet the highest standards of luxury and convenience. Our seamless
        booking feature makes planning your escape effortless. With just a few
        clicks, you can browse our selection of cabins, check availability, and
        secure your reservation. Our user-friendly platform provides detailed
        descriptions, high-resolution photos, and transparent pricing, so you
        can make informed decisions with confidence. We also offer personalized
        recommendations and flexible booking options to accommodate your unique
        preferences and schedule. Cabin de Luxurie is committed to
        sustainability and responsible tourism. We work closely with local
        communities and environmental organizations to minimize our impact and
        preserve the beauty of the regions we serve. Our cabins are built with
        eco-friendly materials and practices, and we encourage guests to explore
        the surrounding nature respectfully. Our dedicated team is passionate
        about hospitality and strives to exceed your expectations at every turn.
        From the moment you arrive, you will be greeted with warmth and
        professionalism. We offer concierge services, guided tours, and curated
        experiences to help you make the most of your stay. Whether you wish to
        embark on a hiking adventure, enjoy a private chef dinner, or simply
        unwind by the fire, we are here to make your dreams a reality. Discover
        the difference with Cabin de Luxurie. Experience the perfect blend of
        luxury, tranquility, and adventure in our exclusive cabins. Book your
        next getaway today and create memories that will last a lifetime.
      </p>
    </div>
  );
}

export default page;

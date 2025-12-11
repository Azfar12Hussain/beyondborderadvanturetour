import Image from "next/image";

export default function WhyTravelWithUs() {
  return (
    <section className="w-full bg-white py-16">
      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold tracking-wide">WHY TRAVEL WITH US</h2>
        <p className="text-sky-700 italic mt-2">
          Beyond Border Adventure Tours delivers the world’s great adventures and exceeds expectations on every trip.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 w-full">

        {/* ROW 1 */}
        <div className="relative h-64 md:h-80">
          <Image src="/asset/whytravels/friend.jpeg" alt="" fill className="object-cover" />
        </div>

        <div className="bg-[#0E6E8F] text-white p-8 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-4 text-center">TRAVEL YOUR WAY</h3>
          <p className="text-sm leading-relaxed text-center">
            From flexible itineraries for small groups to handcrafted tours for you and your traveling companions:
            There is a Hunza Adventure Tours adventure just right for you.
          </p>
          <button className="mt-6 mx-auto border px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#0E6E8F] transition">
            START PLANNING
          </button>
        </div>

        <div className="relative h-64 md:h-80">
          <Image src="/asset/whytravels/group.jpeg" alt="" fill className="object-cover" />
        </div>

        <div className="bg-[#4F8E62] text-white p-8 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-center mb-4">AMAZING LOCAL GUIDES</h3>
          <p className="text-sm leading-relaxed text-center">
            Local to the region you’re exploring, our trusted friends have unique perspectives that take you beyond
            the usual to reveal the most authentic places, people and food.
          </p>
          <button className="mt-6 mx-auto border px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#4F8E62] transition">
            MEET OUR GUIDES
          </button>
        </div>

        {/* ROW 2 */}
        <div className="bg-[#8E623C] text-white p-8 flex flex-col justify-center order-2 md:order-none">
          <h3 className="text-lg font-semibold text-center mb-4">TRAVEL WITH FRIENDS</h3>
          <p className="text-sm leading-relaxed text-center">
            The journey is even more fantastic when you travel with people who are equally energetic and active,
            and share a desire to explore life’s greatest adventures.
          </p>
          <button className="mt-6 mx-auto border px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#8E623C] transition">
            LEARN MORE
          </button>
        </div>

        <div className="relative h-64 md:h-80">
          <Image src="/asset/whytravels/yourway.jpeg" alt="" fill className="object-cover" />
        </div>

        <div className="bg-[#0E6E8F] text-white p-8 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-4 text-center">SMALL GROUPS</h3>
          <p className="text-sm leading-relaxed text-center">
            Although the camaraderie of like-minded travelers enhances the journey, groups are limited to 16 guests,
            with 8–10 guests being the average.
          </p>
          <button className="mt-6 mx-auto border px-5 py-2 text-sm font-semibold hover:bg-white hover:text-[#0E6E8F] transition">
            START PLANNING
          </button>
        </div>

        <div className="relative h-64 md:h-80">
          <Image src="/asset/whytravels/local.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}

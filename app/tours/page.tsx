import Image from "next/image";
import Link from "next/link";
import { tours } from "./data";

export default function ToursPage() {
  return (
    <main className="bg-gray-100/50 text-gray-800 dark:text-white min-h-screen">
      {/* HEADER */}
      <header
        className="text-center py-12 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/pakistan-mountains-bg.jpg')" }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 drop-shadow-lg">
          OUR FAVORITE ITINERARIES
        </h1>
      </header>

      {/* TOUR GRID */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tours.map((tour) => (
          <Link key={tour.slug} href={`/tours/${tour.slug}`}>
            <div className="bg-gray-200/80 dark:bg-gray-800/70 shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition cursor-pointer backdrop-blur-sm">
              <div className="relative h-48 w-full">
                <Image src={tour.image} alt={tour.title} fill className="object-cover" />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">⏱️ {tour.duration}</p>
                {tour.reviews !== undefined && (
                  <p className="text-yellow-500 mt-1 text-sm">⭐ {tour.reviews} Reviews</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* BACK TO HOME */}
      <div className="text-center my-12">
        <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

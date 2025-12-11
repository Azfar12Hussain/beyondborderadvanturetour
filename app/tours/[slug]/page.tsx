import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours } from "../data";

interface Props {
  params: { slug: string };
}

// Add tour details here
const tourDetails: Record<string, any> = {
  "nanga-parbat-rupal-face-trek": {
    itinerary: ["Day 1: Arrival in Skardu", "Day 2: Drive to Rupal Village", "Day 3-9: Trekking Nanga Parbat Rupal Face", "Day 10: Return to Skardu"],
    servicesIncluded: ["Transport","Accommodation","Meals","Guide","Camping Equipment"],
    servicesExcluded: ["Flights","Personal Expenses","Tips"],
    gallery: ["/images/nanga1.jpg","/images/nanga2.jpg","/images/nanga3.jpg"],
    faq: [{q:"Best season?",a:"June to September"},{q:"Difficulty?",a:"High"}],
    terms: ["Full payment must be made 30 days before departure.","Cancellation policy applies as per tour rules."],
  },
  "k2-base-camp-trek": {
    itinerary: ["Day 1: Arrival in Skardu", "Day 2-3: Acclimatization and Trek prep", "Day 4-18: Trek to K2 Base Camp", "Day 19-21: Return to Skardu"],
    servicesIncluded: ["Transport","Accommodation","Meals","Guide","Porters"],
    servicesExcluded: ["Flights","Personal Expenses","Tips"],
    gallery: ["/images/k2-1.jpg","/images/k2-2.jpg","/images/k2-3.jpg"],
    faq: [{q:"Best season?",a:"June to August"},{q:"Difficulty?",a:"Extreme"}],
    terms: ["Deposit required at booking.","Cancellation policy applies."],
  },
};

export default function TourPage({ params }: Props) {
  const slug = params.slug; // ✅ works in server component
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) return notFound();

  const details = tourDetails[slug];

  return (
    <main className="bg-white dark:bg-black text-gray-800 dark:text-white min-h-screen">
      <header className="text-center py-12 bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{tour.title}</h1>
        <p className="text-gray-200 mt-2 text-lg">⏱️ {tour.duration}</p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        {/* Itinerary */}
        {details?.itinerary && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <ul className="list-disc list-inside space-y-2">
              {details.itinerary.map((day: string, i: number) => (<li key={i}>{day}</li>))}
            </ul>
          </div>
        )}

        {/* Services Included */}
        {details?.servicesIncluded && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Services Included</h2>
            <ul className="list-disc list-inside space-y-2">
              {details.servicesIncluded.map((item: string, i: number) => (<li key={i}>{item}</li>))}
            </ul>
          </div>
        )}

        {/* Services Excluded */}
        {details?.servicesExcluded && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Services Excluded</h2>
            <ul className="list-disc list-inside space-y-2">
              {details.servicesExcluded.map((item: string, i: number) => (<li key={i}>{item}</li>))}
            </ul>
          </div>
        )}

        {/* Gallery */}
        {details?.gallery && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {details.gallery.map((img: string, i: number) => (
                <div key={i} className="relative h-48 w-full">
                  <Image src={img} alt={`Gallery ${i}`} fill className="object-cover rounded-lg"/>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {details?.faq && (
          <div>
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <ul className="space-y-2">{details.faq.map((q:any,i:number)=>(<li key={i}><strong>{q.q}</strong> - {q.a}</li>))}</ul>
          </div>
        )}

        {/* Terms */}
        {details?.terms && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
            <ul className="list-disc list-inside space-y-2">{details.terms.map((t:string,i:number)=>(<li key={i}>{t}</li>))}</ul>
          </div>
        )}

        {/* Reviews */}
        {tour.reviews !== undefined && (
          <p className="text-yellow-500 text-lg">⭐ {tour.reviews} Reviews</p>
        )}

        {/* Back link */}
        <Link href="/tours" className="text-blue-600 hover:underline mt-6 block">← Back to Tours</Link>
      </section>
    </main>
  );
}

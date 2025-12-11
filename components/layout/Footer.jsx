import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B2444] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* OUR SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              "Tours", "Treks", "Expeditions", "Safaris", "Peak Climbing",
              "Rock Climbing", "Overland Tours", "Honeymoon Tours",
              "Hotel Reservations", "Rent a Car Services", "Charity Tours",
              "Trophy Hunting Tours", "Mountain Biking",
              "Film and Documentary Tours"
            ].map((item, i) => (
              <li key={i} className="hover:text-gray-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              "Visa Requirements", "Travelers Tips", "Booking Conditions",
              "Privacy Policy", "Make a Payment", "Tailor Made Travels",
              "Holiday Types", "Solo Travel", "Meet Our Team",
              "Why Travel with us", "Top Destinations", "Pakistan Travel Guide",
              "Responsible Travel", "Cookie Policy", "Contact Us"
            ].map((item, i) => (
              <li key={i} className="hover:text-gray-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* TOP DESTINATIONS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Top Destinations</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              "Fairy Meadows", "Hunza Valley", "Deosai Plains", "Kalash Valley",
              "Azad Kashmir", "Skardu Valley", "Mohenjodaro", "Swat Valley",
              "Hingol Park", "Kumrat Valley", "Lahore City", "Naleem Valley",
              "Naran Valley", "Chitral Valley", "Ghizer Valley", "Astore Valley"
            ].map((item, i) => (
              <li key={i} className="hover:text-gray-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT WITH US */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Contact With Us</h3>

          {/* ISLAMABAD */}
          <div className="mb-6">
            <p className="flex items-center gap-2 font-semibold text-sm mb-1">
              <FaMapMarkerAlt className="text-yellow-400" /> ISLAMABAD OFFICE:
            </p>
            <p className="text-sm opacity-90">
              Office # 4. 3rd floor AA plaza Jinnah Avenue, Blue Area Islamabad.
            </p>
            <p className="flex items-center gap-2 text-sm mt-2">
              <FaPhone className="text-yellow-400" /> 0092-342596238
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaEnvelope className="text-yellow-400" /> explorehunzavalley@gmail.com
            </p>
          </div>

          {/* HUNZA OFFICE */}
          <div className="mb-6">
            <p className="flex items-center gap-2 font-semibold text-sm mb-1">
              <FaMapMarkerAlt className="text-yellow-400" /> HUNZA OFFICE:
            </p>
            <p className="text-sm opacity-90">
              Gulmit Gojal Upper Hunza Valley Gilgit-Baltistan, Pakistan.
            </p>
            <p className="flex items-center gap-2 text-sm mt-2">
              <FaPhone className="text-yellow-400" /> 00992 – 05813400254
            </p>
          </div>

          {/* SINGAPORE OFFICE */}
          <div>
            <p className="flex items-center gap-2 font-semibold text-sm mb-1">
              <FaMapMarkerAlt className="text-yellow-400" /> SINGAPORE OFFICE:
            </p>
            <p className="text-sm opacity-90">
              Sumang Lane Punggol Singapore.
            </p>
            <p className="flex items-center gap-2 text-sm mt-2">
              <FaEnvelope className="text-yellow-400" /> beyondborderadventuretourspk@gmail.com
            </p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-16 pt-4 text-center text-sm opacity-80">
        © BBAT 2025–2030 – All rights reserved.
      </div>
    </footer>
  );
}

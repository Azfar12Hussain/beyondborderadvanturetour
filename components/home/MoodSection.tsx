import Image from "next/image";

export default function MoodSection() {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#2E5C82] mb-12">
        SO, WHAT ARE YOU IN THE MOOD FOR?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4">
        
        {/* 1 ─ IMAGE */}
        <MoodImage img="/asset/mood/trek.jpeg" />

        {/* 2 ─ TEXT BLOCK */}
        <MoodText
          title="CULTURE ENCOUNTERS"
          desc="Our small group cultural tours carefully uncover, gently explore, and quietly meander through some of the most exceptional and unspoiled places in the world."
          btn="ENRICH YOURSELF"
          color="#0F597A"
        />

        {/* 3 ─ IMAGE */}
        <MoodImage img="/asset/mood/expedition1.jpeg" />

        {/* 4 ─ TEXT BLOCK */}
        <MoodText
          title="NATURE TOURS & SAFARIS"
          desc="Hunza Adventure’s active nature tours and safaris immerse you in a world where ‘all good things are wild and free.’"
          btn="FIND YOUR WILD SIDE"
          color="#E78960"
        />

        {/* 5 ─ TEXT BLOCK */}
        <MoodText
          title="TREKKING"
          desc="Experience the rewards of hiking through hidden valleys, over mountain passes, and into seldom-traveled areas where foreigners rarely visit."
          btn="BE AN EXPLORER"
          color="#6C4A77"
        />

        {/* 6 ─ IMAGE */}
        <MoodImage img="/asset/mood/culture.jpeg" />

        {/* 7 ─ TEXT BLOCK */}
        <MoodText
          title="EXPEDITIONS"
          desc="Come into the frozen world of the world’s highest peaks, land of the gigantic eight thousanders. This is the paradise that is whispered around the world."
          btn="FIND YOUR PATH"
          color="#4A6987"
        />

        {/* 8 ─ IMAGE */}
        <MoodImage img="/asset/mood/nature.jpeg" />
      </div>
    </section>
  );
}

function MoodImage({ img }: any) {
  return (
    <div className="relative h-64 md:h-80 w-full">
      <Image src={img} alt="mood image" fill className="object-cover" />
    </div>
  );
}

function MoodText({ title, desc, btn, color }: any) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center p-10"
      style={{ backgroundColor: color }}
    >
      <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
      <p className="text-white text-sm mb-6">{desc}</p>

      <button className="border border-white px-5 py-2 text-white text-sm hover:bg-white hover:text-black transition">
        {btn}
      </button>
    </div>
  );
}

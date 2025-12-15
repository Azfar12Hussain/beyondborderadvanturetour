"use client";

export default function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-sm text-gray-700 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
        
        {/* Left side */}
        <div className="flex items-center gap-6">
          <p>📞 +92-3135235207</p>
          <p>📧 beyondborderadventuretours.com@gmail.com</p>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <p>⭐ 5 Years of Excellence</p>
          <p>✔ Corporate Unique Identification No. 0315275</p>
        </div>

      </div>
    </div>
  );
}

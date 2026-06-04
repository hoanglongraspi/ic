export default function HotelPage() {
  const bookingUrl = "https://group.hiltongardeninn.com/jen4qr";
  const hotelMapUrl =
    "https://www.google.com/maps/place/Hilton+Garden+Inn+Buffalo+Downtown/@42.8861051,-78.8740023,17z/data=!4m9!3m8!1s0x89d31248f4a50a2d:0x4ebbf6168ff66b79!5m2!4m1!1i2!8m2!3d42.8861051!4d-78.8740023!16s%2Fg%2F11bbx073ds";
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Hilton+Garden+Inn+Buffalo+Downtown,+Buffalo,+NY&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Hotel Information
        </h1>

        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Hilton Garden Inn Buffalo Downtown
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <img
                src="/hilton-buffalo.jpg"
                alt="Hilton Garden Inn Buffalo Downtown"
                className="w-full h-auto rounded border border-gray-200"
              />
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  For hotel accommodations, we recommend staying at the{" "}
                  <span className="font-semibold">
                    Hilton Garden Inn Buffalo Downtown
                  </span>
                  , which is approximately a 20-minute walk from the conference
                  venue. We have arranged a special discounted rate for ICIBM
                  2026 attendees.
                </p>
                <p className="leading-relaxed">
                  Please note that rooms available at this discounted rate are
                  limited. If you have any special needs or are unable to book a
                  room using the conference rate, please contact us at{" "}
                  <a
                    href="mailto:icibm.common@gmail.com"
                    className="text-[#005bbb] hover:underline"
                  >
                    icibm.common@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#005bbb] p-5 rounded mb-6">
              <h3 className="font-bold text-gray-800 mb-2">
                Special Conference Room Rate
              </h3>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">$149 + tax and fees</span> — 2
                Queen or King
              </p>
              <p className="text-gray-700">
                Reservation details: please use this{" "}
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#005bbb] font-semibold hover:underline"
                >
                  Special Link
                </a>{" "}
                to make a reservation.
              </p>
            </div>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#005bbb] text-white font-semibold px-6 py-3 rounded hover:bg-[#004a99] transition-colors"
            >
              Book Your Room
            </a>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Map and Directions
            </h2>
            <div className="aspect-video w-full rounded overflow-hidden border border-gray-200 mb-4">
              <iframe
                title="Hilton Garden Inn Buffalo Downtown Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={hotelMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005bbb] hover:underline font-semibold"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

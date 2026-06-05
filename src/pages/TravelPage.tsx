export default function TravelPage() {
  const bookingUrl = "https://group.hiltongardeninn.com/jen4qr";
  const hotelMapUrl =
    "https://www.google.com/maps/place/Hilton+Garden+Inn+Buffalo+Downtown/@42.8861051,-78.8740023,17z/data=!4m9!3m8!1s0x89d31248f4a50a2d:0x4ebbf6168ff66b79!5m2!4m1!1i2!8m2!3d42.8861051!4d-78.8740023!16s%2Fg%2F11bbx073ds";
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Hilton+Garden+Inn+Buffalo+Downtown,+Buffalo,+NY&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const transitDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&origin=Hilton+Garden+Inn+Buffalo+Downtown,+Buffalo,+NY&destination=Jacobs+School+of+Medicine+and+Biomedical+Sciences,+955+Main+St,+Buffalo,+NY+14203&travelmode=transit";
  const walkingDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&origin=Hilton+Garden+Inn+Buffalo+Downtown,+Buffalo,+NY&destination=Jacobs+School+of+Medicine+and+Biomedical+Sciences,+955+Main+St,+Buffalo,+NY+14203&travelmode=walking";
  const transitEmbedUrl =
    "https://maps.google.com/maps?saddr=Hilton+Garden+Inn+Buffalo+Downtown,+Buffalo,+NY&daddr=Jacobs+School+of+Medicine+and+Biomedical+Sciences,+955+Main+St,+Buffalo,+NY+14203&dirflg=r&output=embed";
  const walkingEmbedUrl =
    "https://maps.google.com/maps?saddr=Hilton+Garden+Inn+Buffalo+Downtown,+Buffalo,+NY&daddr=Jacobs+School+of+Medicine+and+Biomedical+Sciences,+955+Main+St,+Buffalo,+NY+14203&dirflg=w&output=embed";

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Travel</h1>

        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Conference Venue
            </h2>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <img
                src="/jacobs.jpg"
                alt="Jacobs School of Medicine and Biomedical Sciences"
                className="w-full h-auto rounded border border-gray-200"
              />
              <div className="text-gray-700 space-y-2">
                <p className="font-semibold text-lg">
                  Jacobs School of Medicine and Biomedical Sciences
                </p>
                <p>University at Buffalo</p>
                <p>955 Main Street</p>
                <p>Buffalo, NY 14203-1121</p>
              </div>
            </div>
          </div>

          {/* <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Travel Awards
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A limited number of travel awards are available for ICIBM 2026. To
              apply, download the official application form, complete it, and
              follow the instructions on the form.
            </p>
            <p>
              <a
                href="/ICIBM-2026-Travel-Award-Application-Form.docx"
                className="text-[#005bbb] hover:underline font-semibold"
                download
              >
                ICIBM 2026 Travel Award Application Form (Word)
              </a>
            </p>
          </div> */}

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Hotel Information
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Hilton Garden Inn Buffalo Downtown
            </h3>

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
              <h4 className="font-bold text-gray-800 mb-2">
                Special Conference Room Rate
              </h4>
              <p className="text-red-600 mb-3">
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
              className="inline-block bg-[#005bbb] text-white font-semibold px-6 py-3 rounded hover:bg-[#004a99] transition-colors mb-8"
            >
              Book Your Room
            </a>

            <h3 className="text-xl font-bold text-gray-800 mb-4 mt-4">
              Map and Directions
            </h3>
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

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Getting to Buffalo
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">By Air</h3>
                <p>
                  Buffalo Niagara International Airport (BUF) is located
                  approximately 15 miles from the University at Buffalo downtown
                  campus. The airport offers numerous daily flights from major
                  cities across North America.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">By Car</h3>
                <p>
                  Buffalo is easily accessible via major highways including I-90
                  (New York State Thruway) and I-190.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">By Train</h3>
                <p>
                  Amtrak provides service to Buffalo-Depew Station and
                  Buffalo-Exchange Street Station.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Travel from the Hotel to the Conference Venue
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The conference venue is the Jacobs School of Medicine and
              Biomedical Sciences building, located on the Buffalo Niagara
              Medical Campus.
            </p>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">By Metro Rail</h3>
                <p className="leading-relaxed mb-3">
                  The hotel is within walking distance of the Lafayette Square
                  Station. From there, attendees can take the Metro Rail toward
                  the University Station and get off at Allen/Medical Campus
                  Station. The venue is a short walk from the station.
                </p>
                <div className="aspect-video w-full rounded overflow-hidden border border-gray-200 mb-3">
                  <iframe
                    title="Metro Rail directions from Hilton Garden Inn to Jacobs School of Medicine"
                    src={transitEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={transitDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  Open Metro Rail directions in Google Maps →
                </a>
              </div>

              <div>
                <h3 className="font-bold mb-2">By Walking</h3>
                <p className="leading-relaxed mb-3">
                  The Jacobs School of Medicine and Biomedical Sciences
                  building is approximately a 20-minute walk from the Hilton
                  Garden Inn Buffalo Downtown. Attendees may use the Google
                  Maps link below for walking directions from the hotel to the
                  venue.
                </p>
                <div className="aspect-video w-full rounded overflow-hidden border border-gray-200 mb-3">
                  <iframe
                    title="Walking directions from Hilton Garden Inn to Jacobs School of Medicine"
                    src={walkingEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={walkingDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  Open walking directions in Google Maps →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Local Transportation
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                • Taxi and rideshare services (Uber, Lyft) are readily available
              </p>
              <p>• NFTA Metro Rail and bus system serves the Buffalo area</p>
              <p>
                • Rental cars available at the airport and throughout the city
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

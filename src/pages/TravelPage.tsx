import { Link } from "react-router-dom";

export default function TravelPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Travel</h1>

        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Conference Venue
            </h2>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold text-lg">Jacobs School of Medicine and Biomedical Sciences</p>
              <p>University at Buffalo</p>
              <p>955 Main Street</p>
              <p>Buffalo, NY 14203-1121</p>
            </div>
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
              Accommodation
            </h2>
            <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
              <Link to="/hotel" className="block">
                <img
                  src="/hilton-buffalo.jpg"
                  alt="Hilton Garden Inn Buffalo Downtown"
                  className="w-full h-auto rounded border border-gray-200 hover:opacity-90 transition-opacity"
                />
              </Link>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-bold text-lg text-gray-800">
                  Hilton Garden Inn Buffalo Downtown
                </h3>
                <p className="leading-relaxed">
                  We recommend the Hilton Garden Inn Buffalo Downtown, located
                  approximately a 20-minute walk from the conference venue. A
                  special discounted rate of{" "}
                  <span className="font-semibold">$149 + tax</span> has been
                  arranged for ICIBM 2026 attendees.
                </p>
                <Link
                  to="/hotel"
                  className="inline-block bg-[#005bbb] text-white font-semibold px-5 py-2 rounded hover:bg-[#004a99] transition-colors"
                >
                  View Hotel Details →
                </Link>
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

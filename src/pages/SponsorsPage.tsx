export default function SponsorsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Sponsors</h1>

        <div className="space-y-8">

          {/* Platinum */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Platinum Sponsors
            </h2>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://www.admerahealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded p-6 hover:border-[#005bbb] transition-colors"
                style={{ minWidth: 200, maxWidth: 300 }}
              >
                <img
                  src="/plat.webp"
                  alt="Admera Health"
                  className="max-h-20 max-w-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Silver */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Silver Sponsors
            </h2>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://spj.science.org/journal/csbj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded p-6 hover:border-[#005bbb] transition-colors"
                style={{ minWidth: 200, maxWidth: 340 }}
              >
                <img
                  src="/silver.png"
                  alt="Computational and Structural Biotechnology Journal"
                  className="max-h-20 max-w-full object-contain"
                />
              </a>
              <a
                href="https://singleron.bio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded p-6 hover:border-[#005bbb] transition-colors"
                style={{ minWidth: 200, maxWidth: 300 }}
              >
                <img
                  src="/singleron.png"
                  alt="Singleron"
                  className="max-h-20 max-w-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* CSBJ note */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Travel Awards
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <a
                href="https://spj.science.org/journal/csbj"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#005bbb] hover:underline"
              >
                Computational and Structural Biotechnology Journal (CSBJ)
              </a>{" "}
              is pleased to sponsor <span className="font-semibold">4 travel awards</span> to ICIBM 2026. Special announcements will be made during the notification and award ceremony.
            </p>
            <p className="text-gray-700 mt-4">
              <a
                href="/ICIBM-2026-Travel-Award-Application-Form.docx"
                className="font-semibold text-[#005bbb] hover:underline"
                download
              >
                Download the ICIBM 2026 Travel Award application form
              </a>
              {" "}
              (also linked from the{" "}
              <a href="/travel" className="text-[#005bbb] hover:underline font-semibold">
                Travel
              </a>{" "}
              page).
            </p>
          </div>

          {/* Interested in sponsoring */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Interested in Sponsoring?
            </h2>
            <p className="text-gray-700">
              For sponsorship opportunities, please contact us at{" "}
              <a
                href="mailto:icibm.common@gmail.com"
                className="text-[#005bbb] hover:underline font-semibold"
              >
                icibm.common@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

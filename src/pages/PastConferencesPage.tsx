export default function PastConferencesPage() {
  const pastConferences = [
    {
      year: 2025,
      location: "Columbus, Ohio",
      url: "https://icibm2025.iaibm.org/",
    },
    {
      year: 2024,
      location: "Houston, Texas",
      url: "https://icibm2024.iaibm.org/",
    },
    {
      year: 2023,
      location: "Tampa, Florida",
      url: "https://icibm2023.iaibm.org/",
    },
    {
      year: 2022,
      location: "Philadelphia, Pennsylvania",
      url: "https://icibm2022.iaibm.org/",
    },
    {
      year: 2021,
      location: "Philadelphia, Pennsylvania",
      url: "https://icibm2021.iaibm.org/",
    },
    {
      year: 2020,
      location: "Virtual",
      url: "https://icibm2020.iaibm.org/",
    },
    {
      year: 2019,
      location: "Columbus, Ohio",
      url: "https://icibm2019.iaibm.org/",
    },
    {
      year: 2018,
      location: "Los Angeles, California",
      url: "https://icibm2018.iaibm.org/",
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Past Conferences
        </h1>

        <div className="space-y-4">
          {pastConferences.map((conf) => (
            <a
              key={conf.year}
              href={conf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded p-6 block hover:shadow-lg hover:border-[#005bbb] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-bold text-[#005bbb]">
                    ICIBM {conf.year}
                  </h2>
                  <p className="text-gray-600">{conf.location}</p>
                </div>
                <span className="text-sm text-gray-500 hover:text-[#005bbb]">
                  {conf.url} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


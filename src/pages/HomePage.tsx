import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { getAnnouncements } from "../lib/firebase";
import type { Announcement } from "../lib/firebase";

export default function HomePage() {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoadingAnnouncements, setIsLoadingAnnouncements] = useState(true);

  useEffect(() => {
    loadAnnouncements();
  }, []);

  const loadAnnouncements = async () => {
    try {
      const data = await getAnnouncements();
      setAnnouncements(data);
    } catch (error) {
      console.error("Error loading announcements:", error);
    } finally {
      setIsLoadingAnnouncements(false);
    }
  };

  const keynoteSpeakers = [
    {
      name: "Gary Bader, Ph.D.",
      title: "Professor, Department of Molecular Genetics; Ontario Research Chair in Biomarkers of Disease",
      institution: "University of Toronto",
      image: "/gary01_cropped.webp",
      homepage: "https://thedonnellycentre.utoronto.ca/faculty/gary-bader",
    },
    {
      name: "James Cimino, M.D.",
      title: "Chairperson and Professor, Department of Biomedical Informatics & Data Science",
      institution: "University of Alabama at Birmingham",
      image: "james.svg",
      homepage: "https://scholars.uab.edu/2932-james-cimino",
    },
    {
      name: "Mingyao Li, Ph.D.",
      title: "Professor of Biostatistics in Biostatistics and Epidemiology",
      institution: "University of Pennsylvania",
      image: "/li.jpg",
      homepage: "https://www.med.upenn.edu/apps/faculty/index.php/g275/p8122973",
    },
    {
      name: "Ting Wang, Ph.D.",
      title: "Distinguished Professor of Medicine and Head, Department of Genetics",
      institution: "Washington University in St. Louis",
      image: "/wang.svg",
      homepage: "https://genetics.wustl.edu/people/ting-wang-phdthe-sanford-and-karen-loewentheil-distinguished-professor-of-medicine-and-head-department-of-genetics/",
    },
  ];

  const eminentScholarSpeakers = [
    {
      name: "Han Liang, Ph.D.",
      title: "Barnhart Family Distinguished Professor in Targeted Therapies; Interim Chair, Department of Bioinformatics and Computational Biology",
      institution: "The University of Texas MD Anderson Cancer Center",
      image: "/Drliang.jpg",
    },
    {
      name: "Chongzhi Zang, Ph.D.",
      title: "Associate Professor of Genome Sciences; Director of Computational Genomics",
      institution: "UVA Comprehensive Cancer Center, University of Virginia",
      image: "/DrZang.png",
    },
    {
      name: "Rong Xu, Ph.D.",
      title: "Professor of Biomedical Informatics; Director, Center for AI in Drug Discovery",
      institution: "Case Western Reserve University; Case Comprehensive Cancer Center",
      image: "/Drrongxu.png",
    },
    {
      name: "Yun Li, Ph.D.",
      title: "Professor of Genetics; Professor of Biostatistics",
      institution: "University of North Carolina at Chapel Hill",
      image: "/Dryunli.png",
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-r from-[#005bbb] to-[#003d7a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Niagara-5.jpg"
            alt="University at Buffalo Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
          
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 text-center">
          <span className="inline-block px-10 py-5 bg-white/10 rounded-lg text-5xl font-bold mb-10">
          ICIBM 2026
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            14<sup>th</sup> International Conference on
            <br />
            Intelligent Biology and Medicine
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            ICIBM 2026 brings together leading scholars and experts from AI,
            bioinformatics, computational biology, systems biology,
            computational medicine, and experimental biomedical research. The
            conference provides a collegial and stimulating environment that
            fosters in-depth discussions, collaborations, and networking among
            participants from academia, industry, and government.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded">
              <div className="text-2xl md:text-3xl font-bold">
                August 2–5, 2026
              </div>
              <div className="text-sm">Conference Dates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded">
              <div className="text-2xl md:text-3xl font-bold">Buffalo, NY</div>
              <div className="text-sm">University at Buffalo</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/submission")}
              className="px-8 py-3 bg-white text-[#005bbb] font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              Submit Paper
            </button>
            <button
              onClick={() => navigate("/registration")}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      {!isLoadingAnnouncements && announcements.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Latest Announcements
              </h2>
              <p className="text-lg text-gray-600">
                Stay updated with the latest conference news
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {announcements.slice(0, 5).map((announcement) => (
                <div
                  key={announcement.id}
                  className="bg-white border border-gray-200 rounded p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#005bbb] rounded-full flex items-center justify-center">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">
                        {announcement.title}
                      </h3>
                      <p className="text-gray-600">{announcement.content}</p>
                      <p className="text-sm text-[#005bbb] font-semibold mt-3">
                        {announcement.createdAt?.toDate().toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Keynote Speakers
            </h2>
            <p className="text-lg text-gray-600">
              World-renowned experts at the forefront of biomedical research
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {keynoteSpeakers.map((speaker, idx) => (
              <a
                key={idx}
                href={speaker.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow w-full sm:w-64 lg:w-72 flex flex-col"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 flex-1">{speaker.title}</p>
                  <p className="text-sm font-semibold text-[#005bbb] mt-auto">
                    {speaker.institution}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Eminent Scholar Award Speakers
            </h2>
            <p className="text-lg text-gray-600">
              Distinguished scholars recognized for their contributions to intelligent biology and medicine
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {eminentScholarSpeakers.map((speaker, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow w-full sm:w-64 lg:w-72 flex flex-col"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 flex-1">{speaker.title}</p>
                  <p className="text-sm font-semibold text-[#005bbb] mt-auto">
                    {speaker.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Call for Papers
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We invite submissions presenting original advances in <br></br>
            bioinformatics, genomics, AI, systems biology, computational biology, and biomedical informatics.
          </p>
          <button
            onClick={() => navigate("/submission")}
            className="px-8 py-3 bg-[#005bbb] text-white font-semibold rounded hover:bg-[#003d7a] transition-colors"
          >
            View Submission Guidelines
          </button>
        </div>
      </section>
    </>
  );
}

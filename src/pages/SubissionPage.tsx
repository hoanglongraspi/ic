export default function SubmissionPage() {
  const topicsBioinformatics = [
    "Genomics and genetics/epigenetics, including integrative & functional genomics, genome evolution",
    "Next-generation sequencing data analysis, 3D genome",
    "Big data science including storage, analysis, modeling, visualization, and cloud",
    "Precision medicine, translational bioinformatics",
    "Drug discovery, design, and re-purposing",
    "Proteomics, and protein structure prediction, function, and interactions",
    "Single-cell sequencing data analysis",
    "Spatial omics data analysis",
    "Microbiome and metagenomics",
    "Multi-dimensional omics data integration",
  ];

  const topicsAI = [
    "Artificial intelligence, machine learning, deep learning, data mining, knowledge discovery",
    "Large language model, foundation model, and computer vision in biomedical",
    "Natural language processing, literature mining, semantic ontology, and health informatics",
    "Evolutionary computing, swarm intelligence / optimization, ensemble methods",
    "Artificial life and artificial immune system",
    "Biomedical image analysis and processing",
    "Digital health and wearable devices",
  ];

  const topicsSystemsBiology = [
    "Modeling and simulation of biological processes, pathways, networks, and interactomes",
    "Modeling of cellular and multi-cellular interaction systems",
    "Synthetic biological systems",
    "Metabolomics, microbiome, and lipidomics",
    "Self-organization in living systems (cells, organisms, swarms, ecosystems, etc.)",
  ];

  const topicsBiomedical = [
    "Cohort discovery, EHR-based phenotyping, predictive modeling",
    "Data quality assessment or validation",
    "Clinical decision support solutions",
    "Informatics to address disparities in health and health care",
    "Interoperability (e.g., ontology, terminology, standards, and others)",
    "Machine learning for clinical applications, genome, and phenome analysis/associations",
    "Mobile health and wearable devices",
    "Human-computer interaction and human factors",
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Submission</h1>

        <div className="bg-blue-50 border-l-4 border-[#005bbb] p-6 rounded mb-8">
          <p className="text-gray-700 text-lg">
            We invite you to submit papers and abstracts presenting original,
            unpublished work that describes recent advances in all areas of
            bioinformatics, genomics, AI, systems biology, computational biology, and
            biomedical informatics.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Bioinformatics */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Bioinformatics and Computational Biology
            </h3>
            <ul className="space-y-2">
              {topicsBioinformatics.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI and Machine Learning */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Artificial Intelligence and Machine Learning
            </h3>
            <ul className="space-y-2">
              {topicsAI.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Systems Biology */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Systems Biology
            </h3>
            <ul className="space-y-2">
              {topicsSystemsBiology.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Biomedical Informatics */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Biomedical Informatics
            </h3>
            <ul className="space-y-2">
              {topicsBiomedical.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Paper Submission */}
        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Paper Submission and Publication
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Prospective authors are invited to submit original, unpublished
                work to ICIBM 2026. Selected papers from registered participants
                will be recommended for publication in special issues of{" "}
                <strong>Briefings in Bioinformatics</strong>,{" "}
                <strong>Cancers</strong>,{" "}
                <strong>Computational and Structural Biotechnology Journal</strong>,{" "}
                <strong>Frontiers in Genetics</strong>, and{" "}
                <strong>Genes</strong>.
              </p>
              <p>
                Please submit your manuscript to{" "}
                <a
                  href="https://easychair.org/cfp/ICIBM2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  EasyChair conference management system
                </a>
                .
              </p>

              <p>
                To accommodate high submission volume, submissions may also be
                accepted via email at{" "}
                <a
                  href="mailto:icibm.common@gmail.com"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  icibm.common@gmail.com
                </a>
                .
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Submission and Review Process
              </h3>
              <p>
                Authors are encouraged to consider the journal special issues when
                preparing their manuscripts. Since ICIBM 2026 collaborates with
                multiple journals, you may tailor your manuscript according to
                the aims and scope of your preferred journal.
              </p>
              <p>
                <strong>Please note:</strong> There is <strong>no strict manuscript formatting requirement </strong>
                at the time of submission to ICIBM 2026. However, if your paper
                is selected for journal recommendation, you will be asked to format
                it according to the target journal&apos;s submission guidelines
                during the journal review stage.
              </p>
              <p>The review process includes two stages:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Conference Review:</strong> All submitted manuscripts
                  will undergo peer review by the ICIBM 2026 Program Committee.
                  Selected papers will be invited for oral presentation at the
                  conference.
                </li>
                <li>
                  <strong>Journal Review:</strong> Accepted papers will be
                  recommended for publication in the special issues of partner
                  journals. Final decisions will be made following each
                  journal&apos;s independent peer review process and formatting
                  requirements.
                </li>
              </ul>
              <p className="mt-4">
                We look forward to receiving your submissions and thank you for
                contributing to ICIBM 2026.
              </p>
            </div>
          </div>

          {/* Abstract Submission */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Abstract Submission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Conference participants are invited to submit abstracts to ICIBM
                2026 describing recent advances in bioinformatics and
                computational biology, artificial intelligence and machine
                learning, systems biology, biomedical informatics, and other
                related fields.
              </p>
              <p>
                Abstracts must be prepared using the official conference{" "}
                <a
                  href="/abstract_template.docx"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  Abstract Template
                </a>
                . The abstract body should not exceed 400 words. We welcome
                submissions reporting original research, whether previously
                published or unpublished. Selected abstracts will be invited for
                oral presentation, and others will be presented in a poster
                session.
              </p>
              <p className="bg-blue-50 border-l-4 border-[#005bbb] p-4 rounded">
                Please submit your abstract directly to{" "}
                <a
                  href="mailto:icibm2026.abstract@gmail.com"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  icibm2026.abstract@gmail.com
                </a>
                . In the email subject line, state:{" "}
                <strong>ICIBM 2026: Abstract submission</strong>.
              </p>
            </div>
          </div>

          {/* Future Scientist in AI Session */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Future Scientist in AI Session Abstract Submission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Future Scientist in AI Session, a recurring highlight of
                ICIBM, aims to encourage and showcase outstanding research by
                high school (10th grade or above preferred) and undergraduate
                students who have conducted significant research projects in
                fields aligned with ICIBM. This session provides a unique
                platform for young scientists to present their work to an
                international audience of experts and peers.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Submission Details
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Applicants must be current high school (preferably 10th grade
                  or above) or undergraduate students.
                </li>
                <li>
                  Each applicant should have led a research project or gained
                  substantial research experience relevant to ICIBM&apos;s
                  thematic areas.
                </li>
                <li>
                  We will select approximately 15–20 oral presentations and
                  15–20 posters.
                </li>
                <li>
                  The oral presentations will be 10 minutes each and should
                  showcase a complete research project primarily conducted by the
                  student speaker.
                </li>
              </ul>

              <p className="mt-4">
                We are proud to see that many of our previous presenters have
                gone on to pursue advanced research opportunities and academic
                careers in related fields.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Abstract Submission
              </h3>
              <p>
                High School and College level participants are invited to submit
                abstracts formatted using the abstract template available for
                download{" "}
                <a
                  href="/abstract_template.docx"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  here
                </a>
                . Abstracts should be no more than 400 words. A few questions
                about the background of the research and a reference letter are
                required for Future Scientist in AI Session applications.
              </p>
              <p className="bg-blue-50 border-l-4 border-[#005bbb] p-4 rounded">
                Please submit your abstract to{" "}
                <a
                  href="mailto:icibm.futurescientist@gmail.com"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  icibm.futurescientist@gmail.com
                </a>{" "}
                by the deadline <strong>June 15, 2026</strong>. Please make sure
                to include{" "}
                <strong>&quot;Future Scientist in AI Session&quot;</strong> in
                the title of the submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

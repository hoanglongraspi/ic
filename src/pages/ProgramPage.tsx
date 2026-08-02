export default function ProgramPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Program</h1>

        <div className="bg-blue-50 border-l-4 border-[#005bbb] p-6 rounded mb-8 text-blue-800 space-y-4">
          <p>
            The program at a glance (updated on 08/01/2026) can be downloaded from{" "}
            <a
              href="/ICIBM_2026_Program_at_a_Glance.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-blue-900"
            >
              here
            </a>
            .
          </p>
          <p>
            The ICIBM 2026 Program Schedule (updated on 08/01/2026) can be downloaded from{" "}
            <a
              href="/ICIBM2026_Program_Schedule.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-blue-900"
            >
              here
            </a>
            .
          </p>
          <p>
            The ICIBM 2026 Program Book (updated on 08/01/2026) can be downloaded from{" "}
            <a
              href="/ICIBM2026_Program_Book.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-blue-900"
            >
              here
            </a>
            .
          </p>
          {/* <p>
            As we are approaching ICIBM 2026, we are pleased to announce that the draft Program at a Glance (PDF) is now available. The full program will be released soon.
          </p>
          <p>
            While we do not expect major changes to the program, the schedule remains subject to minor updates before the conference. If you have any difficulty presenting on your assigned day or during your assigned session, please contact the Workshop Chairs or the organizing committee as soon as possible so that we can review the situation.
          </p> */}
          <p>
            Additional information, including detailed instructions for preparing oral and poster presentations, will be sent soon and update here. Regular oral presentations are scheduled for <strong>20 minutes total, including Q&A</strong>, and flash talks are scheduled for <strong>10 minutes total</strong>. Due to the tight program schedule, we kindly ask all presenters to keep their presentations within the assigned time limits - no exception. For the speakers of workshops, please also contact your workshop chairs for specific plan and requirements.
          </p>
          <p>
            If you have any questions, please contact either Workshop Chairs, or us (<a href="mailto:icibm.common@gmail.com" className="underline">icibm.common@gmail.com</a>, <a href="mailto:qsong1@ufl.edu" className="underline">qsong1@ufl.edu</a>, and <a href="mailto:lli59@buffalo.edu" className="underline">lli59@buffalo.edu</a>).
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Conference Schedule Overview
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              The conference will take place over four days from August 2-5,
              2026, featuring keynote presentations, parallel sessions,
              workshops, and poster sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Register for ICIBM 2026
        </h1>

        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <p className="text-gray-700 leading-relaxed">
              ICIBM 2026 is the official conference organized by the{" "}
              <span className="font-semibold">
                International Association for Intelligent Biology and Medicine
                (IAIBM)
              </span>
              . IAIBM is a non-profit organization founded in 2018 to promote
              the intelligent biology and medical science (EIN: 82-4147182).
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Registration Fees
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 font-bold text-gray-800">
                      Registration Package
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-bold text-gray-800">
                      Early Registration
                      <div className="text-xs font-normal text-gray-600 mt-1">
                        June 4 – July 10, 2026
                      </div>
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-bold text-gray-800">
                      Standard Registration
                      <div className="text-xs font-normal text-gray-600 mt-1">
                        July 11 – August 5, 2026
                      </div>
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-bold text-gray-800">
                      Registration Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      Regular Registration <sup>*</sup>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      US $600
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      US $700
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      <a
                        href="https://icibm.eventsmart.com/events/registration-2026/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#005bbb] text-white font-semibold px-4 py-2 rounded hover:bg-[#004a99] transition-colors text-sm"
                      >
                        Register →
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      Student Registration <sup>**</sup>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      US $450
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      US $500
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      <a
                        href="https://icibm.eventsmart.com/events/registration-2026/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#005bbb] text-white font-semibold px-4 py-2 rounded hover:bg-[#004a99] transition-colors text-sm"
                      >
                        Register →
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mt-6">
              You may find Registration Guidelines{" "}
              <a
                href="https://icibm2025.iaibm.org/Registration_files/Registration_guideline_ICIBM%202025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005bbb] hover:underline font-semibold"
              >
                here
              </a>
              .
            </p>

            <div className="mt-6 space-y-4 text-sm text-gray-700">
              <p>
                <sup className="font-bold">*</sup> The regular registration fee
                includes all seminars, workshops/tutorials, a poster session,
                and scheduled conference meals and refreshment breaks. The
                registration fee also includes a free IAIBM regular membership
                ($100 value) for one year.
              </p>
              <p>
                <sup className="font-bold">**</sup> The student registration
                fee includes all seminars, workshops/tutorials, a poster
                session, and scheduled conference meals and refreshment
                breaks. Student registration is for trainee only, and ID is
                required during check-in. The registration fee also includes a
                free IAIBM student membership ($25 value) for one year.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Cancellation Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Request for registration cancellation must be made in writing and
              sent to:
            </p>
            <p className="text-gray-700 mb-6">
              Email:{" "}
              <a
                href="mailto:icibm.common@gmail.com"
                className="text-[#005bbb] hover:underline font-semibold"
              >
                icibm.common@gmail.com
              </a>
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Refund Policy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We do not encourage the cancellation of your registration.
              However, due to unexpected reasons, if you need to cancel your
              registration, please include a copy of your registration payment
              receipt with your request. All refunds will be processed and
              mailed after the ICIBM 2026. A{" "}
              <span className="font-semibold">$50.00 processing fee</span> will
              be deducted from the paid registration fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

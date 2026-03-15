export default function ProgramCommitteePage() {
  const members = [
    { first: "Yu", last: "Xue", affiliation: "Huazhong University of Science and Technology" },
    { first: "Xiaohui", last: "Yao", affiliation: "Harbin Engineering University" },
    { first: "Rui", last: "Yin", affiliation: "University of Florida" },
    { first: "Lianbo", last: "Yu", affiliation: "The Ohio State University" },
    { first: "Shiyang", last: "Zhang", affiliation: "Columbia University" },
    { first: "Wei", last: "Zhang", affiliation: "University of Central Florida" },
    { first: "Shaojie", last: "Zhang", affiliation: "University of Central Florida" },
    { first: "Zhongming", last: "Zhao", affiliation: "University of Texas Health Science Center at Houston" },
    { first: "Min", last: "Zhao", affiliation: "University of the Sunshine Coast" },
    { first: "Cuncong", last: "Zhong", affiliation: "University of Kansas" },
    { first: "Qianqian", last: "Zhu", affiliation: "Roswell Park Comprehensive Cancer Center" },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Program Committee</h1>

        <div className="bg-white border-2 border-gray-200 rounded p-8">
          
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-6 font-semibold text-gray-800 w-32">First Name</th>
                  <th className="text-left py-2 pr-6 font-semibold text-gray-800 w-32">Last Name</th>
                  <th className="text-left py-2 font-semibold text-gray-800">Affiliation</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="py-2 pr-6">{m.first}</td>
                    <td className="py-2 pr-6">{m.last}</td>
                    <td className="py-2">{m.affiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

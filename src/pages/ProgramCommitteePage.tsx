export default function ProgramCommitteePage() {
  const members = [
    { first: "Jonathan", last: "Bard", affiliation: "The State University of New York at Buffalo" },
    { first: "James", last: "Cai", affiliation: "Texas A&M University" },
    { first: "Sapuni", last: "Chandrasena", affiliation: "The Ohio State University Wexner Medical Center" },
    { first: "Xiao", last: "Chang", affiliation: "CHOP" },
    { first: "Jianlin", last: "Cheng", affiliation: "University of Missouri Columbia" },
    { first: "Yan", last: "Cui", affiliation: "University of Tennessee Health Science Center" },
    { first: "Lei", last: "Du", affiliation: "Northwestern Polytechnical University" },
    { first: "Shiaofen", last: "Fang", affiliation: "Indiana University Indianapolis" },
    { first: "Hao", last: "Feng", affiliation: "University of Texas Health Science Center at Houston" },
    { first: "Mingchen", last: "Gao", affiliation: "The State University of New York at Buffalo" },
    { first: "Yixing", last: "Han", affiliation: "NIH" },
    { first: "Md Rejuan", last: "Haque", affiliation: "The Ohio State University" },
    { first: "Zhe", last: "He", affiliation: "Florida State University" },
    { first: "Ruifeng", last: "Hu", affiliation: "University of Texas Health Science Center at Houston" },
    { first: "Weichun", last: "Huang", affiliation: "EPA" },
    { first: "Tao", last: "Huang", affiliation: "Shanghai Institute of Nutrition and Health, Shanghai Institutes for Biological Sciences, Chinese Academy of Sciences" },
    { first: "Frank", last: "Huang", affiliation: "Cincinnati Children's Hospital Medical Center" },
    { first: "Zuotian", last: "Li", affiliation: "Purdue University" },
    { first: "Lei", last: "Li", affiliation: "Shenzhen Bay Laboratory" },
    { first: "Fuhai", last: "Li", affiliation: "The Methodist Hospital, Weill Medical College of Cornell University" },
    { first: "Lu", last: "Li", affiliation: "The State University of New York at Buffalo" },
    { first: "Aimin", last: "Li", affiliation: "Xi'an University of Technology" },
    { first: "Shuo", last: "Li", affiliation: "University of California, Los Angeles" },
    { first: "Li", last: "Liao", affiliation: "University of Delaware" },
    { first: "Hongbo", last: "Liu", affiliation: "University of Rochester" },
    { first: "Tao", last: "Liu", affiliation: "Roswell Park Comprehensive Cancer Center" },
    { first: "Qian", last: "Liu", affiliation: "University of Nevada, Las Vegas" },
    { first: "Tianle", last: "Ma", affiliation: "Oakland University" },
    { first: "Xiaokui", last: "Mo", affiliation: "Ohio State University" },
    { first: "Maciej", last: "Pietrzak", affiliation: "The Ohio State University" },
    { first: "Hong", last: "Qin", affiliation: "Old Dominion University" },
    { first: "Gang", last: "Qu", affiliation: "University of Texas Health Science Center at Houston" },
    { first: "Rama", last: "Shankar", affiliation: "Michigan State University" },
    { first: "Qianqian", last: "Song", affiliation: "University of Florida" },
    { first: "Yijun", last: "Sun", affiliation: "The State University of New York at Buffalo" },
    { first: "Jiao", last: "Sun", affiliation: "University of Central Florida" },
    { first: "Fengzhu", last: "Sun", affiliation: "University of Southern California" },
    { first: "Haixu", last: "Tang", affiliation: "Indiana University Bloomington" },
    { first: "Manabu", last: "Torii", affiliation: "Kaiser Permanente" },
    { first: "Alper", last: "Uzun", affiliation: "Brown University" },
    { first: "Jun", last: "Wan", affiliation: "Indiana University" },
    { first: "Shibiao", last: "Wan", affiliation: "University of Nebraska Medical Center" },
    { first: "Junbai", last: "Wang", affiliation: "Radium Hospital" },
    { first: "Qing", last: "Wang", affiliation: "University of Florida" },
    { first: "Kai", last: "Wang", affiliation: "University of Pennsylvania" },
    { first: "Yufeng", last: "Wang", affiliation: "University of Texas at San Antonio" },
    { first: "Daifeng", last: "Wang", affiliation: "University of Wisconsin - Madison" },
    { first: "Jiayin", last: "Wang", affiliation: "Xi'an Jiaotong University" },
    { first: "Yingying", last: "Wei", affiliation: "The Chinese University of Hong Kong" },
    { first: "Ka-Chun", last: "Wong", affiliation: "City University of Hong Kong" },
    { first: "Huanmei", last: "Wu", affiliation: "Temple University" },
    { first: "Jinchuan", last: "Xing", affiliation: "Rutgers University" },
    { first: "Jianhua", last: "Xuan", affiliation: "Virginia Tech" },
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
            Program Committee Members
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 pr-6 font-semibold text-gray-800 w-28">First Name</th>
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

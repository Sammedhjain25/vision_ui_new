const attendanceData = [
  { subject: "Chemistry", present: 90, absent: 10, percent: 90, status: "Good" },
  { subject: "Biology", present: 94, absent: 6, percent: 94, status: "Good" },
  { subject: "Mathematics", present: 88, absent: 12, percent: 88, status: "Good" },
  { subject: "English", present: 95, absent: 5, percent: 95, status: "Good" },
  { subject: "History", present: 87, absent: 13, percent: 87, status: "Good" },
  { subject: "Geography", present: 91, absent: 9, percent: 91, status: "Good" },
  { subject: "Computer Science", present: 93, absent: 7, percent: 93, status: "Good" },
  { subject: "Art", present: 89, absent: 11, percent: 89, status: "Good" },
  { subject: "Physical Education", present: 96, absent: 4, percent: 96, status: "Good" },
];

const AttendanceCard = () => {
  return (
    <section className="w-full rounded-3xl bg-white p-8 text-gray-800 shadow-lg ring-1 ring-gray-100">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Subject wise Attendance</h2>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {["Course", "Total Classes", "Present", "Absent", "Attendance %", "Status"].map(
                (heading) => (
                  <th key={heading} className="px-6 pb-4">
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {attendanceData.map((item) => (
              <tr
                key={item.subject}
                className="border-b border-gray-200 last:border-0 transition-colors hover:bg-gray-50"
              >
                <td className="px-6 py-5">
                  <div>
                    <p className="font-semibold text-gray-900">{item.subject}</p>
                    <p className="text-xs text-gray-400">100 classes</p>
                  </div>
                </td>
                <td className="px-6 py-5 text-center text-base font-semibold text-gray-900">100</td>
                <td className="px-6 py-5 text-center text-base font-semibold text-green-600">
                  {item.present}
                </td>
                <td className="px-6 py-5 text-center text-base font-semibold text-red-500">
                  {item.absent}
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-32 rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-green-500"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                    <span className="font-semibold text-gray-900">{item.percent}%</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AttendanceCard;


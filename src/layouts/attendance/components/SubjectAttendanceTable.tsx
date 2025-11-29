import { useMemo } from "react";
import { motion } from "framer-motion";
import { IoBookOutline } from "react-icons/io5";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { courseWiseAttendance } from "../data/mockData";

type CourseAttendance = {
  course: string;
  attendance: number;
  totalClasses: number;
  present: number;
  absent: number;
  status: string;
};

const statusStyles: Record<string, string> = {
  Excellent: "border-emerald-500/40 bg-emerald-500/15 text-emerald-100",
  Good: "border-cyan-500/40 bg-cyan-500/15 text-cyan-100",
  Warning: "border-amber-500/50 bg-amber-500/15 text-amber-100",
  Critical: "border-rose-500/40 bg-rose-500/15 text-rose-100",
};

const SubjectAttendanceTable = () => {
  const attendanceData = useMemo<CourseAttendance[]>(
    () => courseWiseAttendance as CourseAttendance[],
    []
  );

  return (
    <section className="rounded-[32px] bg-transparent p-0">
      <div className="rounded-[28px] border border-white/10 bg-[#121b45]/95 p-6 text-white shadow-[0_30px_70px_rgba(3,6,24,0.65)]">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              Attendance
            </p>
            <h2 className="text-2xl font-semibold text-white drop-shadow-lg">
              Subject wise Attendance
            </h2>
          </div>
          <div className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm text-white shadow-inner">
            Academic Year 2024-25
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/15 bg-[#0d1340]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <table className="w-full min-w-[720px] table-auto">
            <thead className="text-left text-xs uppercase tracking-[0.25em] text-white/80">
              <tr className="border-b border-white/15 bg-white/10 text-white">
                {["Course", "Total Classes", "Present", "Absent", "Attendance %", "Status"].map(
                  (heading) => (
                    <th key={heading} className="px-6 py-4 font-semibold">
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((subject, index) => (
                <motion.tr
                  key={subject.course}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  className={cn(
                    "text-sm text-white/90",
                    index % 2 === 0 ? "bg-white/12" : "bg-white/0",
                    "border-b border-white/12 last:border-b-0"
                  )}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/45 via-cyan-400/45 to-blue-600/50 text-white shadow-[0_10px_25px_rgba(14,165,233,0.45)]">
                        <IoBookOutline size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-white">{subject.course}</p>
                        <p className="text-xs text-white/75">
                          {subject.totalClasses} classes
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-semibold text-white">
                    {subject.totalClasses}
                  </td>
                  <td className="px-6 py-5 font-semibold text-emerald-300">
                    {subject.present}
                  </td>
                  <td className="px-6 py-5 font-semibold text-rose-300">
                    {subject.absent}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-36 rounded-full bg-white/25">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 shadow-[0_0_14px_rgba(14,165,233,0.9)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${subject.attendance}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                      <p className="font-semibold text-white">
                        {subject.attendance}%
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <Badge
                      className={cn(
                        "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
                        statusStyles[subject.status] ??
                          "border-white/40 bg-white/20 text-white"
                      )}
                    >
                      {subject.status}
                    </Badge>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SubjectAttendanceTable;


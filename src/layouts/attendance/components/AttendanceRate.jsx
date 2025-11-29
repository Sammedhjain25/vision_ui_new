/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";

// Data
import { attendanceRate, monthlyRates } from "../data/mockData";

const defaultMonths = [
  { id: "jan", name: "January", rate: 57, color: "#1678FF" },
  { id: "feb", name: "February", rate: 55, color: "#FF9A2E" },
  { id: "mar", name: "March", rate: 56, color: "#44C24A" },
  { id: "apr", name: "April", rate: 58, color: "#FFB86B" },
  { id: "may", name: "May", rate: 60, color: "#4DA8FF" },
  { id: "jun", name: "June", rate: 59, color: "#FF6E9C" },
  { id: "jul", name: "July", rate: 61, color: "#9B59B6" },
  { id: "aug", name: "August", rate: 58, color: "#E74C3C" },
  { id: "sep", name: "September", rate: 62, color: "#3498DB" },
  { id: "oct", name: "October", rate: 60, color: "#F39C12" },
  { id: "nov", name: "November", rate: 59, color: "#1ABC9C" },
  { id: "dec", name: "December", rate: 61, color: "#E67E22" },
];

function AttendanceRate() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  
  const months = defaultMonths.map((defaultMonth) => {
    const mockData = monthlyRates?.find(
      (m) => m.month.toLowerCase() === defaultMonth.name.toLowerCase()
    );
    return {
      ...defaultMonth,
      rate: mockData?.rate ?? defaultMonth.rate,
    };
  });

  const scrollRef = useRef(null);
  const innerRef = useRef(null);
  const nodeRefs = useRef([]);
  const [pathD, setPathD] = useState("");
  const [svgWidth, setSvgWidth] = useState(720);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 700;
    const start = Date.now();
    const target = Number(attendanceRate ?? 56);
    const step = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(step);
    };
    step();
  }, []);

  const computePath = () => {
    const inner = innerRef.current;
    if (!inner) return;
    const innerRect = inner.getBoundingClientRect();
    setSvgWidth(Math.max(720, inner.scrollWidth));

    const points = nodeRefs.current
      .map((el) => (el ? el.getBoundingClientRect() : null))
      .filter(Boolean)
      .map((r) => ({
        x: r.left - innerRect.left + r.width / 2,
        y: r.top - innerRect.top + r.height / 2,
      }));

    if (points.length < 2) {
      setPathD("");
      return;
    }

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cx = (p0.x + p1.x) / 2;
      d += ` C ${cx} ${p0.y} ${cx} ${p1.y} ${p1.x} ${p1.y}`;
    }
    setPathD(d);
  };

  useEffect(() => {
    computePath();
    const ro = new ResizeObserver(() => computePath());
    if (innerRef.current) ro.observe(innerRef.current);
    const sc = scrollRef.current;
    if (sc) sc.addEventListener("scroll", computePath, { passive: true });
    window.addEventListener("resize", computePath);
    const timer = setTimeout(() => computePath(), 120);

    return () => {
      ro.disconnect();
      if (sc) sc.removeEventListener("scroll", computePath);
      window.removeEventListener("resize", computePath);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Card>
      <VuiBox p={3} sx={{ minHeight: '420px' }}>
        <VuiBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={3}>
          <VuiBox>
            <VuiTypography variant="h6" color={darkMode ? "white" : "text"} fontWeight="bold" mb={1.5}>
              Attendance Rate
            </VuiTypography>
            <VuiBox
              sx={{
                display: 'inline-block',
                backgroundColor: darkMode ? 'rgba(0, 117, 255, 0.1)' : 'rgba(26, 115, 232, 0.1)',
                color: darkMode ? '#0075ff' : '#1A73E8',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 'medium',
              }}
            >
              This Year
            </VuiBox>
          </VuiBox>
          <VuiTypography
            variant="h2"
            color={darkMode ? "white" : "text"}
            fontWeight="normal"
            sx={{
              fontSize: '56px',
              lineHeight: 1,
              color: darkMode ? undefined : '#000000',
            }}
          >
            {count}
            <VuiTypography
              component="span"
              sx={{
                fontSize: '40px',
                verticalAlign: 'top',
                marginLeft: '4px',
                color: darkMode ? undefined : '#000000',
              }}
            >
              %
            </VuiTypography>
          </VuiTypography>
        </VuiBox>

        <VuiBox
          sx={{
            borderTop: darkMode ? '1px solid rgba(226, 232, 240, 0.1)' : '1px solid #E5E7EB',
            marginTop: 3,
            paddingTop: 3,
          }}
        />

        <VuiTypography variant="button" color={darkMode ? "text" : "text"} fontWeight="medium" mb={3} fontSize="14px" sx={{ color: darkMode ? undefined : "#000000" }}>
          Monthly Rate
        </VuiTypography>

        <VuiBox
          sx={{
            position: 'relative',
            overflowX: 'auto',
            overflowY: 'hidden',
            height: '160px',
            paddingBottom: '6px',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
          }}
          ref={scrollRef}
        >
          <VuiBox
            ref={innerRef}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              minWidth: Math.max(720, months.length * 200),
              height: '160px',
              paddingLeft: '36px',
              paddingRight: '36px',
            }}
          >
            <svg
              width={svgWidth}
              height={160}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                pointerEvents: 'none',
                overflow: 'visible',
                zIndex: 1,
              }}
            >
              <path
                d={pathD}
                stroke="#4DA8FF"
                strokeWidth={3}
                fill="transparent"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <VuiBox sx={{ width: '12px' }} />

            {months.map((m, i) => {
              const isUp = i % 2 === 1;
              const verticalOffset = isUp ? "-40px" : "20px";

              return (
                <VuiBox
                  key={m.id}
                  sx={{
                    marginRight: '36px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <Card
                    ref={(el) => (nodeRefs.current[i] = el)}
                    sx={{
                      width: '140px',
                      padding: '16px 24px',
                      textAlign: 'center',
                      backgroundColor: m.color,
                      marginTop: verticalOffset,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <VuiTypography variant="caption" color="white" fontSize="12px" opacity={0.9} mb={0.5}>
                      {m.name}
                    </VuiTypography>
                    <VuiTypography variant="h6" color="white" fontWeight="normal" fontSize="20px">
                      {m.rate}%
                    </VuiTypography>
                  </Card>
                </VuiBox>
              );
            })}

            <VuiBox sx={{ width: '12px' }} />
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default AttendanceRate;



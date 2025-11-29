/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import { useEffect, useState, useMemo } from "react";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import { useVisionUIController } from "context";

function StatChip({ icon, value, label, totalClasses, percentage }) {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  const [count, setCount] = useState(0);
  const [fillPercent, setFillPercent] = useState(0);

  const percent = useMemo(() => {
    if (percentage !== undefined) {
      return percentage;
    }
    if (totalClasses) {
      return Math.round((value / totalClasses) * 100);
    }
    return 0;
  }, [percentage, totalClasses, value]);

  // Animate count up
  useEffect(() => {
    const duration = 1000;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * value));
      if (t < 1) requestAnimationFrame(step);
    };
    step();
  }, [value]);

  // Animate progress bar
  useEffect(() => {
    setFillPercent(0);
    const frame = requestAnimationFrame(() => {
      setFillPercent(percent);
    });
    return () => cancelAnimationFrame(frame);
  }, [percent]);

  return (
    <Card
      sx={{
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px) scale(1.02)',
        },
      }}
    >
      <VuiBox p={2.5}>
        <VuiBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          {/* Left Side - Label and Percentage */}
          <VuiBox>
            <VuiBox display="flex" alignItems="center" gap={1} mb={1}>
              <VuiBox
                sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#0075ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 4px rgba(0, 117, 255, 0.3)',
                }}
              >
                {icon}
              </VuiBox>
              <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" fontWeight="medium" sx={{ color: darkMode ? undefined : "#000000" }}>
                {label}
              </VuiTypography>
            </VuiBox>
            <VuiTypography variant="button" color={darkMode ? "info" : "text"} fontWeight="bold" fontSize="14px" sx={{ color: darkMode ? undefined : "#1A73E8" }}>
              {percent}%
            </VuiTypography>
          </VuiBox>

          {/* Right Side - Large Number */}
          <VuiTypography
            variant="h3"
            color={darkMode ? "white" : "text"}
            fontWeight="bold"
            sx={{
              fontSize: '2.5rem',
              lineHeight: '2.5rem',
              color: darkMode ? undefined : '#000000',
            }}
          >
            {count}
          </VuiTypography>
        </VuiBox>

        {/* Progress Bar */}
        <VuiProgress
          value={fillPercent}
          color="info"
          sx={{
            background: 'rgba(226, 232, 240, 0.1)',
            height: '6px',
            borderRadius: '4px',
          }}
        />
      </VuiBox>
    </Card>
  );
}

export default StatChip;



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
import { useVisionUIController } from "context";

function VerticalMetric({ value, label, icon, bgColor, fillColor, iconBgColor }) {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  const [count, setCount] = useState(0);
  const [fillHeight, setFillHeight] = useState(0);
  const maxValue = 13;

  const targetHeight = useMemo(() => {
    return Math.max((value / maxValue) * 70, 10);
  }, [value]);

  // Animate count up
  useEffect(() => {
    const duration = 800;
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

  // Animate fill height
  useEffect(() => {
    setFillHeight(0);
    const frame = requestAnimationFrame(() => {
      setFillHeight(targetHeight);
    });
    return () => cancelAnimationFrame(frame);
  }, [targetHeight]);

  return (
    <Card
      sx={{
        width: '180px',
        height: '340px',
        backgroundColor: darkMode ? bgColor : '#FFFFFF',
        border: darkMode ? 'none' : '1px solid #E5E7EB',
        boxShadow: darkMode ? undefined : '0px 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: darkMode ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 8px 16px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <VuiTypography variant="h4" color={darkMode ? "white" : "text"} fontWeight="bold" mb={1} sx={{ color: darkMode ? undefined : "#000000" }}>
        {String(count).padStart(2, '0')}
      </VuiTypography>

      <VuiBox
        flex={1}
        width="100%"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
        mb={1}
        sx={{ position: 'relative' }}
      >
        <VuiBox
          sx={{
            width: '100%',
            backgroundColor: fillColor,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'height 1s ease-out',
            height: `${fillHeight}%`,
          }}
        >
          <VuiBox
            sx={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: iconBgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </VuiBox>
        </VuiBox>
      </VuiBox>

      <VuiBox display="flex" alignItems="center" gap={1.5} mt={1}>
        <VuiBox
          sx={{
            borderRadius: '50%',
            padding: '4px',
            backgroundColor: iconBgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </VuiBox>
        <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
          {label}
        </VuiTypography>
      </VuiBox>
    </Card>
  );
}

export default VerticalMetric;



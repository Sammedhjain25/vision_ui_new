/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import { motion, useMotionValue, useTransform, animate, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

export function AnimatedRadialChart({ 
  value = 15, 
  size = 300,
  strokeWidth: customStrokeWidth,
  showLabels = false,
  duration = 2
}) {
  // Dynamic stroke width based on size if not provided
  const strokeWidth = customStrokeWidth ?? Math.max(12, size * 0.06);
  const radius = size * 0.35;
  const center = size / 2;
  const circumference = Math.PI * radius;

  // Calculate inner line radius (4px inside the main arc)
  const innerLineRadius = radius - strokeWidth - 4;

  // Motion values for animation
  const animatedValue = useMotionValue(0);
  const offset = useTransform(animatedValue, [0, 100], [circumference, 0]);

  // Calculate animated positions
  const progressAngle = useTransform(animatedValue, [0, 100], [-Math.PI, 0]);
  const innerRadius = radius - strokeWidth / 2;

  // State for displaying the animated value
  const [displayValue, setDisplayValue] = useState(0);

  // Animate to the target value on mount or when value changes
  useEffect(() => {
    const controls = animate(animatedValue, value, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value, animatedValue, duration]);

  // Subscribe to animated value changes to update display
  useMotionValueEvent(animatedValue, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  // Calculate responsive font size
  const fontSize = Math.max(16, size * 0.1);
  const labelFontSize = Math.max(12, size * 0.04);

  return (
    <VuiBox
      sx={{
        position: 'relative',
        width: size,
        height: size * 0.7,
      }}
    >
      <svg width={size} height={size * 0.7} viewBox={`0 0 ${size} ${size * 0.7}`} style={{ overflow: 'visible' }}>
        <defs>
          {/* Base track gradient - Vision UI dark theme */}
          <linearGradient id={`baseGradient-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f1535" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#1a1f37" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#131538" stopOpacity="0.6" />
          </linearGradient>

          {/* Progress gradient - Vision UI info/success */}
          <linearGradient id={`progressGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0075ff" />
            <stop offset="50%" stopColor="#01b574" />
            <stop offset="100%" stopColor="#3993fe" />
          </linearGradient>

          {/* Text gradient - Vision UI text colors */}
          <linearGradient id={`textGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#a0aec0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#718096" stopOpacity="0.5" />
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id={`dropshadow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Inner thin line */}
        <path
          d={`M ${center - innerLineRadius} ${center} A ${innerLineRadius} ${innerLineRadius} 0 0 1 ${center + innerLineRadius} ${center}`}
          fill="none"
          stroke="#a0aec0"
          strokeWidth="1"
          strokeLinecap="butt"
          opacity="0.6"
        />

        {/* Base track */}
        <path
          d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`}
          fill="none"
          stroke={`url(#baseGradient-${size})`}
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
          filter={`url(#dropshadow-${size})`}
        />

        {/* Animated Progress track */}
        <motion.path
          d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`}
          fill="none"
          stroke={`url(#progressGradient-${size})`}
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          filter={`url(#dropshadow-${size})`}
        />

        {/* Animated extending line */}
        <motion.line
          x1={useTransform(progressAngle, (angle) => center + Math.cos(angle) * innerRadius)}
          y1={useTransform(progressAngle, (angle) => center + Math.sin(angle) * innerRadius)}
          x2={useTransform(progressAngle, (angle) => center + Math.cos(angle) * innerRadius - Math.cos(angle) * 30)}
          y2={useTransform(progressAngle, (angle) => center + Math.sin(angle) * innerRadius - Math.sin(angle) * 30)}
          stroke={`url(#textGradient-${size})`}
          strokeWidth="1"
          strokeLinecap="butt"
        />
      </svg>

      {/* Animated center percentage display */}
      <VuiBox
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
        <motion.div
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: 'bold',
            letterSpacing: 'tight',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: duration * 0.75 }}
        >
          <span
            style={{
              background: "linear-gradient(to right, #ffffff, #a0aec0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            +{displayValue}%
          </span>
        </motion.div>
      </VuiBox>

      {/* 0% and 100% labels */}
      {showLabels && (
        <>
          <motion.div
            style={{
              position: 'absolute',
              fontSize: `${labelFontSize}px`,
              left: center - radius - 5,
              top: center + strokeWidth / 2,
              color: '#a0aec0',
              fontWeight: 'medium',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: duration * 0.25 }}
          >
            0%
          </motion.div>
          <motion.div
            style={{
              position: 'absolute',
              fontSize: `${labelFontSize}px`,
              left: center + radius - 20,
              top: center + strokeWidth / 2,
              color: '#a0aec0',
              fontWeight: 'medium',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: duration * 0.25 }}
          >
            100%
          </motion.div>
        </>
      )}
    </VuiBox>
  );
}

export default AnimatedRadialChart;


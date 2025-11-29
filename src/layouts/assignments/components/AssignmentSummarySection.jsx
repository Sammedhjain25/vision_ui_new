/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

// React Icons
import { IoDocumentText, IoTimeOutline, IoCheckmarkCircle, IoAlertCircle } from "react-icons/io5";

// Weather Card
import WeatherCard from "./WeatherCard";

function AssignmentSummarySection() {
  const cardData = [
    {
      title: "12",
      label: "Total Assignments",
      icon: <IoDocumentText size={18} color="white" />,
      gradientStart: "#0f1535",
      gradientEnd: "#1a1f3a",
    },
    {
      title: "5",
      label: "Pending",
      icon: <IoTimeOutline size={18} color="white" />,
      gradientStart: "#0f1535",
      gradientEnd: "#1a1f3a",
    },
    {
      title: "7",
      label: "Submitted",
      icon: <IoCheckmarkCircle size={18} color="white" />,
      gradientStart: "#0f1535",
      gradientEnd: "#1a1f3a",
    },
    {
      title: "2",
      label: "Overdue",
      icon: <IoAlertCircle size={18} color="white" />,
      gradientStart: "#0f1535",
      gradientEnd: "#1a1f3a",
    },
  ];

  return (
    <Grid container spacing={3}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <motion.div
            whileHover={{ scale: 1.05, translateY: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <WeatherCard
              title={card.title}
              label={card.label}
              icon={card.icon}
              gradientStart={card.gradientStart}
              gradientEnd={card.gradientEnd}
            />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default AssignmentSummarySection;

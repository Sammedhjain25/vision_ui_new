/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import Card from "@mui/material/Card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiInput from "components/VuiInput";
import { useVisionUIController } from "context";

// React Icons
import { IoSearch } from "react-icons/io5";

function AssignmentFilterSection({ onFilterChange, onSearchChange }) {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Submitted", value: "submitted" },
    { label: "Overdue", value: "overdue" },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const handleFilter = (filterValue) => {
    setSelectedFilter(filterValue);
    if (onFilterChange) {
      onFilterChange(filterValue);
    }
  };

  return (
    <Card
      sx={{
        background: darkMode ? "rgba(255, 255, 255, 0.05)" : "#FFFFFF",
        backdropFilter: darkMode ? "blur(20px)" : "none",
        border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #E5E7EB",
        boxShadow: darkMode ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "0px 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "visible",
      }}
    >
      <VuiBox p={2}>
        <VuiBox display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3} alignItems="center">
          {/* Search Input */}
          <VuiBox sx={{ flex: 1, width: "100%" }}>
            <VuiInput
              placeholder="Search assignments..."
              value={searchTerm}
              onChange={handleSearch}
              icon={{
                component: <IoSearch size="20px" />,
                direction: "left",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: darkMode ? "rgba(0, 0, 0, 0.2) !important" : "#F9FAFB !important",
                  border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #E5E7EB",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: darkMode ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid #D1D5DB",
                    backgroundColor: darkMode ? "rgba(0, 0, 0, 0.3) !important" : "#F3F4F6 !important",
                  },
                  "&.Mui-focused": {
                    border: "1px solid #3b82f6",
                    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.2)",
                  },
                },
                "& input": {
                  color: darkMode ? "white !important" : "#000000 !important",
                },
              }}
            />
          </VuiBox>

          {/* Filter Pills */}
          <VuiBox
            display="flex"
            gap={1}
            flexWrap="wrap"
            sx={{
              background: darkMode ? "rgba(0, 0, 0, 0.2)" : "#F9FAFB",
              padding: "6px",
              borderRadius: "16px",
              border: darkMode ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid #E5E7EB",
            }}
          >
            {filters.map((filter) => (
              <VuiBox
                key={filter.value}
                onClick={() => handleFilter(filter.value)}
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  padding: "8px 20px",
                  borderRadius: "12px",
                  zIndex: 1,
                  transition: "color 0.3s ease",
                  color: darkMode
                    ? (selectedFilter === filter.value ? "white" : "rgba(255, 255, 255, 0.6)")
                    : (selectedFilter === filter.value ? "#FFFFFF" : "#374151"),
                  fontWeight: selectedFilter === filter.value ? "bold" : "regular",
                  fontSize: "14px",
                  "&:hover": {
                    color: darkMode ? "white" : "#000000",
                  },
                }}
              >
                {selectedFilter === filter.value && (
                  <motion.div
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                      borderRadius: "12px",
                      zIndex: -1,
                      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                    }}
                  />
                )}
                {filter.label}
              </VuiBox>
            ))}
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default AssignmentFilterSection;



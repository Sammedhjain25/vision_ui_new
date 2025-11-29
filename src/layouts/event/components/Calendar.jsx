/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import { useVisionUIController } from "context";

function Calendar({ mode = "single", selected, onSelect, defaultMonth, modifiers = {}, modifiersClassNames = {} }) {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  const [currentMonth, setCurrentMonth] = useState(defaultMonth || new Date());
  const [selectedDate, setSelectedDate] = useState(selected || null);

  // Update selectedDate when selected prop changes
  React.useEffect(() => {
    if (selected !== undefined) {
      setSelectedDate(selected);
    }
  }, [selected]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (onSelect) {
      onSelect(date);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isHighlighted = (date) => {
    if (!modifiers.highlighted) return false;
    return modifiers.highlighted.some((highlightDate) => isSameDay(date, highlightDate));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
  }

  // Get color for highlighted dates based on date
  const getHighlightColor = (date) => {
    // Map dates to colors - you can customize this logic
    const dateMap = {
      5: '#01b574', // Design - green
      17: '#ffb547', // Developer - orange
    };
    return dateMap[date.getDate()] || null;
  };

  return (
    <VuiBox
      sx={{
        width: '100%',
        maxWidth: '400px',
      }}
    >
      {/* Header */}
      <VuiBox 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        mb={3}
        px={1}
      >
        <VuiButton
          variant="text"
          size="small"
          onClick={handlePrevMonth}
          circular
          iconOnly
        >
          <IoChevronBack size={18} color={darkMode ? "#FFFFFF" : "#374151"} />
        </VuiButton>
        <VuiTypography variant="button" color={darkMode ? "white" : "text"} fontWeight="medium" fontSize="16px">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </VuiTypography>
        <VuiButton
          variant="text"
          size="small"
          onClick={handleNextMonth}
          circular
          iconOnly
        >
          <IoChevronForward size={18} color={darkMode ? "#FFFFFF" : "#374151"} />
        </VuiButton>
      </VuiBox>

      {/* Day names */}
      <VuiBox 
        display="flex" 
        gap={1} 
        mb={2}
        justifyContent="space-between"
        px={0.5}
      >
        {dayNames.map((day) => (
          <VuiBox
            key={day}
            sx={{
              width: '40px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="11px" fontWeight="medium" sx={{ color: darkMode ? undefined : "#000000" }}>
              {day}
            </VuiTypography>
          </VuiBox>
        ))}
      </VuiBox>

      {/* Calendar grid */}
      <VuiBox
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 1,
        }}
      >
        {days.map((date, index) => {
          if (!date) {
            return <VuiBox key={index} sx={{ width: '40px', height: '40px' }} />;
          }

          const isSelected = selectedDate && isSameDay(date, selectedDate);
          const highlighted = isHighlighted(date);
          const isToday = isSameDay(date, new Date());
          const highlightColor = highlighted ? getHighlightColor(date) : null;

          return (
            <VuiBox
              key={date.getTime()}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <VuiButton
                variant="text"
                onClick={() => handleDateClick(date)}
                circular
                color={isSelected ? "info" : "text"}
                sx={{
                  minWidth: '40px',
                  width: '40px',
                  height: '40px',
                  padding: 0,
                  backgroundColor: isSelected
                    ? '#0075ff'
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: isSelected
                      ? '#0075ff'
                      : 'rgba(0, 117, 255, 0.1)',
                  },
                }}
              >
                <VuiTypography
                  variant="button"
                  color={isSelected ? 'white' : (darkMode ? 'text' : 'text')}
                  fontSize="14px"
                  fontWeight={isToday ? 'bold' : 'regular'}
                  sx={!isSelected && !darkMode ? { color: '#000000' } : undefined}
                >
                  {date.getDate()}
                </VuiTypography>
              </VuiButton>
              
              {/* Small colored dots for highlighted dates and today indicator */}
              <VuiBox
                sx={{
                  position: 'absolute',
                  bottom: '4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: highlightColor ? '6px' : isToday ? '4px' : '0px',
                  height: highlightColor ? '6px' : isToday ? '4px' : '0px',
                  borderRadius: '50%',
                  backgroundColor: highlightColor || (isToday ? '#0075ff' : 'transparent'),
                  pointerEvents: 'none',
                }}
              />
            </VuiBox>
          );
        })}
      </VuiBox>
    </VuiBox>
  );
}

export default Calendar;


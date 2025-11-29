import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/pie-chart";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import colors from "assets/theme/base/colors";

const { gradients } = colors;

const data = [
  { name: "Chrome", value: 275, fill: "#4318ff" },
  { name: "Safari", value: 200, fill: "#9f7aea" },
  { name: "Firefox", value: 187, fill: "#0075ff" },
  { name: "Edge", value: 173, fill: "#01b574" },
  { name: "Other", value: 90, fill: "#ffb547" },
];

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "#4318ff",
  },
  safari: {
    label: "Safari",
    color: "#9f7aea",
  },
  firefox: {
    label: "Firefox",
    color: "#0075ff",
  },
  edge: {
    label: "Edge",
    color: "#01b574",
  },
  other: {
    label: "Other",
    color: "#ffb547",
  },
};

export default function SimplePieChart() {
  return (
    <VuiBox
      sx={{
        background: `linear-gradient(${gradients.cardDark.deg}, ${gradients.cardDark.main}, ${gradients.cardDark.state})`,
        borderRadius: "20px",
        padding: "16px",
        maxWidth: "350px",
      }}
    >
      <VuiTypography variant="lg" fontWeight="bold" color="white" mb={2}>
        Browser Usage
      </VuiTypography>
      <ChartContainer config={chartConfig} className="h-[250px]">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
    </VuiBox>
  );
}


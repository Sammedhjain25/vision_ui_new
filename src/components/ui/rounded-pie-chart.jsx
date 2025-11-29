"use client";

import { LabelList, Pie, PieChart } from "recharts";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/pie-chart";
import colors from "assets/theme/base/colors";

const { gradients } = colors;

const chartData = [
  { subject: "Mathematics", marks: 275, fill: "#4318ff" },
  { subject: "English", marks: 200, fill: "#0075ff" },
  { subject: "Physics", marks: 173, fill: "#5b21b6" },
  { subject: "Chemistry", marks: 187, fill: "#4338ca" },
  { subject: "Biology", marks: 90, fill: "#6366f1" },
];

const chartConfig = {
  marks: {
    label: "Marks",
  },
  Mathematics: {
    label: "Mathematics",
    color: "#4318ff",
  },
  English: {
    label: "English",
    color: "#0075ff",
  },
  Physics: {
    label: "Physics",
    color: "#5b21b6",
  },
  Chemistry: {
    label: "Chemistry",
    color: "#4338ca",
  },
  Biology: {
    label: "Biology",
    color: "#6366f1",
  },
};

export default function RoundedPieChart() {
  return (
    <Card
      sx={{
        borderRadius: "24px",
        background: `linear-gradient(${gradients.cardDark.deg}, ${gradients.cardDark.main}, ${gradients.cardDark.state})`,
        padding: "24px",
        width: "100%",
        height: "100%",
        minHeight: "380px",
        flexShrink: 0,
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <VuiBox display="flex" flexDirection="column" gap={2} flex={1}>
        <VuiBox display="flex" alignItems="center" justifyContent="center" gap={1} mb={1}>
          <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
            Subject Marks
          </VuiTypography>
          <VuiBox
            sx={{
              color: "#22c55e",
              background: "rgba(34, 197, 94, 0.1)",
              border: "none",
              padding: "4px 8px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <TrendingUpIcon sx={{ height: "16px", width: "16px" }} />
            <VuiTypography variant="caption" color="white" fontWeight="600">
              5.2%
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiTypography variant="caption" color="text" textAlign="center" mb={1}>
          Academic Performance Overview
        </VuiTypography>
        <VuiBox
          sx={{
            width: "100%",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "280px",
          }}
        >
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-text]:fill-white"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="marks" hideLabel />}
              />
              <Pie
                data={chartData}
                innerRadius={60}
                outerRadius={100}
                dataKey="marks"
                cornerRadius={8}
                paddingAngle={4}
              >
                <LabelList
                  dataKey="marks"
                  stroke="none"
                  fontSize={12}
                  fontWeight={500}
                  fill="#ffffff"
                  formatter={(value) => value.toString()}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}


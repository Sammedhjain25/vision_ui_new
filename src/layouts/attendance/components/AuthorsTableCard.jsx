import Card from "@mui/material/Card";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";
import Table from "examples/Tables/Table";

import authorsTableData from "layouts/tables/data/authorsTableData";

const AuthorsTableCard = () => {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  const { columns, rows } = authorsTableData;

  return (
    <Card>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
        <VuiTypography variant="lg" color={darkMode ? "white" : "text"}>
          Subject wise Attendance
        </VuiTypography>
      </VuiBox>
      <VuiBox
        sx={{
          overflowX: "auto",
          "& th": {
            borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
              `${borderWidth[1]} solid ${grey[700]}`,
          },
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                `${borderWidth[1]} solid ${grey[700]}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </VuiBox>
    </Card>
  );
};

export default AuthorsTableCard;


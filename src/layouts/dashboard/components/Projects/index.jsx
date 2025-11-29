import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckCircleFill } from "react-icons/bs";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import Table from "examples/Tables/Table";

// Vision UI Dashboard React context
import { useVisionUIController } from "context";

// Data
import data from "layouts/dashboard/components/Projects/data";

function Projects() {
    const [menu, setMenu] = useState(null);
    const [controller] = useVisionUIController();
    const { darkMode } = controller;
    const { columns, rows } = data(darkMode);

    const openMenu = ({ currentTarget }) => setMenu(currentTarget);
    const closeMenu = () => setMenu(null);

    const renderMenu = (
        <Menu
            id="simple-menu"
            anchorEl={menu}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={Boolean(menu)}
            onClose={closeMenu}
        >
            <MenuItem onClick={closeMenu}>Action</MenuItem>
            <MenuItem onClick={closeMenu}>Another action</MenuItem>
            <MenuItem onClick={closeMenu}>Something else</MenuItem>
        </Menu>
    );

    return (
        <Card
            sx={{
                height: "100% !important",
                ...(darkMode ? {} : { backgroundColor: '#FFFFFF', background: '#FFFFFF' }),
            }}
        >
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
                <VuiBox mb="auto">
                    <VuiTypography 
                        color={darkMode ? "white" : "text"} 
                        variant="lg" 
                        mb="6px" 
                        gutterBottom
                        sx={{
                            fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                        }}
                    >
                        Subjects
                    </VuiTypography>
                </VuiBox>
                <VuiBox color="text" px={2}>
                    <Icon 
                        sx={{ 
                            cursor: "pointer", 
                            fontWeight: "bold",
                            color: darkMode ? undefined : "#344767",
                        }} 
                        fontSize="small" 
                        onClick={openMenu}
                    >
                        more_vert
                    </Icon>
                </VuiBox>
                {renderMenu}
            </VuiBox>
            <VuiBox
                sx={{
                    "& .MuiTableRow-root:not(:last-child)": {
                        "& td": {
                            borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                                darkMode ? `${borderWidth[1]} solid ${grey[700]}` : `${borderWidth[1]} solid #E5E7EB`,
                        },
                    },
                }}
            >
                <Table columns={columns} rows={rows} darkMode={darkMode} />
            </VuiBox>
        </Card>
    );
}

export default Projects;

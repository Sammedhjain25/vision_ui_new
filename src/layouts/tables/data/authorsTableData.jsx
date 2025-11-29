/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/* eslint-disable react/prop-types */
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";

function Course({ name, code }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          {code}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

function Total({ classes, percentage }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {classes} Classes
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {percentage}% Complete
      </VuiTypography>
    </VuiBox>
  );
}

export default {
  columns: [
    { name: "course", align: "left" },
    { name: "total", align: "left" },
    { name: "status", align: "center" },
    { name: "absent", align: "center" },
    { name: "present", align: "center" },
  ],

  rows: [
    {
      course: <Course name="Mathematics" code="MATH-101" />,
      total: <Total classes="45" percentage="90" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      absent: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          5
        </VuiTypography>
      ),
      present: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          40
        </VuiTypography>
      ),
    },
    {
      course: <Course name="Physics" code="PHY-201" />,
      total: <Total classes="50" percentage="85" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      absent: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          8
        </VuiTypography>
      ),
      present: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          42
        </VuiTypography>
      ),
    },
    {
      course: <Course name="Chemistry" code="CHEM-301" />,
      total: <Total classes="48" percentage="92" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      absent: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          4
        </VuiTypography>
      ),
      present: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          44
        </VuiTypography>
      ),
    },
    {
      course: <Course name="Computer Science" code="CS-401" />,
      total: <Total classes="60" percentage="88" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      absent: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          7
        </VuiTypography>
      ),
      present: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          53
        </VuiTypography>
      ),
    },
    {
      course: <Course name="English Literature" code="ENG-102" />,
      total: <Total classes="40" percentage="75" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Inactive"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      absent: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          10
        </VuiTypography>
      ),
      present: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          30
        </VuiTypography>
      ),
    },
    {
      course: <Course name="Biology" code="BIO-202" />,
      total: <Total classes="52" percentage="94" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      absent: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          3
        </VuiTypography>
      ),
      present: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          49
        </VuiTypography>
      ),
    },
  ],
};

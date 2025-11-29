// Courses Page

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import CourseGallery from "./components/CourseGallery";
import VuiBox from "components/VuiBox";

function Courses() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <CourseGallery />
      </VuiBox>
    </DashboardLayout>
  );
}

export default Courses;

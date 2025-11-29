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

import { useState, useEffect } from "react";

// react-router components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiInput from "components/VuiInput";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Vision UI Dashboard React context
import {
  useVisionUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
  setDarkMode,
} from "context";

// Images
import team2 from "assets/images/team-2.jpg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";

function DashboardNavbar({ absolute = false, light = false, isMini = false }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleToggleDarkMode = () => setDarkMode(dispatch, !darkMode);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="text"
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            payment
          </Icon>
        }
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <VuiBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini, darkMode })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </VuiBox>
        {isMini ? null : (
          <VuiBox sx={(theme) => navbarRow(theme, { isMini, darkMode })}>
            <VuiBox pr={1}>
              <VuiInput
                placeholder="Type here..."
                icon={{ component: "search", direction: "left" }}
                sx={({ breakpoints }) => ({
                  [breakpoints.down("sm")]: {
                    maxWidth: "80px",
                  },
                  [breakpoints.only("sm")]: {
                    maxWidth: "80px",
                  },
                  backgroundColor: "info.main !important",
                  "& input::placeholder": {
                    color: darkMode ? undefined : "#344767 !important",
                    fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                  },
                  "& input": {
                    color: darkMode ? undefined : "#344767 !important",
                    fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                  },
                })}
              />
            </VuiBox>
            <VuiBox color={darkMode ? (light ? "white" : "inherit") : "text"}>
              <IconButton
                size="small"
                color="inherit"
                sx={(theme) => navbarMobileMenu(theme, { darkMode })}
                onClick={handleMiniSidenav}
              >
                <Icon sx={{ color: darkMode ? "#FFFFFF" : "#374151" }}>
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={(theme) => navbarIconButton(theme, { darkMode })}
                onClick={() => setOpenMessage(true)}
              >
                <Icon sx={{ color: darkMode ? "#FFFFFF" : "#374151" }}>message</Icon>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={(theme) => navbarIconButton(theme, { darkMode })}
                onClick={handleToggleDarkMode}
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <Icon sx={{ color: darkMode ? "#FFFFFF" : "#374151" }}>
                  {darkMode ? "light_mode" : "dark_mode"}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={(theme) => navbarIconButton(theme, { darkMode })}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon sx={{ color: darkMode ? "#FFFFFF" : "#374151" }}>notifications</Icon>
              </IconButton>
              {renderMenu()}
              {/* Support Chat Dialog */}
              <Dialog
                open={openMessage}
                onClose={() => setOpenMessage(false)}
                maxWidth="sm"
                fullWidth
                BackdropProps={{
                  sx: {
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  }
                }}
                PaperProps={{
                  sx: {
                    background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.94) 76.65%)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {/* Header */}
                <DialogTitle
                  sx={{
                    background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                    color: '#FFFFFF',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <VuiBox display="flex" alignItems="center" gap={2}>
                    <Icon sx={{ fontSize: '28px' }}>chat_bubble</Icon>
                    <VuiBox>
                      <VuiTypography variant="h6" color="white" fontWeight="bold">
                        Support Chat
                      </VuiTypography>
                      <VuiTypography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        We're here to help! 😊
                      </VuiTypography>
                    </VuiBox>
                  </VuiBox>
                  <IconButton
                    onClick={() => setOpenMessage(false)}
                    sx={{ color: 'white' }}
                  >
                    <Icon>close</Icon>
                  </IconButton>
                </DialogTitle>

                <DialogContent sx={{ padding: '24px', maxHeight: '500px', overflowY: 'auto' }}>
                  {/* Welcome Message */}
                  <VuiBox
                    sx={{
                      background: 'rgba(99, 102, 241, 0.1)',
                      borderRadius: '12px',
                      padding: '16px',
                      marginBottom: '24px',
                    }}
                  >
                    <VuiTypography variant="body2" color="white" sx={{ lineHeight: 1.6 }}>
                      👋 Hello! How can we help you today? Select a question below or type your own.
                    </VuiTypography>
                  </VuiBox>

                  {/* Quick Questions */}
                  <VuiTypography
                    variant="caption"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      marginBottom: '12px',
                      display: 'block',
                    }}
                  >
                    Quick Questions
                  </VuiTypography>

                  <VuiBox sx={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                    {[
                      'How can I check my attendance?',
                      'Where can I find my course materials?',
                      'How do I submit assignments?',
                      'When is the next webinar?',
                      'How can I contact my instructor?',
                    ].map((question, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        sx={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          padding: '12px 16px',
                          textTransform: 'none',
                          color: 'rgba(255, 255, 255, 0.8)',
                          justifyContent: 'flex-start',
                          textAlign: 'left',
                          fontFamily: 'Poppins, sans-serif',
                          '&:hover': {
                            background: 'rgba(99, 102, 241, 0.2)',
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                          },
                        }}
                      >
                        <Icon sx={{ marginRight: '12px', fontSize: '20px', color: 'rgba(139, 92, 246, 0.8)' }}>
                          chat_bubble_outline
                        </Icon>
                        {question}
                      </Button>
                    ))}
                  </VuiBox>
                </DialogContent>

                {/* Footer with Input */}
                <DialogActions
                  sx={{
                    padding: '16px 24px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    gap: '12px',
                  }}
                >
                  <VuiInput
                    placeholder="Type your message here..."
                    fullWidth
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      color: 'white',
                      '& input': {
                        color: 'white',
                      },
                      '& input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                      },
                    }}
                  />
                  <IconButton
                    sx={{
                      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                      color: 'white',
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #5558E3 0%, #7C4DE8 100%)',
                      },
                    }}
                  >
                    <Icon>send</Icon>
                  </IconButton>
                </DialogActions>
              </Dialog>
            </VuiBox>
          </VuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;

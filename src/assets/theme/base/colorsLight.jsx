/**
=========================================================
* Vision UI Dashboard React - Light Theme Colors
=========================================================
* Light theme colors based on the dashboard image
* Dark theme remains completely untouched
*/

const colorsLight = {
  // Background colors - matching the light theme image
  background: {
    default: "#f5f6fa", // Very light grey/off-white main background
  },

  sidenav: {
    button: "#e9efff", // Light grey-blue sidebar background
  },

  text: {
    main: "#000000", // Black text for light theme
    focus: "#000000",
  },

  transparent: {
    main: "transparent",
  },

  white: {
    main: "#ffffff",
    focus: "#ffffff",
  },

  brand: {
    main: "#3a7afe", // Bright blue from image
    focus: "#3a7afe",
  },

  black: {
    light: "#141414",
    main: "#000000",
    focus: "#000000",
  },

  primary: {
    main: "#3a7afe", // Bright Electric Blue for active elements
    focus: "#4d8fff",
  },

  secondary: {
    main: "#000000", // Black for inactive elements
    focus: "#000000",
  },

  lightblue: {
    main: "#3a7afe", // Bright blue
    focus: "#4d8fff",
  },

  orange: {
    main: "#f6ad55",
    focus: "#f6ad55",
  },

  grey: {
    100: "#f5f6fa", // Very light grey background
    200: "#e9efff", // Sidebar background
    300: "#f0f2f5", // Light grey for boxes
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#000000", // Black for text
    900: "#000000", // Black text
  },

  borderCol: {
    main: "#f0f0f0", // Light grey border
    red: "#e31a1a",
    navbar: "rgba(226, 232, 240, 0.3)", // Light grey border for navbar
  },

  // Other colors
  info: {
    main: "#3a7afe", // Bright blue for icons and progress
    focus: "#4d8fff",
    charts: {
      100: "#3a7afe",
      200: "#4d8fff",
      300: "#5da0ff",
      400: "#6eb1ff",
      500: "#7fc2ff",
      600: "#90d3ff",
    },
  },

  success: {
    main: "#01b574", // Green for positive metrics
    focus: "#35d28a",
  },

  warning: {
    main: "#ffb547",
    focus: "#ffcd75",
  },

  error: {
    main: "#e31a1a", // Red for negative metrics
    focus: "#ee5d50",
  },

  light: {
    main: "#3a7afe", // Bright blue for active sidebar item background
    focus: "#4d8fff",
  },

  dark: {
    main: "#000000", // Black for text
    focus: "#000000",
    body: "#f5f6fa", // Light grey main background
  },

  gradients: {
    navbar: {
      deg: "123.64deg",
      main: "rgba(255, 255, 255, 0) -22.38%",
      state: "rgba(255, 255, 255, 0.039) 70.38%",
    },

    sidenav: {
      deg: "127.09",
      main: "rgba(233, 239, 255, 0.94) 19.41%", // Light grey-blue sidebar #e9efff
      state: "rgba(245, 246, 250, 0.49) 76.65%", // Main background #f5f6fa
    },

    borderLight: {
      angle: "94.43% 69.43% at 50% 50%",
      main: "#ffffff 0%",
      state: "rgba(255, 255, 255, 0) 100%",
    },

    borderDark: {
      angle: "69.43% 69.43% at 50% 50%",
      main: "#f0f0f0 0%",
      state: "rgba(240, 240, 240, 0) 100%",
    },

    cover: {
      deg: "159.02",
      main: "#f5f6fa 14.25%", // Main background
      state: "#e9efff 56.45%", // Sidebar background
      stateSecondary: "#ffffff 86.14%", // White cards
    },

    cardDark: {
      deg: "126.97",
      main: "rgba(255, 255, 255, 0.95) 28.26%", // White cards
      state: "rgba(255, 255, 255, 0.98) 91.2%",
    },

    cardLight: {
      deg: "127.09",
      main: "rgba(255, 255, 255, 0.98) 19.41%", // White cards
      state: "rgba(255, 255, 255, 1) 76.65%",
    },

    card: {
      deg: "127.09",
      main: "rgba(255, 255, 255, 0.98) 19.41%", // White cards
      state: "rgba(255, 255, 255, 1) 76.65%",
    },

    menu: {
      deg: "126.97",
      main: "#ffffff 28.26%", // White cards
      state: "#f5f6fa 91.2%", // Main background
    },

    cardContent: {
      deg: "126.97",
      main: "rgb(255, 255, 255) 28.26%", // White cards
      state: "rgb(255, 255, 255) 91.2%",
    },

    box: {
      deg: "126.97",
      main: "rgba(255, 255, 255, 0.95) 28.26%", // White cards
      state: "rgba(255, 255, 255, 0.98) 91.2%",
    },

    bill: {
      deg: "127.09",
      main: "rgba(245, 246, 250, 0.94) 19.41%", // Main background
      state: "rgba(233, 239, 255, 0.49) 76.65%", // Sidebar background
    },

    primary: {
      deg: "97.89",
      main: "#3a7afe",
      state: "#4d8fff",
    },

    secondary: {
      main: "#627594",
      state: "#a8b8d8",
    },

    logo: {
      deg: "97.89",
      main: "#000000 70.67%", // Black text
      state: "rgba(255, 255, 255, 0) 108.55%",
    },

    info: {
      main: "#3a7afe",
      state: "#4d8fff",
    },

    success: {
      main: "#01b574",
      state: "#35d28a",
    },

    warning: {
      main: "#ffb547",
      state: "#ffcd75",
    },

    error: {
      main: "#e31a1a",
      state: "#ee5d50",
    },

    light: {
      main: "#ced4da",
      state: "#ebeff4",
    },

    dark: {
      main: "#ffffff", // White cards
      state: "#f5f6fa", // Main background
    },
  },

  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },

    twitter: {
      main: "#55acee",
      dark: "#3ea1ec",
    },

    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },

    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },

    pinterest: {
      main: "#cc2127",
      dark: "#b21d22",
    },

    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },

    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },

    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },

    dribbble: {
      main: "#ea4c89",
      dark: "#e73177",
    },

    github: {
      main: "#24292e",
      dark: "#171a1d",
    },

    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },

    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },

  alertColors: {
    primary: {
      main: "#3a7afe",
      state: "#4d8fff",
      border: "#c5d5ff",
    },

    secondary: {
      main: "#627594",
      state: "#8ca1cb",
      border: "#dadee6",
    },

    info: {
      main: "#3a7afe",
      state: "#4d8fff",
      border: "#c5d5ff",
    },

    success: {
      main: "#01b574",
      state: "#35d28a",
      border: "#a8e6c8",
    },

    warning: {
      main: "#ffb547",
      state: "#ffcd75",
      border: "#ffe4b3",
    },

    error: {
      main: "#e31a1a",
      state: "#ee5d50",
      border: "#f5b5b5",
    },

    light: {
      main: "#ced4da",
      state: "#d1dae6",
      border: "#f8f9fa",
    },

    dark: {
      main: "#000000", // Black text
      state: "#000000",
      border: "#c2c8d1",
    },
  },

  badgeColors: {
    primary: {
      basic: "#3a7afe",
      background: "#c5d5ff",
      text: "#1e4a99",
    },

    secondary: {
      basic: "#5974a2",
      background: "#e4e8ed",
      text: "#5974a2",
    },

    info: {
      basic: "#3a7afe",
      background: "#c5d5ff",
      text: "#1e4a99",
    },

    success: {
      basic: "#01b574",
      background: "#a8e6c8",
      text: "#01b574",
    },

    warning: {
      basic: "#ffb547",
      background: "#ffe4b3",
      text: "#cc8f38",
    },

    error: {
      basic: "#e31a1a",
      background: "#f5b5b5",
      text: "#b81414",
    },

    light: {
      background: "#ffffff",
      text: "#c7d3de",
    },

    dark: {
      background: "#000000",
      text: "#ffffff",
    },
  },

  inputColors: {
    backgroundColor: "#ffffff", // White search bar
    borderColor: { main: "#f0f0f0", focus: "#3a7afe" }, // Light grey border, blue on focus
    boxShadow: "#c5d5ff",
    error: "#fd5c70",
    success: "#66d432",
  },

  sliderColors: {
    thumb: { borderColor: "#d9d9d9" }, // Light grey
  },

  circleSliderColors: {
    background: "#e9ecef", // Very light grey for progress circle unfilled
  },

  tabs: {
    indicator: { boxShadow: "#ddd" },
  },
};

export default colorsLight;


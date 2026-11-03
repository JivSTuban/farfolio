// Page copy (experience, projects, skills) lives in src/data/profile.js.
// This file keeps only navigation and the 3D hero layout numbers.
export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Experience',
      href: '#experience',
    },
    {
      id: 4,
      name: 'Work',
      href: '#work',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];

  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.6 : isTablet ? 0.7 : 0.9,
      deskPosition: isSmall ? [0, -1, 19] : isMobile ? [0, 1, 21] : isTablet ? [0, 0, 22] : [0, 0, 23],
      ringPosition:
      isSmall
      ? [-7, 4.2, 0]
      : isMobile
      ? [-11, 7.2, 0]
      : isTablet
      ? [-10, 8.2, 0]
      : [-13, 7.2, 0],
      reactPosition: isSmall
        ? [7, 4, 0]
        : isMobile
        ? [11, 7, 0]
        : isTablet
        ? [10, 8, 0]
        : [13, 7, 0],
      targetPosition: isSmall ? [-8, -9.5, -10] : isMobile ? [-9, -7, -10] : isTablet ? [-11, -9, -10] : [-13, -11, -10],
      lazerPosition: isSmall ? [6, -6, 0] : isMobile ? [6.5, -4.5, 0] : isTablet ? [9, -5.5, 0] : [10, -7, 0],
    };
  };

// Card
export const cardAnimation = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.2 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
};

export const cardSlider = {
  hidden: { opacity: 0, x: 300 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export const cardSliderParent = {
  hidden: { x: -300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      staggerChildren: 0.2,
      // when: 'beforeChildren',
      // when: 'afterChildren'
    },
  },
  exit: { x: -300, opacity: 0, transition: { duration: 0.5 } },
};

// Navbar
export const navbarAnimation = {
  hidden: { opacity: 0, y: -90 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: -90, transition: { duration: 0.5 } },
};

// Page
export const pageAnimations = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    // backgroundColor: "white",
    // filter: `invert()`,
    // opacity: 0,
  },
};

// About
export const taglineAnimation = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
  exit: { opacity: 0, x: -200, transition: { duration: 0.5 } },
};

export const avatarAnimation = {
  hidden: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
  exit: { opacity: 0, x: 200, transition: { duration: 0.5 } },
};

export const iconsAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: 100, transition: { duation: 0.5 } },
};

// Hero Section
export const buttonAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
      delay: 2.5,
    },
  },
};

export const typerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 4,
    },
  },
  exit: { opacity: 0, scale: 2, transition: { duration: 0.5 } },
};

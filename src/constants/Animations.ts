export const animations = {
  hidden: {
    opacity: 0, y: 10, transition: { duration: 0.5 }
  },
  visible: {
    opacity: 1, y: 0, transition: { duration: 0.5 }
  },
  slideInFromBottom: {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,

      },
    },
  },
  slideInFromLeft: {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5
      },
    },
  },
  slideInFromRight: {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5
      },
    },
  }
}
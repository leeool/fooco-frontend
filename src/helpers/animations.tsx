const animateLeft = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 1,
      stiffness: 1000,
      damping: 200,
      duration: 0.8,
    },
    viewport: { once: false, amount: 0.1 },
  },
}

const animateRight = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 1,
      stiffness: 1000,
      damping: 200,
      bounce: 0.8,
      duration: 0.8,
    },
    viewport: { once: false, amount: 0.1 },
  },
}

export { animateLeft, animateRight }

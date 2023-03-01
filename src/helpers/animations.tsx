const animateLeft = {
  hidden: { x: "-5rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring", duration: 1, bounce: 0.25 },
}

const animateRight = {
  hidden: { x: "5rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring", duration: 1, bounce: 0.25 },
}

export { animateLeft, animateRight }

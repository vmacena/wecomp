import facepaint from "facepaint";

const breakpoints = [480, 768, 1024];

export const mq = facepaint(breakpoints.map(bp => `@media (max-width: ${bp}px)`));

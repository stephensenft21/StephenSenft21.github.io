export const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    in: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.5
        }
    },
    out: {
        opacity: 0,
        y: -10
    }
};

export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3
};
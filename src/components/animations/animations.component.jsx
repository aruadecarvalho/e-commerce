import { motion } from "framer-motion";
import { forwardRef } from "react";

export const ComponentAnimation = forwardRef(({ children, ...props }, ref) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          y: 25,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.125,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
});

export const CartDropdownAnimation = forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: 0,
            x: "calc(100vw - 400px)",
            zIndex: 5,
            position: "absolute",
            opacity: 0,
          },
          visible: {
            y: 60,
            x: "calc(100vw - 400px)",
            zIndex: 5,
            position: "absolute",
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

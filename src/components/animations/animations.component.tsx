import { motion } from "framer-motion";
import { forwardRef, FC, ReactElement } from "react";

type ComponentAnimationProps = { children: ReactElement };
export const ComponentAnimation: FC<ComponentAnimationProps> = forwardRef(
  ({ children, ...props }) => {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: 10,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.05,
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

export const CartDropdownAnimation: FC<ComponentAnimationProps> = forwardRef(
  ({ children, ...props }) => {
    return (
      <motion.div
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
              delay: 0.075,
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

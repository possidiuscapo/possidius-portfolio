import { animate, motion } from "framer-motion";
import React from "react";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index fot stogrred delay

const reversIndex = (index: number) => {
  const totalSteps = 8; //number of steps
  return totalSteps - index - 1;
};

const Stairs: React.FC = () => {
  return (
    <>
      {/* 



  */}

      {[...Array(8)].map((_, index: number) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="inital"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reversIndex(index) * 0.1, //delay based on index
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;

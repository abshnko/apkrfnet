import React from "react";
import { motion } from "framer-motion";

const MainContainer = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <div style={{ width: "80%", margin: "0 auto", marginTop: "8rem" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default MainContainer;

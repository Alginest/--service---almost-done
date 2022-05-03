import React from "react";
import { motion } from "framer-motion";
const Shop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      Shop
    </motion.div>
  );
};

export default Shop;

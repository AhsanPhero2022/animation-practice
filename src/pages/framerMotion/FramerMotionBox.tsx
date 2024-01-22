import { motion } from "framer-motion";

const FramerMotionBox = () => {
  return (
    <motion.div
      className="bg-red-500 w-[100px] h-[100px] mx-auto mt-32 rounded-md"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, type: "spring" }}
    ></motion.div>
  );
};

export default FramerMotionBox;

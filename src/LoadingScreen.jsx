import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Rocket, Satellite, Orbit } from "lucide-react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" },
      });

      if (onLoadingComplete) {
        setTimeout(onLoadingComplete, 2500);
      }
    };

    sequence();

    return () => controls.stop();
  }, [controls, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0A0F1E] flex items-center justify-center flex-col overflow-hidden"
    >
      
      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "backOut",
        }}
        className="relative z-10"
      >
        <div className="w-48 h-48 border-2 bg-[#0A0F1E] border-blue-500/30 rounded-2xl flex items-center justify-center">
          <img
            src="/Logo.svg"
            alt="Company Logo"
            className="w-32 h-32 text-white"
                  />
                  
        </div>
          </motion.div>
          {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <div className="flex justify-center items-center space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  repeatType: "reverse",
                }}
                className="w-3 h-3 bg-blue-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      
  );
};

export default LoadingScreen;

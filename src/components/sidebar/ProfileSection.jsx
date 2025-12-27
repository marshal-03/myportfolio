import React from "react";
import { motion } from "framer-motion";

const ProfileSection = ({
  variants = null,
  itemVariants = null,
  isMobileHeader = false,
}) => {
  const containerVariants = variants || {};
  const animItemVariants = itemVariants || {};

  if (isMobileHeader) {
    return (
      <div className="flex items-center gap-3 py-0">
        <img
          src="/profile.png"
          alt="Marshalp"
          className="w-12 h-12 rounded-xl object-cover cursor-pointer flex-shrink-0 hover:scale-105 transition-transform"
        />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-black text-sm truncate">Marshalp</p>
          <p className="text-gray-400 text-xs truncate">
            marshalp006@gmail.com
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={variants ? containerVariants : {}}
      initial={variants ? "hidden" : false}
      animate={variants ? "visible" : false}
      className="p-6 flex items-center gap-3"
    >
      <motion.img
        src="/profile.png"
        alt="Marshalp"
        className="w-16 h-16 rounded-2xl object-cover cursor-pointer"
        whileHover={{ scale: 1.05 }}
      />
      <div>
        <p className="font-semibold text-black text-sm">Marshalp</p>
        <p className="text-gray-400 text-[13px] truncate">
          marshalp006@gmail.com
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileSection;

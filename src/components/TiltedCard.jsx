import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function TiltedCard({
  imageSrc,
  imageHeight = "100%",
  rotateAmplitude = 12,
  scaleOnHover = 1.08,
}) {
  const ref = useRef(null);

  const rotateX = useSpring(0, { stiffness: 120, damping: 12 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 12 });
  const scale = useSpring(1, { stiffness: 120, damping: 12 });

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((-offsetY / (rect.height / 2)) * rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleEnter() {
    scale.set(scaleOnHover);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <div
      ref={ref}
      className="w-full h-full [perspective:900px] overflow-hidden"
      onMouseMove={handleMouse}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="w-full h-full"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        <img
          src={imageSrc}
          alt="project"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

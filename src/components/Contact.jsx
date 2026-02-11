import { motion } from "framer-motion";
import { ArrowUpRight, Send, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const ovalRef = useRef(null);

  useEffect(() => {
    if (ovalRef.current) {
      gsap.timeline({ repeat: -1 }).to(ovalRef.current, {
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 30% 70% 70% 30%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
        ],
        duration: 8,
        ease: "none",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="w-full pl-[17px] pr-[17px] py-[25px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full max-w-[1400px] mx-auto rounded-3xl bg-black text-white overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
          <div
            className="absolute w-[500px] h-[500px] border border-[#002CD6]/30 rounded-[40%] 
                       blur-[2px] -left-20 -top-20 -rotate-12"
            style={{
              boxShadow: "0 0 40px rgba(0, 44, 214, 0.2), inset 0 0 40px rgba(0, 44, 214, 0.2)"
            }}
          ></div>
          <div
            className="absolute w-[600px] h-[400px] border border-purple-600/20 rounded-[50%] 
                       blur-[1px] -right-20 bottom-10 rotate-12"
            style={{
              boxShadow: "0 0-30px rgba(124, 58, 237, 0.1), inset 0 0 30px rgba(124, 58, 237, 0.1)"
            }}
          ></div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 lg:p-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-between h-full"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-1 text-primary mb-2"
              >
                <span className="text-[14px] font-medium" style={{ fontFamily: 'Poppins' }}>Contact</span>
                <TrendingUp size={14} />
              </motion.div>


              <div className="space-y-3">
                <motion.h2
                  variants={itemVariants}
                  className="font-poppins font-medium text-white"
                  style={{
                    fontSize: "clamp(24px, 5vw, 41px)",
                    lineHeight: "clamp(32px, 6vw, 56px)",
                    letterSpacing: "0%",
                    fontFamily: "Poppins",
                  }}
                >
                  very great journey starts with a simple conversation.
                </motion.h2>

                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 cursor-pointer"
                  whileHover={{ x: 10, color: "#001AA3" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontSize: "clamp(24px, 5vw, 41px)",
                    lineHeight: "clamp(32px, 6vw, 56px)",
                    fontWeight: "500",
                    fontFamily: "Poppins",
                    color: "#002CD6",
                    width: "fit-content",
                  }}
                >
                  Tell us yours
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowUpRight size={28} className="flex-shrink-0" />
                  </motion.div>
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="mt-8 lg:mt-12 text-gray-400"
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "26px",
                  maxWidth: "400px",
                  alignSelf: "flex-end"
                }}
              >
                Great products start with understanding. We listen, design with
                purpose, and create experiences people trust.
              </motion.p>
            </motion.div>

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5 sm:space-y-6"
            >
              {["name", "email", "subject", "message"].map((field) => (
                <motion.div
                  key={field}
                  variants={itemVariants}
                  className="relative space-y-0"
                >
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder=" "
                      rows="2"
                      className="peer w-full px-0 py-3 sm:py-4 bg-transparent text-white text-sm 
                                  border-b border-gray-600 focus:border-primary
                                  focus:outline-none transition-all resize-none"
                      style={{ fontFamily: 'Poppins' }}
                    />
                  ) : (
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-0 py-3 sm:py-4 bg-transparent text-white text-sm 
                                  border-b border-gray-600 focus:border-primary
                                  focus:outline-none transition-all"
                      style={{ fontFamily: 'Poppins' }}
                    />
                  )}

                  <label
                    className="
                      absolute left-0 text-sm text-gray-400 pointer-events-none
                      transition-all duration-300

                      top-3 sm:top-4

                      peer-focus:top-0
                      peer-focus:text-xs
                      peer-focus:text-gray-300

                      peer-[&:not(:placeholder-shown)]:top-0
                      peer-[&:not(:placeholder-shown)]:text-xs
                      peer-[&:not(:placeholder-shown)]:text-gray-300
                    "
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {field === "name"
                      ? "Your Name"
                      : field === "email"
                        ? "Email Address"
                        : field === "subject"
                          ? "Subject"
                          : "Message"}
                  </label>
                </motion.div>
              ))}

              <motion.button
                variants={itemVariants}
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 sm:py-4 text-white font-semibold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #5B7AF3 0%, #002CD6 47.12%, #133CDD 58.17%, #5B7AF3 100%)",
                  marginTop: "8px",
                  fontFamily: "Poppins",
                }}
              >
                <span>Submit</span>
                <Send size={16} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section >
  );
}

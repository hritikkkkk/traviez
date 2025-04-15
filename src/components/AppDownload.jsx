import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Phone from "./Phone";

export default function AppDownload() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-black to-gray-900 py-16 md:py-24"
    >
     
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-red-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
              variants={itemVariants}
            >
              Explore the World with Traviez
            </motion.h2>

            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                className="flex items-start gap-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 p-3 shadow-lg shadow-orange-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Customize Your Itinerary
                  </h3>
                  <p className="text-gray-300">
                    Create personalized itineraries that are tailored to your
                    interests and preferences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 p-3 shadow-lg shadow-orange-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                      clipRule="evenodd"
                    />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Manage Your Entire Trip
                  </h3>
                  <p className="text-gray-300">
                    Manage all aspects of your trip, from flights and hotels to
                    car rentals and activities.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 p-3 shadow-lg shadow-orange-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Discover The Best Experiences
                  </h3>
                  <p className="text-gray-300">
                    From the hottest restaurants to the best activities, our app
                    has everything you need.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              variants={containerVariants}
            >
              <motion.a
                href="#download-ios"
                className="flex items-center gap-3 bg-white border border-gray-700 hover:border-gray-500 rounded-xl px-6 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-white ">
                  <img
                    src="https://www.traviez.com/apple.png"
                    alt="App Store"
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-700 group-hover:text-gray-900">
                    Download on the
                  </div>
                  <div className="text-black font-semibold text-lg">
                    App Store
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="#download-android"
                className="flex items-center gap-3 bg-black border border-gray-700 hover:border-gray-500 rounded-xl px-6 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-black">
                  <img
                    src="https://www.traviez.com/google.png"
                    alt="Google Play"
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300">
                    GET IT ON
                  </div>
                  <div className="text-white font-semibold text-lg">
                    Google Play
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          <Phone />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill="#ffffff"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
}

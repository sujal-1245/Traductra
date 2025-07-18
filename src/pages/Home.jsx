import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaLanguage, FaRandom } from "react-icons/fa";
import heroVideo from "../assets/hero-bg.mp4";
import translatorImg from "../assets/translator-preview.webp";
import randomGenImg from "../assets/random-preview.jpg";
import floatingIcon from "../assets/floating-icon.png";

const Home = () => {
  return (
    <div className="overflow-hidden font-sans text-white bg-black">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4"
>
  <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
    Welcome to <span className="text-orange-400">Traductra</span>
  </h1>
  <p className="text-lg md:text-xl max-w-xl text-gray-300">
    Your one-stop portal for text translations and string generation. Powered by AI, packed with simplicity.
  </p>

  <div className="mt-8 flex gap-6">
    
    <a
      href="#features"
      className="group bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition flex items-center"
    >
      Get Started
      <motion.span
        className="ml-2 group-hover:animate-bounce"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
        whileHover={{}} 
        
      >
        <FaArrowDown />
      </motion.span>
    </a>
  </div>
</motion.div>


        {/* Floating Icon */}
        <a href="#features">
            <motion.img
          src={floatingIcon}
          alt="floating"
          className="absolute bottom-10 right-10 w-16 h-16 animate-bounce z-30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        />
        </a>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-20 bg-gradient-to-b from-zinc-900 to-black text-white">
        <h2 className="text-4xl font-bold text-center mb-16">
          What You Can Do with <span className="text-orange-400">Traductra</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-gray-800/10 to-gray-800/50 rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center border border-gray-700"
          >
            <img
              src={translatorImg}
              alt="Translator Preview"
              className="w-full h-64 object-cover rounded-xl mb-4 shadow-md"
            />
            <FaLanguage className="text-5xl text-orange-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Translate Any Text</h3>
            <p className="text-gray-300">
              Instantly translate your English input to over 100 languages using our smooth and simple translator powered by RapidAPI.
            </p>
            <Link
              to="/translator"
              className="bg-orange-500 mt-10 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition"
            >
              Try Translator <FaArrowRight className="inline ml-2" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-800/10 to-gray-800/50 rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center border border-gray-700"
          >
            <img
              src={randomGenImg}
              alt="Generator Preview"
              className="w-full h-64 object-cover rounded-xl mb-4 shadow-md"
            />
            <FaRandom className="text-5xl text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Generate Random Strings</h3>
            <p className="text-gray-300">
              Create secure, random strings for fun or functionality. Use for passwords, tokens, or any creative purpose.
            </p>
            <Link
              to="/generator"
              className="bg-blue-500 mt-10 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
            >
              Generate Strings <FaArrowRight className="inline ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 -mt-1">
  <svg
    className="w-full h-40 md:h-52 lg:h-64"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2b2b2b" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
    </defs>
    <path
      fill="url(#waveGradient)"
      d="
        M0,160 
        C360,240 1080,80 1440,160 
        L1440,320 
        L0,320 
        Z
      "
    >
      <animate
        attributeName="d"
        dur="8s"
        repeatCount="indefinite"
        values="
          M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z;
          M0,140 C400,60 1040,240 1440,120 L1440,320 L0,320 Z;
          M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
      />
    </path>
  </svg>
</div>


      

      
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLanguage, FaRandom } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-[#0f0f0f]/70 backdrop-blur-md fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-yellow-400 tracking-wide"
        >
          Traductra
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <ul className="flex gap-8 text-white font-medium text-sm md:text-base">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 hover:drop-shadow-md transition-all flex items-center gap-2"
              >
                <IoHomeOutline className="text-lg" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/translator"
                className="hover:text-yellow-300 hover:drop-shadow-md transition-all flex items-center gap-2"
              >
                <FaLanguage className="text-lg" /> Translator
              </Link>
            </li>
            <li>
              <Link
                to="/generator"
                className="hover:text-yellow-300 hover:drop-shadow-md transition-all flex items-center gap-2"
              >
                <FaRandom className="text-lg" /> Random String
              </Link>
            </li>
          </ul>
        </motion.nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Link
            to="/translate"
            className="hidden md:block bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-4 py-2 rounded-xl shadow-lg"
          >
            Try Now
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

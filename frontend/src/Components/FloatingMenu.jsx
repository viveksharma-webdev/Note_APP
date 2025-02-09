import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation
  const navigateTo = (path) => {
    // Navigate to the desired route (React Router will handle the route)
    navigate(path);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Links (Hidden Initially) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-12 flex flex-col space-y-2 bg-white p-3 rounded-md shadow-lg"
        >
          <button
            onClick={() => navigateTo("/notes/text")}
            className="block px-3 py-1 text-blue-500 hover:underline text-xl font-semibold"
          >
            Text
          </button>
          <button
            onClick={() => navigateTo("/notes/audio")}
            className="block px-3 py-1 text-red-500 hover:underline text-xl font-semibold"
          >
            Record
          </button>
        </motion.div>
      )}

      {/* Plus Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-all"
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default FloatingMenu;

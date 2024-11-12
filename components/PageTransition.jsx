'use client';

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairsComponent = () => {
  const stairAnimation = {
    initial: {
      top: "0%"
    },
    animate: {
      top: "100%"
    },
    exit: {
      top: ["100%", "0%"]
    }
  };

  const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };

  return (
    <div className="fixed inset-0 flex">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="flex-1 bg-black relative"
        />
      ))}
    </div>
  );
};

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {children}
        <StairsComponent />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;














// 'use client';

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// const PageTransition = ({ children }) => {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={pathname}
//         initial={{ 
//           rotateY: -90,
//           opacity: 0,
//           transformPerspective: 1000,
//           transformOrigin: "50% 50%"
//         }}
//         animate={{ 
//           rotateY: 0,
//           opacity: 1,
//           transition: {
//             duration: 0.6,
//             ease: [0.22, 1, 0.36, 1]
//           }
//         }}
//         exit={{ 
//           rotateY: 90,
//           opacity: 0,
//           transition: {
//             duration: 0.6,
//             ease: [0.22, 1, 0.36, 1]
//           }
//         }}
//         style={{
//           width: '100%',
//           height: '100%'
//         }}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default PageTransition;
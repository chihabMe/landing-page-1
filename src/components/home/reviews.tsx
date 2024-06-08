import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    avatar: "/images/avatar.webp",
    username: "Alice Johnson",
    job: "Product Manager",
    text: "The new platform has revolutionized our workflow, making everything seamless and efficient. Highly recommended!",
  },
  {
    avatar: "/images/avatar.webp",
    username: "Michael Smith",
    job: "UI/UX Designer",
    text: "An absolute game-changer in user experience! The intuitive design and smooth performance are top-notch.",
  },
  {
    avatar: "/images/avatar.webp",
    username: "Sara Lee",
    job: "Software Engineer",
    text: "Our team's productivity has increased significantly thanks to the streamlined processes. Great job!",
  },
];

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = () => {
    setDirection(1);
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };


  const currentReview = reviews[currentReviewIndex];

  return (
    <section className="py-10">
      <div className="flex bg-blue-400 flex-col items-center p-8 py-10 rounded-xl shadow-lg mx-auto container">
        <h1 className="text-white text-center font-bold text-4xl mb-6">
          What Our Customers Are Saying
        </h1>

        <div className="relative py-8 flex space-x-2 w-full">
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-3"
          >
            <ChevronLeft size={32} className="text-white" />
          </motion.button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) {
                  handlePrev();
                } else if (info.offset.x < -100) {
                  handleNext();
                }
              }}
              key={currentReviewIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center items-center"
            >
              <div className="flex items-center w-full max-w-[900px] justify-between text-center">
                <div className="flex space-x-8">
                  <img
                    src={currentReview.avatar}
                    className="w-16 h-16 rounded-full mb-4 shadow-md"
                    alt={`${currentReview.username} avatar`}
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-white">
                      {currentReview.username}
                    </h3>
                    <h4 className="text-gray-100">{currentReview.job}</h4>
                  </div>
                </div>
                <p className="text-white w-[400px] text-lg mt-4 px-6">
                  {currentReview.text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-3"
          >
            <ChevronRight size={32} className="text-white" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    avatar: "/images/avatar.webp",
    username: "Alice Johnson",
    job: "Product Manager",
    text: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely.",
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

  {
    avatar: "/images/avatar.webp",
    username: "Alice Johnson",
    job: "Product Manager",
    text: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely.",
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

  const handleDotClick = (index:number) => {
    if (index >= 0 && index < reviews.length) {
      setDirection(index > currentReviewIndex ? 1 : -1);
      setCurrentReviewIndex(index);
    }
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <section className="py-10">
      <div className="flex relative overflow-hidden bg-blue-400 flex-col items-center p-8 py-14 rounded-xl shadow-lg mx-auto container">
        <img
          className="absolute -top-2 -right-2 w-24 h-24"
          src="/images/element.webp"
          alt="Element"
        />
        <h1 className="text-white text-center font-bold text-4xl mb-6">
          What our customers are saying
        </h1>
        <img className="py-2 " alt="white rectangle" src="/images/white-rectangle.webp" />

        <div className="relative py-20 flex space-x-2 w-full">
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
                <div className="flex items-center space-x-8">
                  <img
                    src={currentReview.avatar}
                    className="w-30 h-30 rounded-full mb-4 shadow-md"
                    alt={`${currentReview.username} avatar`}
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-white">
                      {currentReview.username}
                    </h3>
                    <h4 className="text-gray-100">{currentReview.job}</h4>
                  </div>
                </div>
                <p className="text-white w-[500px] text-left text-lg mt-4 px-6">
                  "{currentReview.text}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center space-x-20 items-center max-w-screen-sm mx-auto py-10 w-full">
        <motion.button onClick={handlePrev} className="rounded-full p-3">
          <ChevronLeft size={32} className="text-blue-500" />
        </motion.button>
        <div className="flex items-center space-x-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentReviewIndex
                  ? "bg-blue-500"
                  : "  bg-blue-200"
              }`}
            />
          ))}
        </div>
        <motion.button onClick={handleNext} className="rounded-full p-3">
          <ChevronRight size={32} className="text-blue-500" />
        </motion.button>
      </div>
    </section>
  );
}

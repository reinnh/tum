import { heropicture } from "../../utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Hero() {
  return (
    <div className="hidden md:block relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        effect="fade" // 👈 Smooth fade effect
        loop
        className="w-full h-full"
      >
        {heropicture.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.img
              src={item.src}
              alt={`Slide ${item.id}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }} // Start hidden
              animate={{ opacity: 1 }} // Fade in smoothly
              exit={{ opacity: 0 }} // Fade out smoothly
              transition={{ duration: 1.5 }} // 👈 Slow, smooth transition
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute left-5 top-1/2 transform -translate-y-1/2 p-3 bg-gray-900/50 text-white rounded-full z-10">
        <ChevronLeft size={30} />
      </button>
      <button className="next-btn absolute right-5 top-1/2 transform -translate-y-1/2 p-3 bg-gray-900/50 text-white rounded-full z-10">
        <ChevronRight size={30} />
      </button>
    </div>
  );
}

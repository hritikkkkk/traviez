"use client";

import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function TravelCard({
  title,
  subtitle,
  priceRange,
  duration,
  location,
  logoSrc,
  images,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-w-[300px] w-[300px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
      <div className="relative h-48">
        {images && images.length > 0 && (
          <>
            <img
              src={images[currentImageIndex].src || "/placeholder.svg"}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 flex gap-1">
              <button
                onClick={prevImage}
                className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <img
            src={logoSrc || "/placeholder.svg"}
            alt="Logo"
            className="w-6 h-6 rounded-full"
          />
        </div>
        <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
        <div className="flex text-orange-500 justify-between text-sm">
          <span>₹ {priceRange}</span>
          <div className="flex ">
            <Calendar className="w-4 h-4 mr-2 " />
            {duration} days
          </div>
        </div>
        <div className="flex mt-2 text-sm text-orange-500">
          <MapPin className="w-4 h-4 mr-1" />

          {location}
        </div>
      </div>
    </div>
  );
}

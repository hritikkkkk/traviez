"use client";

import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import ScrollHeader from "./ScrollHeader";

const DestinationCard = ({
  title,
  author,
  priceRange,
  days,
  location,
  images,
}) => {
  return (
    <div className="min-w-[320px] max-w-[320px]  rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 snap-start hover:shadow-md transition-shadow duration-300 ">
      <div className="relative aspect-[5/3] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1 ">
          <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={images[2]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold leading-tight line-clamp-2 min-h-[0.5rem] text-gray-800">
          {title}
        </h3>

        <div className="flex items-center bg-gray-200 rounded-full w-fit">
          <img
            src="https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/5aefc5c9-d3ff-4244-8c43-b70036d1982a-57898260-43407130-53635111-95758831-62159716-01-29-2024-14-12-10-profilePic.jpg"
            alt="Author"
            className="w-5 h-5 rounded-full mr-2 border border-white shadow-sm"
          />
          <span className="text-gray-500 text-xs mr-2">By {author}</span>
        </div>
        <div className="h-px my-0.5 bg-gray-100 w-full "></div>

        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-5 h-5 mr-1.5 text-gray-400" />
          <span>{location}</span>
        </div>

        <div className="flex justify-between items-center mt-auto pt-1">
          <div className="flex items-center text-orange-500 font-semibold">
            <span className="w-5  text-xl ml-0.5 ">₹ </span>
            <span className="text-sm ">{priceRange}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-5 h-5 mr-1.5 text-gray-500" />
            <span>{days} days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DestinationCarousel({ title, destinations }) {
  const carouselRef = useRef(null);

  return (
    <section className="p-10">
      <div className="px-4 mb-5">
        <ScrollHeader title={title} scrollRef={carouselRef} />
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto hide-scrollbar gap-5 pb-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {destinations.map((item) => (
          <DestinationCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

import { useRef } from "react";

import ScrollHeader from "./ScrollHeader";

const articles = [
  {
    id: 1,
    title:
      "Unveiling India's Hidden Gems: Breathtaking Waterfalls and Pristine Lakes",
    image:
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/Articles/India's+Hidden+Waterfalls/Athirippailly+Falls.jpg", // Replace with your actual image paths
    author: "By Traviez",
  },
  {
    id: 2,
    title: "India's Eco-friendly Travel Adventures",
    image:
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/Articles/India's+Eco-friendly+Travel+Adventures/Dzukou+Valley.jpg",
    author: "By Traviez",
  },
  {
    id: 3,
    title: "Unveiling India's Most Grand Stately Palaces",
    image:
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/Articles/India's+Most+Grand+Stately+Palaces/Bangalore.jpg",
    author: "By Traviez",
  },
  {
    id: 4,
    title: "Unveiling India's Hidden Beaches and Coastal Getaways",
    image:
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/Articles/India's+Hidden+Beaches+and+Coastal+Getaways/Kerala.jpg",
    author: "By Traviez",
  },
  {
    id: 5,
    title:
      "Celebrate New Beginnings: Discover the Best Destinations to Welcome 2024",
    image:
      "https://images.pexels.com/photos/769525/pexels-photo-769525.jpeg?cs=srgb&dl=pexels-rakicevic-nenad-233369-769525.jpg&fm=jpg",
    author: "By Traviez",
  },
  {
    id: 6,
    title: "Unveiling Offbeat Destinations for Curious Travelers in Indiar",
    image:
      "https://i.pinimg.com/474x/e3/0e/a1/e30ea13b9754f4a8f0c304596104b47c.jpg",
    author: "By Traviez",
  },
  {
    id: 7,
    title: "Travel for Photographers in India",
    image:
      "https://media.istockphoto.com/id/1034301914/photo/nature-photographer-norway-lofoten-archipelago.jpg?s=612x612&w=0&k=20&c=Ld-m38V3XfYKsiBtcYTdCfsNJNj7QgGjyGOxlHIU-a0=",
    author: "By Traviez",
  },
  {
    id: 8,
    title:
      "India's Offbeat Shopping Experiences: Beyond the Tourist Traps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfADGA0ZpOq_Pz1vAbv5TGKGM_57bN7XE0DQ&s",
    author: "By Traviez",
  },
  {
    id: 9,
    title:
      "Thrilling Wildlife Adventures in India's National Parks",
    image:
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/Articles/Thrilling+Wildlife+Adventures+in+India/Gir+National+Park.jpg",
    author: "By Traviez",
  },
  {
    id: 10,
    title:
      "Top 10 Winter Holiday Destinations in India for a Family Vacation",
    image:
      "https://media.istockphoto.com/id/1160947136/photo/couple-relax-on-the-beach-enjoy-beautiful-sea-on-the-tropical-island.jpg?s=612x612&w=0&k=20&c=WJWEH22TFinjI0edzblfH-Nw0cdBfPX5LV8EMvs8Quo=",
    author: "By Traviez",
  },
  {
    id: 11,
    title:
      "Unveiling India's Most Grand Stately Palaces",
    image:
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/Articles/India's+Most+Grand+Stately+Palaces/Jodhpur.jpg",
    author: "By Traviez",
  },
];

export default function Articles() {
  const scrollContainerRef = useRef(null);

  return (
    <section className=" px-10 bg-white">
      <div className="container mx-auto px-4">
        <ScrollHeader title="Articles" scrollRef={scrollContainerRef} />
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="grid grid-flow-col  auto-cols-max gap-4 min-w-max grid-rows-2">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }) {
  return (
    <div
      className="w-[300px] h-[250px] rounded-lg overflow-hidden relative group cursor-pointer"
      style={{
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img src={article.image} className="w-full h-full object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

      <div className="absolute top-4 left-3  right-42 flex items-center gap-2 rounded-full backdrop-blur-lg text-white  py-1 ">
        <img
          src="https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/5aefc5c9-d3ff-4244-8c43-b70036d1982a-57898260-43407130-53635111-95758831-62159716-01-29-2024-14-12-10-profilePic.jpg"
          alt="Traviez"
          width={32}
          height={32}
          className="rounded-full "
        />
        <span className="text-sm font-medium">{article.author}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-xl font-bold leading-tight line-clamp-2">
          {article.title}
        </h3>
      </div>

      <div
        className="absolute inset-0 bg-orange-500/10 opacity-0 transition-opacity duration-300"
        style={{
          opacity: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0";
        }}
      />
    </div>
  );
}

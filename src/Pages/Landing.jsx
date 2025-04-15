import { ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import Temple from "@/components/Temple";
import AppDownload from "@/components/AppDownload";
import Articles from "@/components/Articles";
import Footer from "@/components/footer";
import Recommendations from "@/components/Recommendations";
import WildLife from "@/components/Wildlife";
import Header from "@/components/Header";
import VaranasiBanner from "@/components/VaranasiBanner";
export default function Landing() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative h-[500px]  overflow-hidden ">
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{
              backgroundImage:
                "url('https://www.traviez.com/homebigimage.png')",
            }}
          ></div>

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
            <p className="text-lg md:text-xl mb-2 tracking-wide">
              Experience travel like never before
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow">
              Effortless Journeys Await
            </h1>

            <p className="text-base md:text-lg mb-8 text-white/90">
              Discover top destinations, curated trips, and seamless booking
              with Traviez.
            </p>

            <div className="bg-white rounded-full shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center p-2 w-full max-w-3xl mx-4 gap-2 sm:gap-0">
              <div className="flex items-center text-[#FF5733] pl-4 pr-2">
                <span className="text-xl">🌐</span>
              </div>

              <input
                type="text"
                placeholder="Enter your place of destination"
                className="flex-1 py-2 px-3 outline-none text-gray-700 text-sm"
              />

              <div className="flex items-center justify-end gap-2 pr-2">
                <div className="hidden sm:flex items-center gap-1 text-gray-700 border-l pl-4">
                  <span className="text-sm">Types</span>
                  <ChevronRight className="h-5 w-5 text-[#FF5733]" />
                </div>

                <button className="bg-gray-200 p-3 rounded-full text-gray-600 hover:bg-gray-300 transition">
                  <SlidersHorizontal className="h-5 w-5" />
                </button>

                <button className="bg-[#FF5733] p-3 rounded-full text-white hover:bg-[#e14e2e] transition">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-10 py-6">
          <div className="container mx-auto px-4">
            <div className=" mb-6">
              <h2 className="text-3xl text-center font-bold text-red-900">
                Explore By Destination Type
              </h2>
            </div>

            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                >
                  <div className="mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      width={100}
                      height={100}
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                  <h3 className="text-center font-medium">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Recommendations />
        <VaranasiBanner />

        <Temple />
        <WildLife />
        <Articles />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}

const categories = [
  {
    name: "Beaches",
    image:
      "https://traviez-public.s3.ap-south-1.amazonaws.com/category/beaches.png",
  },
  {
    name: "Rainy Hill Station",
    image:
      "https://traviez-public.s3.ap-south-1.amazonaws.com/category/rainy_hill_station.png",
  },
  {
    name: "Snow Hill Station",
    image:
      "https://traviez-public.s3.ap-south-1.amazonaws.com/category/snow_hill_station.png",
  },
  {
    name: "Religious Place",
    image:
      "https://traviez-public.s3.ap-south-1.amazonaws.com/category/religious_place.png",
  },
  {
    name: "Cultural City",
    image:
      "https://traviez-public.s3.ap-south-1.amazonaws.com/category/cultural_city.png",
  },
  {
    name: "Urban City",
    image:
      "https://traviez-public.s3.ap-south-1.amazonaws.com/category/city.png",
  },
];

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScrollHeader({ title, scrollRef }) {
  const scrollLeft = () => {
    if (scrollRef?.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef?.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
      <div className="flex gap-2">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-colors hover:bg-gray-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollRight}
          className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center transition-opacity hover:bg-red-600"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

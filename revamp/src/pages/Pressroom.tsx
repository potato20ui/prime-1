import React from "react";
import Navbar from "@/components/Landingpage/Navbar";
import Footer from "@/components/Landingpage/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Define the shape of the media items
interface Item {
  id: number;
  title: string;
  date: string;
  type: "VIDEO" | "NEWS";
  imageUrl: string;
}

// Sample media data
const items: Item[] = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: "TITLE",
  date: "Date",
  type: i % 2 === 0 ? "VIDEO" : "NEWS",
  imageUrl:
    i === 1
      ? "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
      : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
}));

// Card Component
const MediaCard: React.FC<{ item: Item }> = ({ item }) => (
  <Link
    to={`/news/${item.id}`}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    <div className="relative">
      <img
        src={item.imageUrl}
        alt={`Thumbnail for ${item.title}`}
        className="w-full h-48 object-cover"
      />
      <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
        {item.type}
      </span>
    </div>
    <div className="p-4">
      <h3 className="font-semibold mb-1">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.date}</p>
    </div>
  </Link>
);

// Header Component
const HeaderSection = () => (
  <section className="relative h-[200px] w-full overflow-hidden rounded-xl shadow-lg mt-4">
    <img
      src="https://images.unsplash.com/photo-1602524207054-2f6b204d8e3a"
      alt="News and media banner"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
        NEWS & MEDIA APPEARANCE
      </h1>
    </div>
  </section>
);

// Pagination Component
const PaginationControls = () => (
  <div className="flex justify-end items-center gap-2 mt-6">
    <Button variant="ghost" size="icon" aria-label="Previous Page">
      <ChevronLeft className="w-5 h-5" />
    </Button>
    <span className="text-sm text-gray-700">Page 1</span>
    <Button variant="ghost" size="icon" aria-label="Next Page">
      <ChevronRight className="w-5 h-5" />
    </Button>
  </div>
);

// Main Grid Component
const NewsMediaGrid: React.FC = () => {
  return (
    <>
      <Navbar className="fixed top-0 left-0 w-full z-50" />

      <main className="min-h-screen p-4 md:p-8 pt-24">
        <HeaderSection />
        <PaginationControls />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {items.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

// Page wrapper
const Pressroom: React.FC = () => {
  return <NewsMediaGrid />;
};

export default Pressroom;

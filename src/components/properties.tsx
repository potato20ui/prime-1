import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, Home } from "lucide-react";
import { Card, CardContent } from "../components/card";
import { Button } from "../components/button";
import { motion, AnimatePresence } from "framer-motion";



const properties = [
  { id: 1, title: "Modern Office Space", type: "Quezon City", png: "/images/ui/1.png" },
  { id: 2, title: "Retail Shop Space", type: "Makati", png: "/images/ui/2.png" },
  { id: 3, title: "Warehouse Facility", type: "Taguig", png: "/images/ui/3.png" },
  { id: 4, title: "Studio Unit", type: "Ortigas", png: "/images/ui/4.png" },
  { id: 5, title: "Commercial Lot", type: "Quezon City", png: "/images/ui/5.png" },
  { id: 6, title: "Small Office", type: "Mandaluyong", png: "/images/ui/6.png" },
  { id: 7, title: "Small Office", type: "Mandaluyong", png: "/images/ui/7.png" },
];

const categories = [
  {
    name: "Featured Office Spaces for leases in Quezon City",
    description: "Looking to setup your first office? Ease into an easier travel to work with these spaces located at center of Metro Manila.",
  },
  {
    name: "Key Retail Building Projects and Commercial Lots",
    description: "Looking to setup your first office? Ease into an easier travel to work with these spaces located at center of Metro Manila.",
  },
  {
    name: "Key Industrial Projects and Warehouses",
    description: "Looking to setup your first office? Ease into an easier travel to work with these spaces located at center of Metro Manila.",
  },
];

const ITEMS_PER_PAGE = 3;

const PropertyCard = ({ property }: { property: typeof properties[0] }) => (
    <Card className="w-[350px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-101">
      <div className="relative w-full h-[300px]">
        <img
          src={property.png}
          alt={property.title}
          className="w-full h-full object-cover"
        />
  
        {/* Badge positioned top-right */}
        <div className="absolute top-2 right-2 bg-blue-900 text-white px-5 py-2 rounded-2xl text-sm font-medium flex items-center gap-1">
        <Home className="w-4 h-4" />
          For Rent
        </div>
      </div>
  
      <CardContent className="p-5 space-y-1 border-4">
        <h4 className="text-lg font-semibold text-gray-800">{property.title}</h4>
        <p className="text-sm text-g-600 flex gap-1 items-center">
          📍 {property.type}
        </p>
      </CardContent>
    </Card>
  );
  
  

export default function PropertiesPage() {
  const [currentPages, setCurrentPages] = useState(Array(categories.length).fill(0));

  const handleNext = (index: number) => {
    setCurrentPages((prev) => {
      const newPages = [...prev];
      newPages[index] = Math.min(newPages[index] + 1, Math.ceil(properties.length / ITEMS_PER_PAGE) - 1);
      return newPages;
    });
  };

  const handlePrev = (index: number) => {
    setCurrentPages((prev) => {
      const newPages = [...prev];
      newPages[index] = Math.max(newPages[index] - 1, 0);
      return newPages;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
        <header 
            className=" bg-full bg-center text-white py-16 text-center"
            style={{ backgroundImage: "url('/images/ui/bg.png')" }}
      >
        <h1 className="text-4xl font-bold mb-2">PROPERTIES</h1>
        <p className="relative mt-2 text-lg">Home / Properties</p>
    
        
      </header>

      {/* Search Filters */}
<div className="-mt-8 max-w-6xl mx-auto px-4">
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-wrap gap-6 items-center justify-between">
    <div className="flex flex-wrap gap-4 items-center">
      <select className="border-b border-gray-300 p-2 bg-transparent w-[160px] text-sm focus:ring-0 focus:border-blue-900">
        <option>Location</option>
        <option>Quezon City</option>
        <option>Makati</option>
        <option>Taguig</option>
        <option>Ortigas</option>
        
      </select>
      <select className="border-b border-gray-300 p-2 bg-transparent w-[160px] text-sm focus:ring-0 focus:border-blue-900">
        <option>Category</option>
        <option>Office</option>
        <option>Retail</option>
        <option>Warehouse</option>
      </select>
      <select className="border-b border-gray-300 p-2 -transparent w-[160px] text-sm focus:ring-0 focus:border-blue-900">
        <option>Type</option>
        <option>For Rent</option>
        <option>For Sale</option>
      </select>
      <select className="border-b border-gray-300 p-2 bg-transparent w-[160px] text-sm focus:ring-0 focus:border--500">
        <option>Year</option>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
       
      </select>
    </div>

    <div className="relative flex-1 min-w-[220px] max-w-[300px]">
      <input
        type="text"
        placeholder="Search"
        className="border-b border-gray-300 p-2 pl-10 w-full text-sm bg-transparent focus:outline-none focus:border-blue-900"
      />
      <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
    </div>
  </div>
</div>


      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-4 space-y-16">
        {categories.map((category, index) => {
          const currentPage = currentPages[index];
          const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
          const currentProperties = properties.slice(
            currentPage * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
          );

          return (
            <section key={index} className="space-y-6">
              {/* Title and description */}
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{category.name}</h2>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>

              {/* Carousel */}
              <div className="relative flex items-center">
                {/* Prev button */}
                {/* left */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-[-60px] z-10 bg-white border rounded-full shadow-md hover:bg-blue-900"
                  onClick={() => handlePrev(index)}
                  disabled={currentPage === 0}
                >
                  <ChevronLeft />
                </Button>

                {/* Cards */}
                <div className="flex overflow-hidden w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPage}
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex justify-center gap-6 "
                    >
                      {currentProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Next button */}
                {/* right */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-[-56px] z-10 bg-white border rounded-full shadow-md hover:bg-blue-900"
                  onClick={() => handleNext(index)}
                  disabled={currentPage === totalPages - 1}
                >
                  <ChevronRight />
                </Button>
              </div>


                    {/* Pagination Dots */}
<div className="flex justify-center mt-4">
  <div className="flex gap-2 px-4 py-3 bg-gray-300 rounded-full shadow-sm">
    {Array.from({ length: totalPages }).map((_, dotIndex) => (
      <div
        key={dotIndex}
        className={`w-2 h-2 rounded-full ${
          dotIndex === currentPage ? "bg-blue-900" : "bg-gray-400"
        }`}
      ></div>
    ))}
  </div>
</div>



            </section>
          );
        })}
      </main>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";

interface PropertyCard {
  id: string;
  title: string;
  desc: string;
  location: string;
  image: string;
  category: string;
  filterValue: string;
}

interface IndustryInsightsProps {
  onCardClick?: (category: string) => void;
  highlightedCategory?: string;
  resetFilters?: () => void;
}

export default function IndustryInsights({
  onCardClick,
  highlightedCategory,
  resetFilters
}: IndustryInsightsProps) {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards: PropertyCard[] = [
    {
      id: "office",
      title: "Key Office Building Projects",
      desc: "Explore Prime Philippines' commercial spaces for lease, featuring premium office buildings and expert insights to find the perfect workspace for your business.",
      location: "Quezon City",
      image: "/Property/mockup.png",
      category: "office",
      filterValue: "Office Spaces"
    },
    {
      id: "retail",
      title: "Key Retail Building Projects",
      desc: "From commercial spaces to commercial lots, ranging from big to small, there's a PRIME property that can accommodate new and existing businesses.",
      location: "Quezon City",
      image: "/Property/mockup.png",
      category: "retail",
      filterValue: "Retail Spaces"
    },
    {
      id: "commercial",
      title: "Key Commercial Lots",
      desc: "From commercial spaces to commercial lots, ranging from big to small, there's a PRIME property that can accommodate new and existing businesses.",
      location: "Quezon City",
      image: "/Property/mockup.png",
      category: "commercial",
      filterValue: "Commercial Lots"
    },
    {
      id: "warehouse",
      title: "Key Industrial Warehouses",
      desc: "From commercial spaces to commercial lots, ranging from big to small, there's a PRIME property that can accommodate new and existing businesses.",
      location: "Alabang",
      image: "/Property/mockup.png",
      category: "warehouse",
      filterValue: "Industrial Warehouse"
    },
    {
      id: "industrial",
      title: "Key Industrial Lots",
      desc: "From commercial spaces to commercial lots, ranging from big to small, there's a PRIME property that can accommodate new and existing businesses.",
      location: "Bulacan",
      image: "/Property/mockup.png",
      category: "industrial",
      filterValue: "Industrial Lots"
    }
  ];

  const handleCardClick = (filterValue: string) => {
    if (onCardClick) {
      onCardClick(filterValue);
    } else {
      navigate(`/properties?category=${filterValue}`);
    }
  };

  const handleReset = () => {
    if (resetFilters) {
      resetFilters();
    }
  };

  const isCategorySelected = highlightedCategory && highlightedCategory !== "All Categories";

  return (
    <section className="flex items-center justify-center min-h-[auto] px-4 py-20 font-Gotham-sans-serif">
      <div className="w-full max-w-[1400px] flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex justify-center items-center mb-8 text-[#0B3B71] font-bold text-sm tracking-wide space-x-2">
            <FaBuilding className="text-xl" />
            <span>INSIGHTS</span>
          </div>
          <h1 className="text-[24pt] sm:text-5xl font-extrabold tracking-wide font-gotham-bold text-[#0E406F] text-center animate-fade-in">
            INDUSTRY <span className="text-[#666666]">INSIGHTS</span>
          </h1>

          <div className="h-1 w-24 bg-[#0E406F] mt-4 mx-auto rounded-full animate-slide-in"></div>

          <div className="flex justify-center mt-10">
            <h3 className="text-[12pt] font-gotham-book text-white bg-[#0E406F] px-4 py-2 text-center">
              Explore properties in Prime Philippines
            </h3>
          </div>

          <p className="text-[12pt] font-gotham-book text-[#666666] mt-4 max-w-2xl mx-auto text-center leading-relaxed">
            Explore Prime Philippines' commercial spaces for lease, featuring premium office buildings and expert insights to find the perfect workspace for your business.
          </p>

          {isCategorySelected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <Button
                variant="outline"
                className="text-[12pt] font-gotham-book text-[#666666] border-[#666666] hover:bg-[#666666] hover:text-white"
                onClick={handleReset}
              >
                Reset All Filters
              </Button>
            </motion.div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px]  mx-auto">
          {cards.slice(0, 3).map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                scale: highlightedCategory === card.filterValue ? 1.05 : 1,
                borderColor: highlightedCategory === card.filterValue ? "#0a1e4a" : "#e5e7eb",
                boxShadow: highlightedCategory === card.filterValue ? "0 10px 30px -10px rgba(0, 0, 0, 0.1)" : "none"
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
              }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl overflow-hidden border-3 ${
                highlightedCategory === card.filterValue ? "border-[#0a1e4a]" : "border-transparent"
              } cursor-pointer relative group`}
              onClick={() => handleCardClick(card.filterValue)}
            >
              {highlightedCategory === card.filterValue && (
                <div className="absolute inset-0 bg-[#0a1e4a]/5 z-0"></div>
              )}

              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredCard === card.id ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h4 className="text-[14pt] font-gotham-bold drop-shadow-md">{card.title}</h4>
                  <p className="text-[12pt] font-gotham-book text-[#cccccc]">{card.location}</p>
                </div>
              </div>

              <div className="p-5 relative z-10">
                <p className="text-[11pt] font-gotham-book text-[#666666] mb-4">{card.desc}</p>

                <Button
                  variant="default"
                  className={`text-white w-full transition-colors ${
                    highlightedCategory === card.filterValue
                      ? "bg-[#0E406F] hover:bg-[#0b3358]"
                      : "bg-[#0E406F] hover:bg-[#0b3358]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(card.filterValue);
                  }}
                >
                  {highlightedCategory === card.filterValue ? (
                    <>Viewing {card.filterValue}</>
                  ) : (
                    <>View {card.filterValue}</>
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.slice(3).map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                scale: highlightedCategory === card.filterValue ? 1.05 : 1,
                borderColor: highlightedCategory === card.filterValue ? "#0a1e4a" : "#e5e7eb",
                boxShadow: highlightedCategory === card.filterValue ? "0 10px 30px -10px rgba(0, 0, 0, 0.1)" : "none"
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
              }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl overflow-hidden border-3 ${
                highlightedCategory === card.filterValue ? "border-[#0a1e4a]" : "border-transparent"
              } cursor-pointer relative group`}
              onClick={() => handleCardClick(card.filterValue)}
            >
              {highlightedCategory === card.filterValue && (
                <div className="absolute inset-0 bg-[#0a1e4a]/5 z-0"></div>
              )}

              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredCard === card.id ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h4 className="text-[14pt] font-gotham-bold drop-shadow-md">{card.title}</h4>
                  <p className="text-[12pt] font-gotham-book text-[#cccccc]">{card.location}</p>
                </div>
              </div>

              <div className="p-5 relative z-10">
                <p className="text-[11pt] font-gotham-book text-[#666666] mb-4">{card.desc}</p>

                <Button
                  variant="default"
                  className={`text-white w-full transition-colors ${
                    highlightedCategory === card.filterValue
                      ? "bg-[#0E406F] hover:bg-[#0b3358]"
                      : "bg-[#0E406F] hover:bg-[#0b3358]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(card.filterValue);
                  }}
                >
                  {highlightedCategory === card.filterValue ? (
                    <>Viewing {card.filterValue}</>
                  ) : (
                    <>View {card.filterValue}</>
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

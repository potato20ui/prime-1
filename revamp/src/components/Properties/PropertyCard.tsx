import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/Properties/card";
import { Button } from "@/components/Properties/button";
import { Property } from "@/data/propertyData";

const PropertyCard = ({ property }: { property: Property }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative z-10 w-full sm:w-[48%] lg:w-[350px] flex-shrink-0"
  >
    <Card className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
      <div className="relative w-full h-[250px] sm:h-[280px] md:h-[300px]">
        <img
          src={property.png}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-[#0E406F] text-white px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 z-10 shadow-md">
          <Home className="w-4 h-4" />
          {property.leaseType}
        </div>
      </div>
      <CardContent className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 leading-snug line-clamp-2">
            {property.title}
          </h4>
          <p className="text-sm text-gray-600 flex gap-1 items-center mt-1">
            <MapPin className="w-4 h-4 text-[#0E406F]" />
            <span className="line-clamp-1">{property.location}</span>
          </p>
        </div>
        <Link to={`/view-properties/${property.id}`} className="mt-4">
          <Button className="w-full rounded-full bg-[#0E406F] text-white hover:[#0E406F]/10 transition duration-300">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  </motion.div>
);

export default PropertyCard;

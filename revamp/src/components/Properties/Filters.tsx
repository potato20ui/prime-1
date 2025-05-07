import { Search } from "lucide-react";
import { locationOptions, categoryOptions, leaseOptions } from "@/data/propertyData";

interface FiltersProps {
  filters: {
    location: string;
    category: string;
    leaseType: string;
    searchQuery: string;
  };
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onAdd: () => void;
}

export default function Filters({ filters, onFilterChange }: FiltersProps) {
  return (
    <div className="relative z-10 bg-[var(--color-PRIMEwhite)] -mt-20 max-w-4xl border rounded-lg mx-auto">
      <div className="bg-[var(--color-PRIMEwhite)] shadow-lg rounded-xl p-6 flex flex-wrap gap-6 items-center justify-between">
        <div className="flex flex-wrap gap-4 items-center">
          <select
            name="location"
            value={filters.location}
            onChange={onFilterChange}
            className="border-b border-[var(--color-PRIMEgray)] p-2 bg-[var(--color-PRIMEwhite)] w-[160px] text-sm focus:ring-0 focus:border-[var(--color-PRIMEblue)]"
          >
            {locationOptions.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          <select
            name="category"
            value={filters.category}
            onChange={onFilterChange}
            className="border-b border-[var(--color-PRIMEgray)] p-2 bg-[var(--color-PRIMEwhite)] w-[160px] text-sm focus:ring-0 focus:border-[var(--color-PRIMEblue)]"
          >
            {categoryOptions.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            name="leaseType"
            value={filters.leaseType}
            onChange={onFilterChange}
            className="border-b border-[var(--color-PRIMEgray)] p-2 bg-[var(--color-PRIMEwhite)] w-[160px] text-sm focus:ring-0 focus:border-[var(--color-PRIMEblue)]"
          >
            {leaseOptions.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="relative flex-1 min-w-[220px] max-w-[300px]">
          <input
            type="text"
            name="searchQuery"
            value={filters.searchQuery}
            onChange={onFilterChange}
            placeholder="Search properties..."
            className="border-b border-[var(--color-PRIMEgray)] p-2 pl-10 w-full text-sm bg-transparent focus:outline-none focus:border-[var(--color-PRIMEblue)]"
          />
          <Search className="absolute top-3 left-3 h-4 w-4 text-[var(--color-PRIMEgray)]" />
        </div>
      </div>
    </div>
  );
}

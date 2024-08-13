"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface Repair {
  title: string;
  img: string;
  oldPrice: number;
  newPrice: number;
}

const ScreenReplacement: React.FC = () => {
  const availableRepairs: Repair[] = [
    {
      title: "Tecno",
      img: "/screens/tecno/tecnos.jpeg",
      oldPrice: 2000,
      newPrice: 1800,
    },
    {
      title: "Samsung",
      img: "/screens/tecno/tecnos.jpeg",
      oldPrice: 2500,
      newPrice: 2300,
    },
    {
      title: "Itel",
      img: "/screens/tecno/tecnos.jpeg",
      oldPrice: 1500,
      newPrice: 1400,
    },
    {
      title: "Xiaomi",
      img: "/screens/tecno/tecnos.jpeg",
      oldPrice: 2200,
      newPrice: 2000,
    },
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleBooking = (title: string) => {
    console.log(`Book service for ${title}`);
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.value;
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((b) => b !== brand)
        : [...prevSelected, brand]
    );
  };

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setPriceRange((prevRange) => [prevRange[0], value]);
  };

  const filteredRepairs = availableRepairs.filter((repair) => {
    const matchesSearchTerm = repair.title.toLowerCase().includes(searchTerm);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(repair.title);
    const matchesPrice =
      repair.newPrice >= priceRange[0] && repair.newPrice <= priceRange[1];
    return matchesSearchTerm && matchesBrand && matchesPrice;
  });

  return (
    <div className="flex w-full">
      {/* Filter Section */}
      <section className="p-4 w-[20%]">
        <div className="flex flex-col gap-4 mb-4">
          {/* Brand Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Filter by Brand</h3>
            <div className="space-y-2">
              {["Tecno", "Samsung", "Itel", "Xiaomi"].map((brand) => (
                <label key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={handleBrandChange}
                    className="form-checkbox h-4 w-4 text-button"
                  />
                  <span className="ml-2 text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Price Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Filter by Price</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <span className="text-gray-700 mr-2">Max Price: Ksh {priceRange[1]}</span>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={handlePriceRangeChange}
                  className="w-full"
                />
              </label>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-[80%]">
        {/* Search Section */}
        <section className="p-4 ">
          <Input
            placeholder="Search phone screen type"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-xs border-gray-300 rounded-lg"
          />
        </section>

        {/* Available Repairs Section */}
        <section className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredRepairs.map((repair, index) => (
              <div
                key={index}
                className="bg-white relative border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  src={repair.img}
                  alt={repair.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out hover:bg-opacity-50"></div>
                <div className="p-4 flex justify-between items-center absolute w-full bottom-0 gap-8 text-white z-50">
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {repair.title}
                    </h2>
                    <button
                      onClick={() => handleBooking(repair.title)}
                      className="mt-2 px-4 py-2 bg-button text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Repair Screen
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm line-through">Ksh {repair.oldPrice}</p>
                    <p className="text-lg font-bold">Ksh {repair.newPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default ScreenReplacement;

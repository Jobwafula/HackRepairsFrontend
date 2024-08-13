'use client'

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
        { title: 'Tecno', img: 'path-to-tecno-image.jpg', oldPrice: 2000, newPrice: 1800 },
        { title: 'Samsung', img: 'path-to-samsung-image.jpg', oldPrice: 2500, newPrice: 2300 },
        { title: 'Itel', img: 'path-to-itel-image.jpg', oldPrice: 1500, newPrice: 1400 },
        { title: 'Xiaomi', img: 'path-to-xiaomi-image.jpg', oldPrice: 2200, newPrice: 2000 }
    ];

    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleBooking = (title: string) => {
    
        console.log(`Book service for ${title}`);
        
    };

    const filteredRepairs = availableRepairs.filter(repair =>
        repair.title.toLowerCase().includes(searchTerm)
    );

    return (
        <>
            {/* Search Section */}
            <section className="p-4 bg-gray-100">
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
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                            <img 
                                className="w-full h-48 object-cover" 
                                src={repair.img} 
                                alt={repair.title} 
                            />
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{repair.title}</h2>
                                    <button
                                        onClick={() => handleBooking(repair.title)}
                                        className="mt-2 px-4 py-2 bg-button text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        Repair Screen
                                    </button>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 line-through">Ksh {repair.oldPrice}</p>
                                    <p className="text-lg font-bold text-gray-800">Ksh {repair.newPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ScreenReplacement;

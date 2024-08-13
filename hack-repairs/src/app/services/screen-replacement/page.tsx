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
        { title: 'Tecno', img: '/screens/tecno/tecnos.jpeg', oldPrice: 2000, newPrice: 1800 },
        { title: 'Samsung', img: '/screens/tecno/tecnos.jpeg', oldPrice: 2500, newPrice: 2300 },
        { title: 'Itel', img: '/screens/tecno/tecnos.jpeg', oldPrice: 1500, newPrice: 1400 },
        { title: 'Xiaomi', img: '/screens/tecno/tecnos.jpeg', oldPrice: 2200, newPrice: 2000 }
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
                        <div key={index} className="bg-white relative border border-gray-200 rounded-lg shadow-md overflow-hidden">
                            <img 
                                className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out hover:scale-105" 
                                src={repair.img} 
                                alt={repair.title} 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                            <div className="p-4 flex justify-between items-center absolute w-full bottom-0 gap-8 text-white z-50">
                                <div>
                                    <h2 className="text-lg font-semibold text-white">{repair.title}</h2>
                                    <button
                                        onClick={() => handleBooking(repair.title)}
                                        className="mt-2  px-4 py-2 bg-button text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        Repair Screen
                                    </button>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm  line-through">Ksh {repair.oldPrice}</p>
                                    <p className="text-lg font-bold ">Ksh {repair.newPrice}</p>
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

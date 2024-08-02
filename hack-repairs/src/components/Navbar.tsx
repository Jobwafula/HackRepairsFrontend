"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  interface User {
    email: string;
    name: string;
  }
  const [user, setUser] = useState<User | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]); // Assuming search results are strings
  const { signout } = useAuth();
  const router = useRouter();

  // Array of objects for extra links
  const extraLinks = [
    { title: "Sell With Us" },
    { title: "About our Products" },
    { title: "About Us" },
  ];

  useEffect(() => {
    // Get user from local storage
    const localUser = localStorage.getItem("user");

    // Check if the localUser exists and parse it if it's not null
    if (localUser) {
      try {
        const parsedUser: User = JSON.parse(localUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    } else {
      setUser(null); // If no user is found in localStorage
    }

    console.log("local user", localUser);
  }, []);

  const handleSignout = () => {
    signout(() => {
      window.location.reload();
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (e.target.value.trim() === "") {
      setSearchResults([]);
    } else {
      // Simulate fetching/searching results
      const results = ["Tecno Screen", "Samsung Screen", "Itel Screen"].filter(
        (item) => item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-3 flex justify-between md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="text-white text-xl font-bold md:text-2xl">
              Hack-Repairs
            </a>
            <div className="">
              <button type="button" className="text-white focus:outline-none">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 5h16M4 12h16m-7 7h7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex md:flex items-center space-x-4">
            <Link href="#cart" className="text-white py-2 flex items-center gap-2">
              <FiShoppingCart />
              Cart
            </Link>
            <Link href="#orders" className="text-white py-2 flex items-center gap-2">
              <FaBus /> Orders
            </Link>
            <Link href="#orders" className="text-white py-2 flex items-center gap-2">
              <FaRegUser />
            </Link>
            {user ? (
              <div>
                <Popover>
                  <PopoverTrigger>{user.name}</PopoverTrigger>
                  <PopoverContent>
                    <Button onClick={handleSignout}>
                      <FiLogOut className="mr-4" /> Signout
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <Link href="/signin" className="text-white hidden md:flex hover:underline py-2 items-center gap-2">
                Sign In
              </Link>
            )}
            <Link href="#home" className="text-white py-2 flex items-center gap-2"></Link>
          </div>
        </div>
      </nav>
      <div className="container relative mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
        <Input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search all phone screens (e.g Tecno, Samsung)"
          className={cn("outline-none p-2 w-full md:w-1/2 rounded-md border border-gray-300")}
        />
        {searchInput.trim() !== "" && (
          <div className="w-full absolute md:top-[100%] z-50  md:w-1/2 bg-white shadow-md rounded-md mt-2">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} className="p-2 border-b border-gray-300">
                    {result}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-2 text-gray-500">Results not found</div>
            )}
          </div>
        )}
        <div className="flex">
          <div className="flex">
            <p className="text-gray-800">Products</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="text-2xl">
                  <RiArrowDropDownLine />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-white">
                <DropdownMenuItem>Tecno</DropdownMenuItem>
                <DropdownMenuItem>Samsung</DropdownMenuItem>
                <DropdownMenuItem>Itel</DropdownMenuItem>
                <DropdownMenuItem>Infinix</DropdownMenuItem>
                <DropdownMenuItem>Nokia</DropdownMenuItem>
                <DropdownMenuItem>Huawei</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            {/* links section */}
            <ul className="flex flex-wrap gap-4">
              {extraLinks.map((link, index) => (
                <li key={index} className="text-gray-800 hover:underline hover:cursor-pointer hover:text-gray-600">
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

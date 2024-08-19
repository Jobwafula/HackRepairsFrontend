"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  interface User {
    email: string;
    name: string;
  }
  const [user, setUser] = useState<User | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const { signout } = useAuth();
  const router = useRouter();

  const extraLinks = [
    { title: "Sell With Us", href: "/sell-with-us" },
    { title: "About our Products", href: "/products" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    if (localUser) {
      try {
        const parsedUser: User = JSON.parse(localUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    } else {
      setUser(null);
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
            <Image
              width={30}
              height={30}
              className="rounded-full"
              src="/hack-repairs.jpg"
              alt="logo"
            />
            <p className="text-white text-xl ml-2  md:text-2xl font-semibold">
              Hack-Repairs
            </p>
            <div className="">
              <button type="button" className="text-white focus:outline-none">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 5h16M4 12h16m-7 7h7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex md:flex items-center space-x-4">
            <Link
              href="/cart"
              className={`text-white py-2 flex items-center gap-2 ${
                pathname === "/cart" ? "active" : ""
              }`}
            >
              <FiShoppingCart />
              Cart
            </Link>
            <Link
              href="/orders"
              className={`text-white py-2 flex items-center gap-2 ${
                pathname === "/orders" ? "active" : ""
              }`}
            >
              <FaBus /> Orders
            </Link>
            <Link
              href="/profile"
              className={`text-white py-2 flex items-center gap-2 ${
                pathname === "/profile" ? "active" : ""
              }`}
            >
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
              <Link
                href="/signin"
                className={`text-white hidden md:flex hover:underline py-2 items-center gap-2 ${
                  pathname === "/signin" ? "active" : ""
                }`}
              >
                Sign In
              </Link>
            )}
            <Link
              href="/home"
              className={`text-white py-2 flex items-center gap-2 ${
                pathname === "/home" ? "active" : ""
              }`}
            ></Link>
          </div>
        </div>
      </nav>
      <div className="container relative mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
      <div className="relative w-full md:w-1/2">
  <Input
    type="text"
    value={searchInput}
    onChange={handleSearchChange}
    placeholder="Search all phone screens (e.g Tecno, Samsung)"
    className={cn(
      "border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md w-full h-full pl-4 pr-12 text-gray-700 placeholder-gray-500" // Adjust padding and colors
    )}
  />
  <p className="absolute inset-y-0 right-0 bg-green-800 p-2 rounded-r-md flex items-center pointer-events-none">
    <CiSearch className="text-white" />
  </p>
</div>


        {searchInput.trim() !== "" && (
          <div className="w-full absolute md:top-[100%] z-50 md:w-1/2 bg-white shadow-md rounded-md mt-2">
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
        <div className="hidden md:flex">
          <div className="flex">
            <p className="text-gray-800">Products</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="text-2xl">
                  <RiArrowDropDownLine />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-white pl-4 w-52">
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
            <ul className="flex flex-wrap gap-4">
              {extraLinks.map((link, index) => (
                <li
                  key={link.title}
                  className={`text-gray-800 hover:underline hover:cursor-pointer hover:text-gray-600 ${
                    pathname === link.href ? "active" : ""
                  }`}
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .active {
          border-bottom: 2px solid #fff;
          color: #003300;
          text-decoration: underline;
          font: bold;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

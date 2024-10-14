"use client";
import React, { useState } from "react";
import logo from "@/app/img/logo.png";
import Image from "next/image";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import SparklesText from "@/components/ui/sparkles-text";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to detect scroll and apply background blur after 20vh
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollHeight = window.scrollY;
  //     setIsScrolled(scrollHeight > window.innerHeight * 0.2); // 20vh equivalent
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Array for menu items
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  // Colors for light and dark mode
  // const bgColor = useColorModeValue(
  //   "rgba(255, 255, 255, 0.8)",
  //   "rgba(0, 0, 0, 0.8)"
  // );
  // const hoverColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");


  
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      position={"absolute"}
      w={"100%"}
      zIndex="10"
      className={`transition-all duration-300 `}
    >
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} className="w-14" alt="Logo" />
            <SparklesText
              text="TradeMax"
              className="self-center text-2xl font-semibold whitespace-nowrap text-white"
              // style={{ color: textColor }}
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            style={{ color: textColor }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 items-center"
              style={{ color: textColor }}
            >
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 rounded md:p-0 ${
                      item.label === "Home"
                        ? "bg-blue-700 md:bg-transparent md:text-white"
                        : ""
                    }`}
                    style={{ color: textColor }}
                    aria-current={item.label === "Home" ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <Box>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Box>
            </ul>
          </div>
        </div>
      </nav>
    </Box>
  );
}

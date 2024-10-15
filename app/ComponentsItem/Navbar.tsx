"use client";
import React, { useState } from "react";
import logo from "@/app/img/logo.png";
import Image from "next/image";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import SparklesText from "@/components/ui/sparkles-text";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Array for menu items
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Events", href: "/Events" },
    { label: "Gallary", href: "/Gallary" },
    { label: "Contact", href: "#contact" },
  ];

  // Colors for light and dark mode
  const textColor = useColorModeValue("gray.900", "white");
  const overlayColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.8)");

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position={"absolute"} w={"100%"} zIndex="10" className={`transition-all duration-300`}>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} className="w-14" alt="Logo" />
            <SparklesText
              text="TradeMax"
              className="self-center text-2xl font-semibold whitespace-nowrap text-white"
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

          {/* Mobile Menu with Blur Effect */}
          {isMenuOpen && (
            <Box
              position="absolute"
              top="100%"
              left="0"
              right="0"
              bg={overlayColor}
              backdropFilter="blur(10px)"
              zIndex="10"
              borderRadius="md"
              boxShadow="lg"
              p="4"
              className="md:hidden" // Only show on mobile
            >
              <ul
                className="font-medium flex flex-col space-y-2"
                style={{ color: textColor }}
              >
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`block py-2 px-3 rounded transition-colors duration-200 ${
                        item.label === "Home" ? "bg-blue-700" : ""
                      }`}
                      style={{ color: textColor }}
                      aria-current={item.label === "Home" ? "page" : undefined}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Box>
          )}

          <div className="hidden md:block">
            <ul className="font-medium flex flex-row space-x-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 rounded md:p-0 ${
                      item.label === "Home" ? "bg-blue-700 md:bg-transparent md:text-white" : ""
                    }`}
                    style={{ color: textColor }}
                    aria-current={item.label === "Home" ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Box>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
        </div>
      </nav>
    </Box>
  );
}
"use client"

import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import bgVideo from "../img/bgVideo.mp4"
export default function HomeSec() {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component is only rendered on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  return (
    <Box position="relative" w="100vw" h="100vh" overflow="hidden">
      <Box
        as="video"
        autoPlay
        muted
        loop
        playsInline
        w="100%"
        h="100%"
        objectFit="cover"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="-1"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
    </Box>
  );
}
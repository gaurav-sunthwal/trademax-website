"use client";
import {
  Box,
  Heading,
  VStack,
  Container,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import bgVideo from "@/Public/Video/bgVideo.mp4";
import PulsatingButton from "@/components/ui/pulsating-button";
import BlurIn from "@/components/ui/blur-in";

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
      {/* Background Video */}
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
        <source src={`${bgVideo}`} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* Gradient Overlay to darken the background for text readability */}
      <Box
        position="absolute"
        w="100%"
        h="100%"
        bg="linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)"
        zIndex="-1"
      />

      {/* Content */}
      <VStack h={"100%"} spacing={8} justifyContent={"space-evenly"} mt={0}>
        <Container maxW="container.xl" textAlign={"center"}>
          <Heading fontSize={"5.5rem"} color={"#efe3e3"}>
          
            <BlurIn  word="WelCome To TradeMax !!" />
          </Heading>
          <Heading size={"lg"} color={"#C0C0C0"}>
            Trade Master Markets To Share Knowledge!!
          </Heading>
        </Container>
        <Box>
          <PulsatingButton>↓</PulsatingButton>
        </Box>
      </VStack>
    </Box>
  );
}

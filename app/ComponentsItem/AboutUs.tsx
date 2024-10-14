"use client";

import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  useMediaQuery,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SecHeading from "./SecHeading";
import { TiTick } from "react-icons/ti";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

// veriables

const aboutSec1 = ` The Trading Club at MIT-WPU is a student-run organization that
                  provides a platform for students to learn about and explore
                  the world of trading. It is one of the most active student
                  organizations on campus, with a diverse group of members from
                  various disciplines.`;
const aboutSec2 = `The trading club bridges the gap between finance and
                  technology, equipping students with skills and knowledge to
                  succeed in the trading world. It organizes various events,
                  including workshops, seminars, webinars, knowledge meets, and
                  case competitions, to foster a culture of innovation and
                  entrepreneurship.`;
const ops = [
  "TRADING COMPETITIONS",
  "HACKATHONS",
  "CASE STUDIES",
  "WorkShopes",
];
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function AboutUs() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  // Define color variables based on light/dark mode
  const headingColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={"70px"}>
      <Container maxW="container.xl">
        <HStack w={"100%"} justifyContent="flex-start">
          <Box maxW={isLargerThan800 ? "50%" : "100%"} w={"100%"}>
            <VStack spacing={6} w={"100%"} align={"start"} textAlign={"left"}>
              {/* Section Heading */}
              <SecHeading title="About Us" />

              {/* Heading */}
              <Box>
                <Heading size={"lg"} color={headingColor} fontWeight={"bold"}>
                  We are a Knowledge-Based Society at MIT-WPU
                </Heading>
              </Box>

              {/* Paragraphs */}
              <Box>
                <Text fontSize={"lg"} color={textColor} lineHeight={"1.8"}>
                  {aboutSec1}
                </Text>
              </Box>

              <Box>
                <Text fontSize={"lg"} color={textColor} lineHeight={"1.8"}>
                  {aboutSec2}
                </Text>
              </Box>
              <Box>
                <HStack justifyContent={"space-between"} wrap={"wrap"}>
                  {ops.map((item, index) => {
                    return <MarkName title={item} key={index} />;
                  })}
                </HStack>
              </Box>
              <Box mt={4} w={"100%"}>
                <HStack justifyContent={"left"}>
                  <Box>
                    <RainbowButton>Read More!!</RainbowButton>
                  </Box>
                  <Box>
                    <HStack justifyContent={"space-between"}>
                      <SocalMedia
                        icons={<FaInstagram />}
                        Socallink="https://www.instagram.com/trademax.mitwpu/"
                      />
                      <SocalMedia icons={<FaLinkedinIn />} Socallink="/" />
                    </HStack>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}

function SocalMedia({ icons, Socallink }: { icons: React.ReactNode; Socallink: string }){
  return (
    <>
      <Box
        border={"1px"}
        mx={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="45px"
        h="45px"
        borderRadius="full"
        bg="transparentAlpha.200"
        _hover={{ bg: "transparentAlpha.400" }}
      >
        <Link href={Socallink} target="_blank">
          <Text fontSize="2xl">
            {icons}
          </Text>
        </Link>
      </Box>
    </>
  );
}

function MarkName({ title }: { title: string }) {
  return (
    <>
      <Box w={"40%"}>
        <HStack>
          <TiTick />
          <Text>{title}</Text>
        </HStack>
      </Box>
    </>
  );
}

"use client";

import {
  Box,
  Container,
  Heading,
  HStack,
  IconButton,
  Stack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "@/app/img/logo.png";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const accounts = [
  {
    url: "https://github.com/trademax-mitwpu/trademax-website",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://www.instagram.com/trademax.mitwpu/",
    label: "Instagram Account",
    type: "Instagram",
    icon: <FaInstagram />,
  },
  {
    url: "https://www.linkedin.com/company/club-trademax/posts/?feedView=all",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];
export default function Footer() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Container maxW="container.xl">
        <VStack>

      <HStack
        justifyContent={isLargerThan800 ? "space-around" : "center"}
        w={"100%"}
        wrap={"wrap"}
      >
        <Box w={"100px"}>
          <Image src={logo} alt="logo" />
        </Box>
        <Box>
          <Heading size={"sm"}>
            Build By{" "}
            <Link href={"https://gaurav-sunthwal.vercel.app/"}>
              Gaurav Sunthwal
            </Link>{" "}
            and Team
          </Heading>
        </Box>
        <Box>
          <Stack
            direction="row"
            spacing={5}
            pt={{ base: 4, md: 0 }}
            alignItems="center"
          >
            {accounts.map((sc, index) => (
              <IconButton
                as={Link}
                href={sc.url}
                key={index}
                icon={sc.icon}
                aria-label={sc.label} // Added aria-label for accessibility
              />
            ))}
          </Stack>
        </Box>
      </HStack>
      </VStack>
    </Container>
  );
}

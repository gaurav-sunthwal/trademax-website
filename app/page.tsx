import { Box } from "@chakra-ui/react";
import HomeSec from "./ComponentsItem/HomeSec";
import AboutUs from "./ComponentsItem/AboutUs";

export default function Home() {
  return (
    <>
      <Box>
        <HomeSec />
      </Box>
      <Box>
        <AboutUs/>
      </Box>
      
    </>
  );
}

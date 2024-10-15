import { Box } from "@chakra-ui/react";
import HomeSec from "./ComponentsItem/HomeSec";
import AboutUs from "./ComponentsItem/AboutUs";
import Footer from "./ComponentsItem/FooterSec";

export default function Home() {
  return (
    <>
      <Box>
        <HomeSec />
      </Box>
      <Box>
        <AboutUs/>
      </Box>
      <Box>
        <Footer/>
      </Box>
    </>
  );
}

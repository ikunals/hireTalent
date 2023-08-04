import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import companies from "../assets/companies.jpg";
import { GiWorld } from "react-icons/gi";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <Stack
      mt={{ base: "2em", lg: "5em" }}
      ml={{ lg: "7em", md: "5em", base: "none" }}
      height={"auto"}
      w={"auto"}
    >
      <Stack
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        initial={{
          x: -1000,
        }}
        animate={{
          x: 0,
        }}
        as={motion.div}
        transition={{
          duration: 100,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        height={"70vh"}
        w={"100%"}
      >
        <Box
          display={"flex"}
          flexDir={{ base: "column", lg: "row" }}
          height={{ base: "100vh", lg: "70vh" }}
          w={"100vw"}
        >
          <Stack
            bg={" rgb(249, 141, 141)"}
            pt={"2%"}
            p={{ base: "10" }}
            height={{ base: "100%", lg: "100%" }}
            w={{ base: "100%", lg: "50%" }}
          >
            <Text
              color={"blackAlpha.800"}
              bg={"transparent"}
              fontStyle={"italic"}
              fontSize={{ base: "1em", lg: "2em" }}
            >
              Find your Dream Company
            </Text>
            <Box>
              <Image src={companies} boxSize={{ base: "100%", lg: "100%" }} />
            </Box>
          </Stack>
          <VStack
            mt={{ base: "3em", lg: "none" }}
            // border={"2px solid"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            w={{ lg: "40%", base: "100%" }}
          >
            <Box
              height={"100%"}
              w={"80%"}
              flexDir={"column"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={{ lg: "3em", base: "2em", md: "2em" }}>
                Hire Your Next
              </Text>
              <HStack>
                <Text
                  color={"#f26440"}
                  fontSize={{ lg: "4em", base: "3em", md: "3em" }}
                >
                  Talent
                </Text>
                <Text
                  ml={"10px"}
                  fontSize={{ lg: "3em", base: "2em", md: "2em" }}
                >
                  here
                </Text>
              </HStack>{" "}
              <Typewriter
                options={{
                  strings: [
                    "A Software Engineer",
                    "A Data Scientist",
                    "Anyone",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriterpara",
                }}
              />
              <Text
                fontSize={{ lg: "1em", base: "0.8em", md: "0.8em" }}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Find Talent From all part of the world
                <Icon ml={"5px"} as={GiWorld} />
              </Text>
              <Box mt={{ base: "none", lg: "1em" }}>
                <Button m={"10px"} mt={{ base: "10px" }} colorScheme="blue">
                  Find more
                </Button>
                <Button m={"10px"}>Take a look</Button>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Home;

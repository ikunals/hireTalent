import React, { useRef } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import "./Mid.css";
import before from "../assets/before_image.png";
import after from "../assets/after_image.png";
import { animate, motion } from "framer-motion";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

function Mid() {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 100000, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  return (
    <Stack
      className="kunal"
      as={"div"}
      // marginLeft={"1em"}
      mt={{ base: "8em", lg: "5em" }}
      height={"auto"}
      width={"auto"}
    >
      <Stack
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", lg: "start" }}
        justifyContent={"center"}
        borderTop={"2px solid gray"}
        borderBottom={"2px solid gray"}
        height={{ base: "100%", lg: "30%" }}
        w={"100%"}
      >
        <Box id="box">
          <Text color={"blue.400"} fontSize="2em">
            +
            <motion.span
              whileInView={animationClientsCount}
              ref={clientCount}
            ></motion.span>
            k
          </Text>
          <Text color={"blue.400"} fontSize={{ base: "1em", lg: "2em" }}>
            Jobs
          </Text>
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          borderRight={"2px solid gray"}
          height={"15vh"}
        ></Box>

        <Box
          display={{ base: "block", lg: "none" }}
          borderBottom={"2px solid gray"}
          height={"1%"}
          w={"100%"}
        ></Box>
        <Box id="box">
          <Text color={"#f26440"} fontSize="2em">
            <motion.span
              ref={projectCount}
              whileInView={animationProjectsCount}
            >
              1000000
            </motion.span>
          </Text>

          <Text color={"#f26440"} fontSize={{ base: "1em", lg: "2em" }}>
            Matches Made
          </Text>
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          borderRight={"2px solid gray"}
          height={"15vh"}
        ></Box>
        <Box
          display={{ base: "block", lg: "none" }}
          borderBottom={"2px solid gray"}
          height={"1%"}
          w={"100%"}
        ></Box>
        <Box
          id="box"
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize="2em">2M+</Text>
          <Text fontSize={{ base: "0.9em", lg: "2em" }}>
            Members Registered
          </Text>
        </Box>
      </Stack>

      <Stack
        flexDirection={{ base: "column", lg: "row" }}
        mt={{ lg: "5em" }}
        // alignItems={"center"}
        borderBottom={"2px solid gray"}
        justifyContent={"center"}
        height={{ lg: "70%" }}
      >
        <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
          <Image src={before} height={"90%"} />
          <Text fontWeight={"bold"} mt={"1em"}>
            Before Joining us
          </Text>
        </Box>
        <Box
          ml={{ lg: "1em", base: "none" }}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Image src={after} height={"90%"} />
          <Text fontWeight={"bold"} mt={{ base: "-2em", lg: "1em" }}>
            After Joining us
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Mid;

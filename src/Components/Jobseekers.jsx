import { Box, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import work from "../assets/needWork.png";
import { AiOutlineStar } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { LuMousePointerClick } from "react-icons/lu";

function Jobseekers() {
  return (
    <Stack mt={"5em"}>
      <Stack height={"100vh"} flexDir={{ base: "column", lg: "row" }}>
        <Box
          display={"flex"}
          w={{ base: "100%", lg: "50%" }}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box w={"80%"}>
            <Image src={work} />
          </Box>
        </Box>
        <Box p={"2em"}>
          <Text fontSize={"1em"}>Got Talent?</Text>
          <Text fontSize={{ base: "2em", lg: "3.5em" }}>Why job seekers</Text>
          <Text fontSize={{ base: "2em", lg: "3.5em" }}> loves us</Text>
          <Box mt={"1em"}>
            <Stack
              flexDir={"row"}
              alignItems={"center"}

              //   justifyContent={"center"}
            >
              <Icon boxSize={10} as={AiOutlineStar} />
              <Text fontSize={"1em"}>
                Unique jobs at startups and tech companies you can't <br /> find
                anywhere else
              </Text>
            </Stack>
            <Stack
              flexDir={"row"}
              alignItems={"center"}
              mt={"1em"}
              //   justifyContent={"center"}
            >
              <Icon boxSize={10} as={LuMousePointerClick} />
              <Text fontSize={"1em"}>
                Say goodbye to cover letters - your profile is all you need.
                <br /> One click to apply and you're done.
              </Text>
            </Stack>
            <Stack
              flexDir={"row"}
              alignItems={"center"}
              mt={"1em"}
              //   justifyContent={"center"}
            >
              <Icon boxSize={10} as={GrNotes} />
              <Text fontSize={"1em"}>
                Everything you need to know to job search - including <br />
                seeing salary and stock options upfront when looking
              </Text>
            </Stack>
            <Stack
              flexDir={"row"}
              alignItems={"center"}
              mt={"1em"}
              //   justifyContent={"center"}
            >
              <Icon boxSize={10} as={MdOutlineConnectWithoutContact} />
              <Text fontSize={"1em"}>
                Connect directly with founders at top startups - no third <br />{" "}
                party recruiters allowed
              </Text>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Jobseekers;

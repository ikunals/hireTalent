import { Box, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import work from "../assets/needTalent.png";
import { HiUserGroup } from "react-icons/hi";
import { GrNotes } from "react-icons/gr";

import { LuMousePointerClick } from "react-icons/lu";

function Recruits() {
  return (
    <Stack mt={{ base: "10em", lg: "5em" }}>
      <Box
        display={{ base: "block", lg: "none" }}
        borderTop={"2px solid gray"}
      ></Box>
      <Stack
        ml={{ base: "1em", lg: "7em" }}
        height={"auto"}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box p={"2em"}>
          <Text fontSize={"1em"}>Need Talent?</Text>
          <Text fontSize={{ base: "2em", lg: "3.5em" }}>Why recruiters</Text>
          <Text fontSize={{ base: "2em", lg: "3.5em" }}> loves us</Text>
          <Box mt={"1em"}>
            <Stack
              flexDir={"row"}
              alignItems={"center"}

              //   justifyContent={"center"}
            >
              <Icon boxSize={10} as={HiUserGroup} />
              <Text fontSize={"1em"}>
                8 million responsive and startup-ready candidates, with all{" "}
                <br /> the information you need to vet them
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
                Everything you need to kickstart your recruiting - get job
                posts, <br /> company branding, and HR tools set up within 10
                minutes, for free
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
                A free applicant tracking system, or free integration with{" "}
                <br /> any ATS you may already use
              </Text>
            </Stack>
            <Stack
              flexDir={"row"}
              alignItems={"center"}
              mt={"1em"}
              //   justifyContent={"center"}
            >
              <Text fontSize={"1em"}>
                Plus, we can do the vetting for you! With Curated, we review the{" "}
                <br />
                world's top tech talent and highlight candidates directly to you{" "}
                <br />
                2x a week.
              </Text>
            </Stack>
          </Box>
        </Box>
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
      </Stack>
    </Stack>
  );
}

export default Recruits;

import { HStack, Stack } from "@chakra-ui/react";
import React from "react";
import People from "./People";

function Review() {
  return (
    <Stack
      // mt={"1em"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"auto"}
      w={"auto"}
    >
      {/* image heading description job */}
      <HStack flexDirection={{ base: "column", lg: "row" }} height={"auto"}>
        <People
          heading={"John Doe"}
          image={"https://bit.ly/dan-abramov"}
          job={"Data Scientist"}
        />
        <People
          heading={"Tom Cruise"}
          image={"https://bit.ly/kent-c-dodds"}
          job={"Software Engineer"}
        />
      </HStack>
      <HStack flexDirection={{ base: "column", lg: "row" }} height={"auto"}>
        <People
          heading={"Kunal Sawant"}
          image={"https://bit.ly/ryan-florence"}
          job={"Product Manager"}
        />
        <People
          heading={"Yash Rai"}
          image={"https://bit.ly/code-beast"}
          job={"Automobile Engineer"}
        />
      </HStack>
    </Stack>
  );
}

export default Review;

import React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  IconButton,
  Stack,
  Divider,
  Heading,
  Icon,
  Button,
} from "@chakra-ui/react";
import { SiAdobedreamweaver } from "react-icons/si";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box color="black" py={6}>
      <Divider display={{ base: "block", lg: "none" }} mb={"1em"} />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
        // maxW="1200px"
        mx="auto"
        px={4}
      >
        <Box
          mb={{ base: 4, md: 0 }}
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
        >
          <Icon as={SiAdobedreamweaver} mr={"0.2em"} />
          <Heading fontStyle={"italic"} fontSize="xl" fontWeight="bold">
            DreamWork
          </Heading>
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 8 }}
          align={{ base: "center", md: "initial" }}
          mt={{ base: 4, md: 0 }}
          ml={{ md: "auto" }}
        >
          <Link href="#" color="black" _hover={{ textDecoration: "none" }}>
            <Button> Companies</Button>
          </Link>
          <Link href="#" color="black" _hover={{ textDecoration: "none" }}>
            <Button> Resources</Button>
          </Link>
          <Link href="#" color="black" _hover={{ textDecoration: "none" }}>
            <Button> Customers</Button>
          </Link>
          <Link href="#" color="black" _hover={{ textDecoration: "none" }}>
            <Button> Pricing</Button>
          </Link>
        </Stack>
      </Flex>

      <Divider my={6} borderColor="black" />

      {/* Additional content */}
      <Box px={4}>
        <Text fontSize="md">Address: 1234 Street, City, Country</Text>
        <Text fontSize="md">Phone: +1 123-456-7890</Text>
        <Text fontSize="md">Email: info@DreamWork.com</Text>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems={{ base: "center", lg: "end" }}
        maxW="1200px"
        mx="auto"
        px={4}
        flexDirection={{ base: "column", md: "column" }}
      >
        <Stack
          mt={{ base: "4", lg: "0" }}
          direction="row"
          spacing={4}
          mb={{ base: 0, md: 0 }}
        >
          <IconButton
            size={"lg"}
            aria-label="Facebook"
            icon={<AiFillFacebook />}
            color="black"
            bg="transparent"
            _hover={{ color: "blue.500" }}
          />
          <IconButton
            aria-label="Twitter"
            size={"lg"}
            icon={<AiFillTwitterCircle />}
            color="black"
            bg="transparent"
            _hover={{ color: "blue.400" }}
          />
          <IconButton
            size={"lg"}
            aria-label="Instagram"
            icon={<AiFillInstagram />}
            color="black"
            bg="transparent"
            _hover={{ color: "pink.500" }}
          />
        </Stack>
        <Text fontSize="md" textAlign={{ base: "center", md: "right" }}>
          © {new Date().getFullYear()} Your Brand. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;

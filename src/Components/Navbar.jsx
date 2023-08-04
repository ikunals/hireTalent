import React, { useState } from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { SiAdobedreamweaver } from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <Box
        ml={{ lg: "10em", base: "2em", md: "7em" }}
        bgColor={"#fef2f2"}
        px={{ base: "4", lg: "4" }}
        py={{ base: "5", md: "5", lg: "5" }}
        color={"blackAlpha.800"}
        borderColor={"gray.400"}
      >
        <Flex mx="auto" alignItems="center" justifyContent="space-between">
          {/* Logo or Brand */}

          <Box
            display={"flex"}
            color="blackAlpha.600"
            fontWeight="bold"
            fontSize="lg"
            cursor={"pointer"}
            fontStyle={"italic"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Icon mr={"5px"} as={SiAdobedreamweaver} color={"black"} />
            DreamWork
          </Box>

          <Box
            display={{ base: "none", md: "none", lg: "block" }}
            cursor={"pointer"}
          >
            <HStack>
              <Button background={"transparent"} color={"black"}>
                Companies
              </Button>
              <Button ml={"10px"} background={"transparent"}>
                Customers
              </Button>
              <Button ml={"10px"} background={"transparent"}>
                Resources
              </Button>
              <Button ml={"10px"} background={"transparent"}>
                Pricing
              </Button>
            </HStack>
          </Box>

          <Box mr={"10em"} display={{ base: "none", md: "none", lg: "block" }}>
            <Button>Login</Button>
          </Box>

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  mr={"1em"}
                  display={{ base: "block", md: "block", lg: "none" }}
                  isActive={isOpen}
                >
                  {isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={"2em"} />}
                </MenuButton>
                <MenuList
                  height={"50vh"}
                  display={"flex"}
                  flexDir={"column"}
                  // alignItems={"center"}
                >
                  <MenuItem>Companies</MenuItem>
                  <MenuItem>Customer</MenuItem>
                  <MenuItem>Resources</MenuItem>
                  <MenuItem>Pricing</MenuItem>
                  <Button mt={"7em"} colorScheme="orange">
                    Signup
                  </Button>
                  <Button mt={"1em"} colorScheme="blue">
                    Login
                  </Button>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Box>
      <Box
        display={{ base: "none", lg: "block" }}
        borderBottom={"2px solid "}
        borderColor={"gray.400"}
        marginLeft={"10em"}
        marginRight={"10em"}
      ></Box>
    </>
  );
};

export default Navbar;

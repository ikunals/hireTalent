import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function People(props) {
  return (
    <Card maxW={{ base: "xs", lg: "sm" }}>
      <CardBody>
        <Image
          boxSize="150px"
          objectFit="cover"
          src={props.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />

        <Stack mt="6" spacing="3">
          <Heading size="md">{props.heading}</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste
            obcaecati delectus sequi! Quibusdam beatae, eveniet unde voluptates
            minus voluptatibus voluptatum tempore ipsam esse? Itaque, ullam ut?
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {props.job}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Profile
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Know More
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default People;

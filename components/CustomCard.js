import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function CustomCard(service) {
  return (
    <Card maxW="100%" w="100%" my={4}>
      <Image
        objectFit="cover"
        src={service.service.card_image?.filename}
        h="300px"
        w="full"
        alt="Chakra UI"
      />
      <CardHeader>
        <Heading as="h3" color="#000" size="sm">
          {service.service.title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{service.service.description}</Text>
      </CardBody>
    </Card>
  );
}

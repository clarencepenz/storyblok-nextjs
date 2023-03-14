import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="120px"
      bg="#fff"
      borderBottom="1px solid #BCBCBC"
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flex={1}
      >
        <Text
          color="#18181B"
          fontWeight="700"
          lineHeight="32px"
          fontSize="42px"
        >
          Dentics
        </Text>
      </Box>
      <Box display={{ base: "none", md: "block"}}>
        <Button
          bg="#516EFF"
          color="#fff"
          borderRadius="8px"
          fontSize="18px"
          fontWeight="600"
          lineHeight="24px"
          fontFamily="Inter"
          px="40px"
          py="12px"
          h="56px"
          w="187px"
        >
          Appointment
        </Button>
      </Box>
    </Flex>
  );
}

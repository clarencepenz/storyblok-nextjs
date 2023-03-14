import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box bg="#516EFF">
      <Box
        py={8}
        px={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          justifyContent="center"
          gap={10}
        >
          <GridItem
            borderRight={{
              base: "none",
              md: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            pr={6}
          >
            <Text
              color="#fff"
              fontWeight="400"
              lineHeight="34px"
              fontSize="16px"
              letterSpacing="0.04em"
            >
              We are welcoming you
            </Text>

            <Text
              color="#fff"
              fontWeight="600"
              lineHeight="40px"
              fontSize="28px"
              py={8}
            >
              Want to visit our clinic?
            </Text>

            <Text
              color="#fff"
              fontWeight="400"
              lineHeight="24px"
              fontSize="14px"
              letterSpacing="0.04em"
            >
              Saturday - Thrusday <br />
              10 am- 9 pm
            </Text>
          </GridItem>
          <GridItem
            borderRight={{
              base: "none",
              md: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            pr={6}
          >
            <Text
              color="#fff"
              fontWeight="400"
              lineHeight="34px"
              fontSize="16px"
              letterSpacing="0.04em"
            >
              Important link
            </Text>

            <Text
              color="#fff"
              fontWeight="600"
              lineHeight="40px"
              fontSize="28px"
              py={8}
            >
              Want to visit our clinic?
            </Text>

            <Text
              color="#fff"
              fontWeight="400"
              lineHeight="24px"
              fontSize="14px"
              letterSpacing="0.04em"
            >
              Saturday - Thrusday <br />
              10 am- 9 pm
            </Text>
          </GridItem>
          <GridItem pr={6}>
            <Text
              color="#fff"
              fontWeight="400"
              lineHeight="34px"
              fontSize="16px"
              letterSpacing="0.04em"
            >
              Say hello to us
            </Text>

            <Text
              color="#fff"
              fontWeight="400"
              lineHeight="34px"
              fontSize="16px"
              letterSpacing="0.04em"
              py={6}
            >
              hello@reallygreatsite.com
            </Text>

            <Text
              color="#fff"
              fontWeight="400"
              lineHeight="24px"
              fontSize="14px"
              letterSpacing="0.04em"
            >
              Address <br />
              123 Anywhere St., Any <br />
              City, NY 39200
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box bg=" #216583" py="20px">
        <Text
          color="#fff"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          textAlign="center"
        >
          © 2001-2022, All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
}

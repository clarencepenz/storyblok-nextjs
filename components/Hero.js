import { storyblokEditable } from "@storyblok/react";
import { Text, Flex, Box, Image, Button, Heading } from "@chakra-ui/react";

const Hero = ({ blok }) => {
  return (
    <Flex
      h="100vh"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      {...storyblokEditable(blok)}
    >
      <Flex flexDirection="column" flex={1} justifyContent="center" mt={-4}>
        <Heading
          fontWeight="700"
          fontSize="54px"
          lineHeight="74px"
          color="#18181B"
          textTransform="capitalize"
          my={4}
        >
          {blok.title}
        </Heading>
        <Text
          fontSize="20px"
          lineHeight="34px"
          color="#777"
          fontWeight="400"
          mb={8}
        >
          {blok.description}
        </Text>
        <Box display="flex" gap={8}>
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
            w="197px"
          >
            Get Started
          </Button>
          <Button
            bg="transparent"
            color="#52525B"
            borderRadius="8px"
            fontSize="18px"
            fontWeight="600"
            lineHeight="24px"
            fontFamily="Inter"
            border="1px solid #52525B"
            px="40px"
            py="12px"
            h="56px"
            w="195px"
            display={{ base: "none", md: "block" }}
          >
            Learn More
          </Button>
        </Box>
      </Flex>
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="flex-end"
        display={{ base: "none", md: "block" }}
        w="100%"
      >
        <Image
          src={blok.hero_image.filename}
          h="496px"
          w="auto"
          objectFit="contain"
          alt="hero-bg"
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
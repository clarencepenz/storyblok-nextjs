import { storyblokEditable } from "@storyblok/react";
import { Flex, Image, Text } from "@chakra-ui/react";

const Section = ({ blok }) => (
  <Flex
    justifyContent={{md: "center", lg: "space-between"}}
    alignItems="center"
    mb={8}
    {...storyblokEditable(blok)}
    gap={4}

  >
    <Flex
      flex={1}
      display={{ base: "none", md: "none",  lg: "block" }}
      w="100%"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Image
        src={blok.section_image.filename}
        h="340px" 
        w="auto"
        objectFit="contain"
        alt="Section Image"
      />
    </Flex>
    <Flex
      flexDirection="column"
      bg="#F8FAFC"
      borderRadius="16px"
      border="1px solid rgba(82, 82, 91, 0.1)"
      w="634px"
      px={{ base: 4, md: "4rem"}}
      py={{ base: 4, md: "2rem"}}
    >
      <Text fontSize="24px" fontWeight="500" lineHeight="34px" color="#18181B">
        {blok.title}
      </Text>
      <Text
        fontSize="16px"
        fontWeight="400"
        lineHeight="34px"
        letterSpacing="0.04em"
        color="#777"
        my={4}
      >
        {blok.subtitle}
      </Text>
    </Flex>
  </Flex>
);

export default Section;

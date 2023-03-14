import { storyblokEditable } from "@storyblok/react";
import { Box, Text } from "@chakra-ui/react";

const Teaser = ({ blok }) => (
  <Box justifyContent="flex-start" {...storyblokEditable(blok)} py={4}>
    <Text
      fontWeight="700"
      fontSize="42px"
      lineHeight="42px"
      color="#000"
    >
      {blok.headline}
    </Text>
  </Box>
);

export default Teaser;

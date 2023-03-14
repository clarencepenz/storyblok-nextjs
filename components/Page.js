import { Box } from "@chakra-ui/react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Page = ({blok}) => (
  <Box {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </Box>
);
 
export default Page;
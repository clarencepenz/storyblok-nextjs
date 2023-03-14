import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Grid as GridContainer } from "@chakra-ui/react";

const Grid = ({ blok }) => {
  return (
    <GridContainer
      templateColumns={{base: "1fr", md: "repeat(3, 1fr)"}}
      gap={4}
      {...storyblokEditable(blok)}
    >
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </GridContainer>
  );
};

export default Grid;

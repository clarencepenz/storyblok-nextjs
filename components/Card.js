import { storyblokEditable } from "@storyblok/react";
import { Grid } from "@chakra-ui/react";
import CustomCard from "./CustomCard";

const Card = ({ blok }) => (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }}
      justifyContent="center"
      gap={4}
      {...storyblokEditable(blok)}
      mb={4}
    >
      <CustomCard service={blok} />
    </Grid>
);

export default Card;

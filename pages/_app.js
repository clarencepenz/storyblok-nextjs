import Card from "@/components/Card";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Page from "@/components/Page";
import Section from "@/components/Section";
import Teaser from "@/components/Teaser";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { apiPlugin, storyblokInit } from "@storyblok/react";

const components = {
  grid: Grid,
  hero: Hero,
  card: Card,
  section: Section,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
  components
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

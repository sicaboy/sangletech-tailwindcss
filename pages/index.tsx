import Head from "next/head";
import IllustratedHeroWithScreenshotSection from "../components/page-examples/landing-pages/illustrated_hero_with_screenshot_section";
import BackgroundImageHeroWithAlternatingFeatures from "../components/page-examples/landing-pages/background_image_hero_with_alternating_features";
import SimpleWithOffsetScreenshotHero from "../components/page-examples/landing-pages/simple_with_offset_screenshot_hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <IllustratedHeroWithScreenshotSection />
    </>
  );
}

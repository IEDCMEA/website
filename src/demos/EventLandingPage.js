import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import TwoColumnWithVideo from "components/hero/TwoColumnWithVideo";
import TwoColSingleFeatureWithStats from "components/features/TwoColSingleFeatureWithStats";
import TwoColSingleFeatureWithStatstwo from "components/features/TwoColSingleFeaturewithStatstwo";
import Team from "components/cards/ProfileThreeColGrid";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <TwoColSingleFeatureWithStats/>
    <TwoColSingleFeatureWithStatstwo/>
    {/* <Features /> */}
    <Team />
    {/* <Blog />
    <Testimonial /> */}
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);

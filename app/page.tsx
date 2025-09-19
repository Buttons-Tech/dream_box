import Image from "next/image";
import Nav_bar from "./Components/Nav_bar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Middle_CTA from "./Components/Middle_CTA";

export default function Home() {
  return (
        <>
        <Nav_bar/>
        <Hero/>

        <Middle_CTA />
        <Footer />
        </>
  );
}

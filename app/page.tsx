import Nav_bar from "./Components/Nav_bar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Middle_CTA from "./Components/Middle_CTA";
import Testimonials from "./Components/Testimonials";
import Programs from "./Components/Programs";
import Howitwork from "./Components/Howitwork";

export default function Home() {
  return (
        <>
        <Nav_bar/>
        <Hero/>
        <Programs />


        <Howitwork />
        <Testimonials />
        <Middle_CTA />
        <Footer />
        </>
  );
}

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import StickyContactBar from "@/components/StickyContactBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Header />
      <Hero />
      <ScrollReveal direction="up">
        <BookingForm />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <WhyChooseUs />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <Services />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal direction="scale" threshold={0.08}>
        <Fleet />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal direction="up" threshold={0.08}>
        <BlogSection />
      </ScrollReveal>
      <StickyContactBar />
      <Footer />
    </div>
  );
};

export default Index;

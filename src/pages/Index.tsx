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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BookingForm />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Fleet />
      <Testimonials />
      <BlogSection />
      <StickyContactBar />
      <Footer />
    </div>
  );
};

export default Index;

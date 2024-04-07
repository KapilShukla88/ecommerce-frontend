import HeroSection from "./components/hero-section";
import TrendsComponent from "./components/trends-component";
import PopularProducts from "./components/popular-products";
import Newsletter from "./components/newsletter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrendsComponent />
      <PopularProducts />
      <Newsletter />
    </main>
  );
}

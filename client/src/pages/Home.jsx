import Hero from "../components/Hero";
import BrandBanner from "../components/BrandBanner";
import Products from "../components/Products";
import TopSelling from "../components/TopSelling";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandBanner />
      <Products />
      <TopSelling />
        <Categories />
    </>
  );
}
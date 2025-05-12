import { ProductSection } from "../product/ProductSection";
import BannerStatic from "../ui/home/BannerStatic";
import { CategoryIcons } from "../ui/home/CategoryIcons";
import { HeroBanner } from "../ui/home/HeroBanner";
import { MainLayout } from "./MainLayout";
import { babyKidsProducts, featuredProducts, homeLivingProducts, kitchenProducts } from "../../lib/data/products";

export default function Layout(){
    return(
    <MainLayout>
      <HeroBanner />
      <CategoryIcons />

      {/* // Products Wommen*/}
      <ProductSection 
        title="Women's Fashion"
        categorySlug="women-fashion"
        products={featuredProducts.slice(0,6)}/>
        
      {/* //Banner Estatico */}
      <BannerStatic />

      {/* //Products Baby */}
      <ProductSection 
        title="Baby, Kids & Toys"
        categorySlug="baby-kids-toys"
        products={babyKidsProducts.slice(0,6)}/>


      {/* //Products Home */}
      <ProductSection 
        title="Home & Living"
        categorySlug="home-living"
        products={homeLivingProducts.slice(0,6)}/>

      {/* //Kitchen Accesories */}
      <ProductSection 
        title="Kitchen Accessories"
        categorySlug="kitchen-accessories"
        products={kitchenProducts.slice(0,6)}/>
      

    </MainLayout>
    )

}
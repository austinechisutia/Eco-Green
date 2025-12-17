import Hero from "@/app/components/Hero"
import ProductList from "./components/ProducCard/Productlist";
import KitchenCraft from "./components/kitchenCraft"
import Gallery from "./components/Gallery"




export default function Home() {
  return (
    <>
      <div className="p-10">
        <Hero />
        <ProductList />
        <KitchenCraft />
        <Gallery />
      </div>
    </>
  );
}

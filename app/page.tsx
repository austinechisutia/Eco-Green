import Hero from "@/app/components/Hero"
import ProductList from "./components/ProducCard/Productlist";
import KitchenCraft from "./components/kitchenCraft"




export default function Home() {
  return (
    <>
      <Hero />
      <div className="p-10">
        <ProductList />
      </div>
      <KitchenCraft />
    </>
  );
}

import { title } from "process";
import ProductCard from "./GalleryCard";
import Text from "./ProducCard/top";


const products = [
  {
    id: 1,
    name: "Bamboo Cutting Board",
    image: "/ceramic.png",
    title: "Cup Eco",
  },
  {
    id: 2,
    name: "Coconut Bowl Set",
    image: "/fridge.png",
    title: "Cup Eco",
  },
  {
    id: 3,
    name: "Wooden Cooking Spoons",
    image: "/Blender.png",
    title: "Cup Eco",
  },
  {
    id: 4,
    name: "Organic Cotton Dish",
    image: "/waterbottle.png",
    title: "Cup Eco",
  },
  {
    id: 5,
    name: "Organic Cotton Dish",
    image: "/waterbottle.png",
    title: "Cup Eco",
  },
  {
    id: 6,
    name: "Organic Cotton Dish",
    image: "/waterbottle.png",
    title: "Cup Eco",
  },
];

export default function ProductList() {
  return (
    <>
      <Text />

      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 flex-nowrap">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0">
              <ProductCard
                name={product.name}
                image={product.image}
                title={product.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

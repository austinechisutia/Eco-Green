import ProductCard from "./ProductCard";
import Text from "./top";


const products = [
  {
    id: 1,
    name: "Bamboo Cutting Board",
    price: 35,
    image: "/ceramic.png",
    rating: 5,
    tag:"promotion",

  },
  {
    id: 2,
    name: "Coconut Bowl Set",
    price: 28,
    image: "/fridge.png",
    rating: 4,
    tag:"New",

  },
  {
    id: 3,
    name: "Wooden Cooking Spoons",
    price: 22,
    image: "/Blender.png",
    rating: 5,
    tag:"Customer Favourite",

  },
  {
    id: 4,
    name: "Organic Cotton Dish",
    price: 18,
    image: "/waterbottle.png",
    rating: 4,
    tag:"promotion",

  },
  {
    id: 5,
    name: "Stainless Steel Straws",
    price: 12,
    image: "/Sufuria.png",
    rating: 5,
    tag:"promotion",

  },
  {
    id: 6,
    name: "Bamboo Cutting Board",
    price: 35,
    image: "/ceramic.png",
    rating: 5,
    tag:"promotion",

  },
  {
    id: 7,
    name: "Coconut Bowl Set",
    price: 28,
    image: "/fridge.png",
    rating: 4,
    tag:"promotion",

  },
  {
    id: 8,
    name: "Wooden Cooking Spoons",
    price: 22,
    image: "/Blender.png",
    rating: 5,
    tag:"promotion",

  },
  {
    id: 9,
    name: "Organic Cotton Dish",
    price: 18,
    image: "/waterbottle.png",
    rating: 4,
    tag:"promotion",

  },
  {
    id: 10,
    name: "Stainless Steel Straws",
    price: 12,
    image: "/Sufuria.png",
    rating: 3,
    tag:"promotion",
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
                price={product.price}
                image={product.image}
                rating={product.rating}
                tag={product.tag}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

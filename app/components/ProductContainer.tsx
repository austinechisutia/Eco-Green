import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart?: (id: string) => void;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="w-64 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      {/* Product Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 256px"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>

        <p className="mt-1 text-gray-700 font-medium">${price.toFixed(2)}</p>

        <button
          onClick={() => onAddToCart?.(id)}
          className="mt-4 w-full rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

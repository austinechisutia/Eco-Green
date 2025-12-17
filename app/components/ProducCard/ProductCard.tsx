import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";



type ProducCardProps = {
    name: string;
    price: number;
    image: string;
    rating: number;
    tag: string;
}


export default function ProductCard({
    name,
    price,
    image,
    rating,
    tag
}: ProducCardProps){
    return (
        
      <div className="w-64 bg-white rounded-lg p-4 shadow-sm">
        <div className="relative w-full h-64">
          <div className="absolute top-2 left-2 z-50">
            <span
              className="inline-block bg-white/30 px-2 py-1 text-white italic rounded-full border"
            >
              {tag}
            </span>
          </div>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-md z-20"
          />
        </div>

        {/* Product Name */}
        <h3 className="mt-3 font-semibold text-lg">{name}</h3>

        {/* Stars */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={`w-4 h-4 ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({rating}/5)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <p className="mt-2 font-bold text-xl">${price}</p>
          <button className="mt-4 px-3 bg-green-900 text-white py-2 rounded-full hover:opacity-80 transition">
            + Cart
          </button>
        </div>
      </div>
    );
}
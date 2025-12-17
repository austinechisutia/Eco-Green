import Image from "next/image";



type ProductCardProps = {
    name: string;
    image: string;
    title: string;

}


export default function GalleryCard({
    name,
    image,
    title
}: ProductCardProps){
    return (
      <div className=" relative w-64 bg-grey-100 rounded-lg p-4 shadow-sm  h-100">
        <div className="relative w-full h-64">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-md z-20"
          />
        </div>

        <div className="flex items-center justify-center flex-col  absolute bottom-10 z-50">
          {/* Product Name */}
          <h3 className="mt-3 font-semibold text-lg">
            <span className="text-white font-serif">Explore</span>
            <br />
            {title}
          </h3>

          {/* Stars */}

          {/* Price */}
          <div className="flex items-center justify-between">
            <button className="mt-4 px-8 bg-white/30 border text-green-900 py-1 rounded-full hover:opacity-80 transition">
              Add
            </button>
          </div>
        </div>
      </div>
    );
}
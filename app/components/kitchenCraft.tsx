import Image from "next/image";
import { QueueListIcon } from "@heroicons/react/16/solid";

export default function BackgroundImage(){
    return (
      <section className="w-full px-10 py-10">
        <div className="relative w-full h-150 rounded-2xl overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="BackgroundImage"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="object-cover"
          />
          <div className="text-white absolute bottom-10 w-1/2 p-6 text-2xl">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              nulla aperiam repellat tenetur dolore excepturi quos laborum ad,
              cum deserunt nam delectus, dolores quo quae et facilis incidunt
              non voluptatum?
            </p>
          </div>
        </div>

        <div className="m-10 p-10">
          <div className="m-10 p-10 grid grid-cols-1 sm:grid-cols-3 gap-10  justify-between">
            <div className="h-40 bg-gray-300 rounded-lg flex items-center justify-center gap-10">
              <div className="w-15 h-15 bg-gray-200 rounded-full flex items-center justify-center">
                <QueueListIcon className="h-10 text-green-900" />
              </div>
              <p className="text-2xl font-semibold text-green-900">
                <span className="font-serif">Natural</span> <br /> Finish
              </p>
            </div>
            <div className="h-40 bg-gray-300 rounded-4xl flex items-center justify-center gap-10">
              <div className="w-15 h-15 bg-gray-200 rounded-full flex items-center justify-center">
                <QueueListIcon className="h-10 text-green-900" />
              </div>
              <p className="text-2xl font-semibold text-green-900">
                <span className="font-serif">Natural</span> <br /> Finish
              </p>
            </div>

            <div className="h-40 bg-gray-300 rounded-lg flex items-center justify-center gap-10">
              <div className="w-15 h-15 bg-gray-200 rounded-full flex items-center justify-center">
                <QueueListIcon className="h-10 text-green-900" />
              </div>
              <p className="text-2xl font-semibold text-green-900">
                <span className="font-serif">Natural</span> <br /> Finish
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
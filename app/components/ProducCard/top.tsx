import More from "@/app/components/More"

export default function Text(){
    return (
      <>
        <div className="flex items-center justify-between py-10">
          <div className="flex-col">
            <p className="text-3xl">Eco Essential Planet-Friendly</p>
            <p className="text-2xl">
              Best selling <span className="font-serif">Products</span>
            </p>
          </div>
          <More />
        </div>
      </>
    );
}
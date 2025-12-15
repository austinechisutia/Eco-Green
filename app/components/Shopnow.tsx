import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ShopNow() {
  return (
    <button
      className="
        inline-flex items-center gap-2
        rounded-full bg-green-200
        px-6 py-3
        text-sm font-semibold text-green-900
        transition-all duration-200
        hover:bg-green-400 hover:gap-3
        focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2
        active:scale-95
      "
    >
      <span>Shop Now</span>
      <ArrowRightIcon className="h-5 w-5" />
    </button>
  );
}

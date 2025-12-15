import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function More() {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap w-max">
      <p className="text-2xl underline leading-none">More information</p>
      <ArrowRightIcon className="w-7 h-7" />
    </div>
  );
}

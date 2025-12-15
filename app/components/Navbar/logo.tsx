import Link from "next/link";


type LogoProps = {
    text?: string;
}

export default function Logo({text = "Homevigne"}: LogoProps){
  const firstPart = text.slice(0, 4);
  const secondPart = text.slice(4);
  return (
    <Link
      href="/"
      className="text-3xl font-bold tracking-tight text-white hover:opacity-80 transition"
    >
      <span className="font-sans">{firstPart}</span>
      <span className="font-serif">{secondPart}</span>
    </Link>
  );
}
import Image from "next/image";

const logos = [
  { src: "/brands/ua.svg", alt: "Under Armour logo", width: 120, height: 200 },
  { src: "/brands/nba.png", alt: "NBA logo", width: 120, height: 200 },
  { src: "/brands/ne.png", alt: "New Era logo", width: 120, height: 200 },
  { src: "/brands/s.png", alt: "Stance logo", width: 120, height: 0 },
  {
    src: "/brands/mm.png",
    alt: "Mitchell & Ness logo",
    width: 160,
    height: 200,
  },
];

export default function BrandLogos() {
  return (
    <div className="flex flex-row flex-wrap gap-x-3">
      {logos.map((logo) => (
        <Image
          key={logo.src}
          aria-hidden
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="object-contain"
        />
      ))}
    </div>
  );
}

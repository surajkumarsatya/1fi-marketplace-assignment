import Image from "next/image";

export function HeroBanner() {
  return (
    <section>
      <Image 
        src='/images/hero-banner.webp'
        alt="hero-banner"
        width={1000}
        height={1000}
      />
    </section>
  );
}
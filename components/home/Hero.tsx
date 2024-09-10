import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center bg-white min-w-fit p-8 md:p-14 rounded-md shadow-sm">
      <div>
        <h1 className="max-w-xl font-semibold text-4xl tracking-tight sm:text-5xl">
          Shop at Diyostore
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Discover a world of quality and style. At Diyostore, we bring you the
          best products for your needs. Whether it's for home, lifestyle, or
          fashion, elevate your experience with us. Join our community and enjoy
          exclusive offers and unmatched service
        </p>
        <Button asChild size="lg" className="mt-10 bg-slate-900">
          <Link href="/products">Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;

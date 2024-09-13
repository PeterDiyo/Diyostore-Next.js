import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl lg:text-3xl font-semibold hover:text-slate-800"
    >
      Diyostore
    </Link>
  );
}

export default Logo;

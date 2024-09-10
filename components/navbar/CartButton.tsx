import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";

const CartButton = () => {
  // temp
  const numItemsInCart = 10;

  return (
    <article className="flex justify-center items-center relative">
      <Link href="/cart">
        <HiOutlineShoppingCart style={{ fontSize: "26px" }} />
        <span className="absolute -top-3 -right-3 bg-slate-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </article>
  );
};

export default CartButton;

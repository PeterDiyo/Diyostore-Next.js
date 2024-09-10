import { Suspense } from "react";
import Container from "../global/Container";
import CartButton from "./CartButton";
import LinksDropDown from "./LinksDropDown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-4 gap-4">
        <div className="flex items-center justify-between w-full sm:w-auto sm:flex-row sm:gap-4">
          <Logo />
          <div className="flex sm:hidden gap-8 items-center">
            <CartButton />
            <LinksDropDown />
          </div>
        </div>
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="hidden gap-8 items-center sm:flex">
          <CartButton />
          <LinksDropDown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

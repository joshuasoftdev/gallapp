//import Logo from "./Logo";
import Link from "next/link";
//import { FacebookIcon } from "./icons";
//import { SunIcon } from "@/project files/Icons";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4 px-10">
      <nav className="border-dark bg-light/80 fixed right-1/2 top-6 flex w-max translate-x-1/2 items-center rounded-full border border-solid px-8 py-3 font-medium capitalize backdrop-blur-sm">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button></button>
      </nav>
      <div>
        <a
          href="https://www.facebook.com/scofftysac916"
          className="mr-4 inline-block h-8 w-8"
        ></a>
        <a href=""></a>
      </div>
    </header>
  );
};

export default Header;
